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
  oposite = Math.abs(divisor)
  document.getElementById("results").innerHTML = `${add1}x<sup>4</sup> + ${add2}x<sup>3</sup> + ${add3}x<sup>2</sup> + ${add4}x + ${add5} + <span class="f"><div class="t">${remainder}</div><div class="b">x ${posneg} ${oposite}</div></span>` 
}
