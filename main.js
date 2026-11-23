let power5 = 0;
let power4 = 0;
let power3 = 0;
let power2 = 0;
let power1 = 0;
let power0 = 0;
let divisor = 0;
let posneg = "+";

function changeValue(val) {
    if (val == 5) {
        power5 = Number(document.getElementById("5power").value)
    } else if (val == 4) {
        power4 = Number(document.getElementById("4power").value)
    } else if (val == 3) {
        power3 = Number(document.getElementById("3power").value)
    } else if (val == 2) {
        power2 = Number(document.getElementById("2power").value)
    } else if (val == 1) {
        power1 = Number(document.getElementById("1power").value)
    } else if (val == 0) {
        power0 = Number(document.getElementById("0power").value)
        document.getElementById("yint").innerHTML = "Y-Intercept = " + power0
    } else if (val == -1) {
      divisor = document.getElementById("divisor").value
      if (divisor < 0) {
        posneg = "-"
      } else {
        posneg = "+"
      }
      divisor = divisor * -1
      document.getElementById("x").innerHTML = "X = " + divisor
    }

    console.log(power5, power4, power3, power2, power1, power0)
    calculate()
}

function formatPoly(terms) {
  // terms: array of { value: number, label: string } from highest to lowest degree
  const nonZero = terms.filter(t => t.value !== 0);

  if (nonZero.length === 0) {
    return "0";
  }

  return nonZero
    .map((t, i) => {
      const abs = Math.abs(t.value);
      const sign = t.value < 0 ? "-" : "+";
      const term = `${abs}${t.label}`;
      // first term keeps its sign only if negative; no leading "+"
      return i === 0
        ? (t.value < 0 ? `-${term}` : term)
        : ` ${sign} ${term}`;
    })
    .join("");
}

function calculate() {
  add1 = power5 * divisor;
  left1 = power4 + add1;
  add2 = Number(left1 * divisor);
  left2 = Number(power3 + add2);
  add3 = left2 * divisor;
  left3 = Number(power2 + add3);
  add4 = left3 * divisor;
  left4 = power1 + add4;
  add5 = left4 * divisor;
  remainder = power0 + add5;
  oposite = Math.abs(divisor);

  let stepsHTML = `
    <table class="synthetic">
      <tr class="coeffs">
        <td class="divisor-box">${divisor}</td>
        <td>${power5}</td>
        <td>${power4}</td>
        <td>${power3}</td>
        <td>${power2}</td>
        <td>${power1}</td>
        <td>${power0}</td>
      </tr>
      <tr class="products">
        <td></td>
        <td></td>
        <td>${add1}</td>
        <td>${add2}</td>
        <td>${add3}</td>
        <td>${add4}</td>
        <td>${add5}</td>
      </tr>
      <tr class="sums">
        <td></td>
        <td><mark>${power5}</mark></td>
        <td><mark>${left1}</mark></td>
        <td><mark>${left2}</mark></td>
        <td><mark>${left3}</mark></td>
        <td><mark>${left4}</mark></td>
        <td class="remainder">${remainder}</td>
      </tr>
    </table>
    <ol class="explanation">
      <li>Bring down the leading coefficient: ${power5}</li>
      <li>Multiply ${power5} × ${divisor} = ${add1}, add to ${power4} → ${left1}</li>
      <li>Multiply ${left1} × ${divisor} = ${add2}, add to ${power3} → ${left2}</li>
      <li>Multiply ${left2} × ${divisor} = ${add3}, add to ${power2} → ${left3}</li>
      <li>Multiply ${left3} × ${divisor} = ${add4}, add to ${power1} → ${left4}</li>
      <li>Multiply ${left4} × ${divisor} = ${add5}, add to ${power0} → remainder ${remainder}</li>
    </ol>
  `;
  document.getElementById("steps").innerHTML = stepsHTML;

  const quotient = formatPoly([
    { value: power5, label: "x<sup>4</sup>" },
    { value: left1,  label: "x<sup>3</sup>" },
    { value: left2,  label: "x<sup>2</sup>" },
    { value: left3,  label: "x" },
    { value: left4,  label: "" }
  ]);

  if (remainder == 0) {
    document.getElementById("results").innerHTML = quotient;
  } else {
    document.getElementById("results").innerHTML =
      `${quotient} + <span class="f"><div class="frac-num">${remainder}</div><div class="frac-den">x ${posneg} ${oposite}</div></span>`;
  }
}