/*
 * ブラウザ内だけで動く換算。外部へは送らない。
 * ケーブル係数の出典は learn/calculator/ の出典節。
 */
(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  root.RfCalc = api;
  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        api.mount(document);
      });
    } else {
      api.mount(document);
    }
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  var FT_IN_M = 0.3048;

  var CABLES = [
    {
      id: "rg58",
      kind: "formula",
      a: 0.3455,
      b: 0.2373,
      fUnit: "GHz",
      attUnit: "dB/m",
      fMinMHz: 100,
      fMaxMHz: 1000
    },
    {
      id: "rg174",
      kind: "formula",
      a: 0.888,
      b: 0.034,
      fUnit: "GHz",
      attUnit: "dB/m",
      fMinMHz: 100,
      fMaxMHz: 1000
    },
    {
      id: "rg316",
      kind: "formula",
      a: 0.7727,
      b: 0.0972,
      fUnit: "GHz",
      attUnit: "dB/m",
      fMinMHz: 200,
      fMaxMHz: 3000
    },
    {
      id: "rg402",
      kind: "formula",
      a: 0.32544,
      b: 0.03967,
      fUnit: "GHz",
      attUnit: "dB/m",
      fMinMHz: 200,
      fMaxMHz: 33000
    },
    {
      id: "sucoform141",
      kind: "formula",
      a: 0.355,
      b: 0.04,
      fUnit: "GHz",
      attUnit: "dB/m",
      fMinMHz: 200,
      fMaxMHz: 33000
    },
    {
      id: "lmr400",
      kind: "formula",
      a: 0.122290,
      b: 0.000260,
      fUnit: "MHz",
      attUnit: "dB/100ft",
      fMinMHz: 30,
      fMaxMHz: 8000
    },
    {
      id: "3d-2v",
      kind: "table",
      fMinMHz: 10,
      fMaxMHz: 900,
      points: [
        { mhz: 10, dbPerKm: 47 },
        { mhz: 400, dbPerKm: 309 },
        { mhz: 900, dbPerKm: 471 }
      ]
    },
    {
      id: "5d-2v",
      kind: "table",
      fMinMHz: 10,
      fMaxMHz: 900,
      points: [
        { mhz: 10, dbPerKm: 27 },
        { mhz: 400, dbPerKm: 183 },
        { mhz: 900, dbPerKm: 281 }
      ]
    }
  ];

  function cableById(id) {
    for (var i = 0; i < CABLES.length; i++) {
      if (CABLES[i].id === id) return CABLES[i];
    }
    return null;
  }

  function metricsFromGamma(gamma) {
    if (!(gamma >= 0) || gamma > 1) {
      return { ok: false, message: "反射係数の絶対値は、0 から 1 のあいだです。" };
    }
    if (gamma === 0) {
      return { ok: true, vswr: 1, gamma: 0, rl: Infinity, mismatch: 0, reflected: 0 };
    }
    if (gamma === 1) {
      return { ok: true, vswr: Infinity, gamma: 1, rl: 0, mismatch: Infinity, reflected: 100 };
    }
    var vswr = (1 + gamma) / (1 - gamma);
    var rl = -20 * Math.log10(gamma);
    var mismatch = -10 * Math.log10(1 - gamma * gamma);
    var reflected = gamma * gamma * 100;
    return { ok: true, vswr: vswr, gamma: gamma, rl: rl, mismatch: mismatch, reflected: reflected };
  }

  function fromVswr(vswr) {
    if (!(vswr >= 1) || !isFinite(vswr)) {
      return { ok: false, message: "VSWR は 1 未満にはできません。1 が、反射が無いことに相当します。" };
    }
    if (vswr > 1e6) {
      return { ok: false, message: "VSWR が大きすぎて、この欄からは安定して換算できません。反射係数か反射電力を入れてください。" };
    }
    var gamma = vswr === 1 ? 0 : (vswr - 1) / (vswr + 1);
    return metricsFromGamma(gamma);
  }

  function fromReturnLoss(rl) {
    if (!(rl >= 0) || !isFinite(rl)) {
      return {
        ok: false,
        message: "リターンロスは、このページでは 0 dB 以上の正の数です。負の dB で書かれた S11 は、符号を除いた大きさを入れてください。"
      };
    }
    if (rl === 0) return metricsFromGamma(1);
    var gamma = Math.pow(10, -rl / 20);
    if (gamma > 1) gamma = 1;
    return metricsFromGamma(gamma);
  }

  function fromMismatch(mismatch) {
    if (!(mismatch >= 0) || !isFinite(mismatch)) {
      return { ok: false, message: "ミスマッチ損失は 0 dB 未満にはできません。" };
    }
    if (mismatch === 0) return metricsFromGamma(0);
    var power = 1 - Math.pow(10, -mismatch / 10);
    if (!(power >= 0)) {
      return { ok: false, message: "ミスマッチ損失から反射係数へ戻せません。" };
    }
    if (power > 1) power = 1;
    return metricsFromGamma(Math.sqrt(power));
  }

  function fromReflected(percent) {
    if (!(percent >= 0) || percent > 100 || !isFinite(percent)) {
      return { ok: false, message: "反射電力は 0% から 100% です。" };
    }
    return metricsFromGamma(Math.sqrt(percent / 100));
  }

  function trimFixed(n, digits) {
    var s = n.toFixed(digits);
    if (s.indexOf(".") === -1) return s;
    return s.replace(/0+$/, "").replace(/\.$/, "");
  }

  function formatVswr(n) {
    if (!isFinite(n)) return "無限大";
    return trimFixed(n, 4);
  }

  function formatGamma(n) {
    if (!isFinite(n)) return "無限大";
    if (n === 0) return "0";
    if (n > 0 && n < 0.00005) return "< 0.0001";
    return trimFixed(n, 4);
  }

  function formatRl(n) {
    if (!isFinite(n)) return "無限大";
    return n.toFixed(2);
  }

  function formatMismatch(n) {
    if (!isFinite(n)) return "無限大";
    if (n > 0 && n < 0.0005) return "< 0.001";
    return n.toFixed(3);
  }

  function formatReflected(n) {
    if (!isFinite(n)) return "無限大";
    if (n > 0 && n < 0.005) return "< 0.01";
    return n.toFixed(2);
  }

  function formatReflection(m) {
    return {
      vswr: formatVswr(m.vswr),
      gamma: formatGamma(m.gamma),
      rl: formatRl(m.rl),
      mismatch: formatMismatch(m.mismatch),
      reflected: formatReflected(m.reflected)
    };
  }

  function reflectionSummary(m) {
    var f = formatReflection(m);
    var rlText = f.rl === "無限大" ? "無限大（反射が無いときの極限）" : f.rl + " dB";
    var mmText = f.mismatch === "無限大" ? "無限大" : f.mismatch + " dB";
    var refText = f.reflected.indexOf("<") === 0 ? f.reflected + "%" : f.reflected + "%";
    return "VSWR " + f.vswr + "、リターンロス " + rlText + "、反射係数の絶対値 " + f.gamma + "、ミスマッチ損失 " + mmText + "、反射電力 " + refText + " です。";
  }

  function normalizeNumber(raw) {
    var s = String(raw == null ? "" : raw).trim();
    if (!s) return { empty: true };
    s = s.replace(/[０-９]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) - 0xfee0);
    });
    s = s.replace(/．/g, ".").replace(/\s+/g, "");
    if (s.indexOf(".") === -1 && /,/.test(s)) {
      s = s.replace(",", ".");
    } else {
      s = s.replace(/,/g, "");
    }
    if (!/^[+-]?(?:\d+\.?\d*|\.\d+)$/.test(s)) {
      if (/^[+-]?\d*\.?$/.test(s) || s === "+" || s === "-" || s === "." || s === "+." || s === "-.") {
        return { incomplete: true };
      }
      return { invalid: true };
    }
    var n = Number(s);
    if (!isFinite(n)) return { invalid: true };
    return { value: n };
  }

  function dbPerMeterFromAlpha(alpha, attUnit) {
    if (attUnit === "dB/m") return alpha;
    if (attUnit === "dB/100m") return alpha / 100;
    if (attUnit === "dB/100ft") return alpha / (100 * FT_IN_M);
    return NaN;
  }

  function formulaAlpha(a, b, freqMHz, fUnit) {
    var f = fUnit === "GHz" ? freqMHz / 1000 : freqMHz;
    if (!(f > 0)) return NaN;
    return a * Math.sqrt(f) + b * f;
  }

  function interpolateTable(cable, freqMHz) {
    var points = cable.points;
    var i;
    for (i = 0; i < points.length; i++) {
      if (Math.abs(freqMHz - points[i].mhz) <= 1e-6) {
        return { dbPerM: points[i].dbPerKm / 1000, mode: "table-point", point: points[i] };
      }
    }
    var lo = null;
    var hi = null;
    for (i = 0; i < points.length - 1; i++) {
      if (freqMHz > points[i].mhz && freqMHz < points[i + 1].mhz) {
        lo = points[i];
        hi = points[i + 1];
        break;
      }
    }
    if (!lo) return null;
    var t = (Math.log10(freqMHz) - Math.log10(lo.mhz)) / (Math.log10(hi.mhz) - Math.log10(lo.mhz));
    var dbPerKm = lo.dbPerKm + t * (hi.dbPerKm - lo.dbPerKm);
    return { dbPerM: dbPerKm / 1000, mode: "table-interp", lo: lo, hi: hi };
  }

  function rangeMessage(fMinMHz, fMaxMHz) {
    return "周波数が、このケーブルの掲載範囲（" + formatMHz(fMinMHz) + " から " + formatMHz(fMaxMHz) + "）の外です。範囲の外は計算しません。";
  }

  function formatMHz(mhz) {
    if (mhz >= 1000 && mhz % 1000 === 0) return String(mhz / 1000) + " GHz";
    if (mhz >= 1000) return trimFixed(mhz / 1000, 3) + " GHz";
    return trimFixed(mhz, 3) + " MHz";
  }

  function finishLoss(dbPerM, lengthM, extra) {
    if (!(dbPerM >= 0) || !isFinite(dbPerM)) {
      return { ok: false, message: "減衰を計算できません。係数と周波数を確認してください。" };
    }
    var totalDb = dbPerM * lengthM;
    var remainRatio = Math.pow(10, -totalDb / 10);
    var result = {
      ok: true,
      dbPerM: dbPerM,
      totalDb: totalDb,
      remainRatio: remainRatio,
      remainPercent: remainRatio * 100
    };
    var key;
    for (key in extra) {
      if (Object.prototype.hasOwnProperty.call(extra, key)) result[key] = extra[key];
    }
    return result;
  }

  function cableLoss(input) {
    var freqMHz = input.freqMHz;
    var lengthM = input.lengthM;
    if (!(freqMHz > 0) || !isFinite(freqMHz)) {
      return { ok: false, message: "周波数は 0 より大きい値にしてください。" };
    }
    if (!(lengthM > 0) || !isFinite(lengthM)) {
      return { ok: false, message: "長さは 0 より大きい値にしてください。" };
    }
    if (lengthM > 1e6) {
      return { ok: false, message: "長さが大きすぎます。メートルかフィートの取り違えがないか確認してください。" };
    }

    if (input.kind === "custom") {
      var a = input.a;
      var b = input.b;
      if (!(a >= 0) || !(b >= 0) || !isFinite(a) || !isFinite(b) || (a === 0 && b === 0)) {
        return { ok: false, message: "係数 a と b は 0 以上の数です。両方を 0 にはできません。" };
      }
      if (input.fUnit !== "MHz" && input.fUnit !== "GHz") {
        return { ok: false, message: "周波数の単位は MHz か GHz です。" };
      }
      if (input.attUnit !== "dB/m" && input.attUnit !== "dB/100m" && input.attUnit !== "dB/100ft") {
        return { ok: false, message: "減衰の単位を選んでください。" };
      }
      if (input.fMaxMHz != null) {
        if (!(input.fMaxMHz > 0) || freqMHz > input.fMaxMHz) {
          return { ok: false, message: "入力した周波数が、手入力した上限を超えています。上限の外は計算しません。" };
        }
      }
      var alphaCustom = formulaAlpha(a, b, freqMHz, input.fUnit);
      var dbPerMCustom = dbPerMeterFromAlpha(alphaCustom, input.attUnit);
      return finishLoss(dbPerMCustom, lengthM, { mode: "custom", alpha: alphaCustom, attUnit: input.attUnit });
    }

    var cable = cableById(input.cableId);
    if (!cable) return { ok: false, message: "ケーブルを選んでください。" };
    if (freqMHz < cable.fMinMHz || freqMHz > cable.fMaxMHz) {
      return { ok: false, message: rangeMessage(cable.fMinMHz, cable.fMaxMHz) };
    }
    if (cable.kind === "formula") {
      var alpha = formulaAlpha(cable.a, cable.b, freqMHz, cable.fUnit);
      var dbPerM = dbPerMeterFromAlpha(alpha, cable.attUnit);
      return finishLoss(dbPerM, lengthM, { mode: "formula", alpha: alpha, attUnit: cable.attUnit, cable: cable });
    }
    var interpolated = interpolateTable(cable, freqMHz);
    if (!interpolated) return { ok: false, message: rangeMessage(cable.fMinMHz, cable.fMaxMHz) };
    return finishLoss(interpolated.dbPerM, lengthM, {
      mode: interpolated.mode,
      point: interpolated.point,
      lo: interpolated.lo,
      hi: interpolated.hi,
      cable: cable
    });
  }

  function formatDb(n) {
    if (!isFinite(n)) return "—";
    var abs = Math.abs(n);
    var digits = abs >= 10 ? 3 : abs >= 0.001 ? 4 : 6;
    return trimFixed(n, digits);
  }

  function cableSummary(result) {
    if (!result.ok) return result.message;
    var ratioDigits = result.remainRatio >= 0.0001 ? 4 : 6;
    var ratioText = result.remainRatio > 0 && result.remainRatio < 0.00005 ? "< 0.0001" : trimFixed(result.remainRatio, ratioDigits);
    var pctText = result.remainPercent > 0 && result.remainPercent < 0.005 ? "< 0.01" : trimFixed(result.remainPercent, 2);
    var how = "公表されている式の値です。";
    if (result.mode === "table-point") {
      how = result.point.mhz + " MHz は掲載点です。標準減衰量 " + result.point.dbPerKm + " dB/km を使いました。";
    } else if (result.mode === "table-interp") {
      how = result.lo.mhz + " MHz（" + result.lo.dbPerKm + " dB/km）と " + result.hi.mhz + " MHz（" + result.hi.dbPerKm + " dB/km）のあいだを、周波数の常用対数で直線補間しました。掲載点そのものではありません。";
    } else if (result.mode === "custom") {
      how = "手入力した係数の式の値です。";
    }
    return "減衰は " + formatDb(result.totalDb) + " dB です。単位長さでは " + formatDb(result.dbPerM) + " dB/m（" + formatDb(result.dbPerM * 100) + " dB/100 m）です。残る電力の比は " + ratioText + "、百分率は " + pctText + "% です。" + how;
  }

  function mount(doc) {
    if (!doc || !doc.getElementById) return;
    mountReflection(doc);
    mountCable(doc);
  }

  function mountReflection(doc) {
    var rootEl = doc.getElementById("reflect-calc");
    if (!rootEl) return;
    var ids = ["vswr", "rl", "gamma", "mismatch", "reflected"];
    var inputs = {};
    var i;
    for (i = 0; i < ids.length; i++) inputs[ids[i]] = doc.getElementById(ids[i]);
    var errorEl = doc.getElementById("reflect-error");
    var summaryEl = doc.getElementById("reflect-summary");
    var lock = false;

    function clearOthers(sourceId) {
      for (i = 0; i < ids.length; i++) {
        if (ids[i] !== sourceId) inputs[ids[i]].value = "";
        inputs[ids[i]].setAttribute("aria-invalid", "false");
      }
    }

    function showError(sourceId, message) {
      clearOthers(sourceId);
      inputs[sourceId].setAttribute("aria-invalid", "true");
      errorEl.hidden = false;
      errorEl.textContent = message;
      summaryEl.textContent = "";
    }

    function showResult(sourceId, metrics) {
      var formatted = formatReflection(metrics);
      var map = {
        vswr: formatted.vswr,
        rl: formatted.rl,
        gamma: formatted.gamma,
        mismatch: formatted.mismatch,
        reflected: formatted.reflected
      };
      for (i = 0; i < ids.length; i++) {
        inputs[ids[i]].setAttribute("aria-invalid", "false");
        if (ids[i] !== sourceId) inputs[ids[i]].value = map[ids[i]];
      }
      errorEl.hidden = true;
      errorEl.textContent = "";
      summaryEl.textContent = reflectionSummary(metrics);
    }

    function onInput(event) {
      if (lock) return;
      var id = event.target.id;
      var parsed = normalizeNumber(event.target.value);
      lock = true;
      if (parsed.empty || parsed.incomplete) {
        clearOthers(id);
        errorEl.hidden = true;
        errorEl.textContent = "";
        summaryEl.textContent = "";
        lock = false;
        return;
      }
      if (parsed.invalid) {
        showError(id, "数値として読めません。");
        lock = false;
        return;
      }
      var metrics;
      if (id === "vswr") metrics = fromVswr(parsed.value);
      else if (id === "rl") metrics = fromReturnLoss(parsed.value);
      else if (id === "gamma") metrics = metricsFromGamma(parsed.value);
      else if (id === "mismatch") metrics = fromMismatch(parsed.value);
      else metrics = fromReflected(parsed.value);
      if (!metrics.ok) showError(id, metrics.message);
      else showResult(id, metrics);
      lock = false;
    }

    for (i = 0; i < ids.length; i++) {
      inputs[ids[i]].addEventListener("input", onInput);
    }

    var example = doc.getElementById("reflect-example");
    if (example) {
      example.addEventListener("click", function () {
        inputs.vswr.value = "1.5";
        inputs.vswr.dispatchEvent(new Event("input", { bubbles: true }));
      });
    }
  }

  function mountCable(doc) {
    var rootEl = doc.getElementById("cable-calc");
    if (!rootEl) return;
    var select = doc.getElementById("cable-id");
    var customBox = doc.getElementById("cable-custom");
    var freq = doc.getElementById("cable-freq");
    var freqUnit = doc.getElementById("cable-freq-unit");
    var length = doc.getElementById("cable-length");
    var lengthUnit = doc.getElementById("cable-length-unit");
    var coeffA = doc.getElementById("cable-a");
    var coeffB = doc.getElementById("cable-b");
    var formulaF = doc.getElementById("cable-formula-f");
    var formulaAtt = doc.getElementById("cable-formula-att");
    var formulaMax = doc.getElementById("cable-formula-max");
    var errorEl = doc.getElementById("cable-error");
    var summaryEl = doc.getElementById("cable-summary");

    function readPositive(el) {
      return normalizeNumber(el.value);
    }

    function updateCustomVisibility() {
      var custom = select.value === "custom";
      customBox.hidden = !custom;
    }

    function fail(message) {
      errorEl.hidden = false;
      errorEl.textContent = message;
      summaryEl.textContent = "";
    }

    function calculate() {
      updateCustomVisibility();
      var freqParsed = readPositive(freq);
      var lenParsed = readPositive(length);
      if (freqParsed.empty || freqParsed.incomplete || lenParsed.empty || lenParsed.incomplete) {
        errorEl.hidden = true;
        errorEl.textContent = "";
        summaryEl.textContent = "";
        return;
      }
      if (freqParsed.invalid || lenParsed.invalid) {
        fail("数値として読めません。");
        return;
      }
      var freqMHz = freqUnit.value === "GHz" ? freqParsed.value * 1000 : freqParsed.value;
      var lengthM = lengthUnit.value === "ft" ? lenParsed.value * FT_IN_M : lenParsed.value;
      var input = { freqMHz: freqMHz, lengthM: lengthM };
      if (select.value === "custom") {
        var aParsed = readPositive(coeffA);
        var bParsed = readPositive(coeffB);
        if (aParsed.empty || aParsed.incomplete || bParsed.empty || bParsed.incomplete) {
          errorEl.hidden = true;
          errorEl.textContent = "";
          summaryEl.textContent = "";
          return;
        }
        if (aParsed.invalid || bParsed.invalid) {
          fail("数値として読めません。");
          return;
        }
        input.kind = "custom";
        input.a = aParsed.value;
        input.b = bParsed.value;
        input.fUnit = formulaF.value;
        input.attUnit = formulaAtt.value;
        var maxParsed = readPositive(formulaMax);
        if (maxParsed.invalid) {
          fail("上限の周波数が数値として読めません。");
          return;
        }
        if (!maxParsed.empty && !maxParsed.incomplete) {
          input.fMaxMHz = formulaF.value === "GHz" ? maxParsed.value * 1000 : maxParsed.value;
        }
      } else {
        input.cableId = select.value;
      }
      var result = cableLoss(input);
      if (!result.ok) {
        fail(result.message);
        return;
      }
      errorEl.hidden = true;
      errorEl.textContent = "";
      summaryEl.textContent = cableSummary(result);
    }

    var controls = [select, freq, freqUnit, length, lengthUnit, coeffA, coeffB, formulaF, formulaAtt, formulaMax];
    var i;
    for (i = 0; i < controls.length; i++) {
      if (controls[i]) controls[i].addEventListener("input", calculate);
      if (controls[i]) controls[i].addEventListener("change", calculate);
    }

    var example = doc.getElementById("cable-example");
    if (example) {
      example.addEventListener("click", function () {
        select.value = "lmr400";
        freq.value = "900";
        freqUnit.value = "MHz";
        length.value = "10";
        lengthUnit.value = "m";
        calculate();
      });
    }
    updateCustomVisibility();
  }

  return {
    CABLES: CABLES,
    FT_IN_M: FT_IN_M,
    metricsFromGamma: metricsFromGamma,
    fromVswr: fromVswr,
    fromReturnLoss: fromReturnLoss,
    fromMismatch: fromMismatch,
    fromReflected: fromReflected,
    formatReflection: formatReflection,
    reflectionSummary: reflectionSummary,
    cableLoss: cableLoss,
    cableSummary: cableSummary,
    normalizeNumber: normalizeNumber,
    mount: mount
  };
});
