let power5 = 0;
let power4 = 0;
let power3 = 0;
let power2 = 0;
let power1 = 0;
let power0 = 0;
let divisor = 0;

function changeValue(val) {
    if (val == 5) {
        power5 = document.getElementById("5power").value
    } else if (val == 4) {
        power4 = document.getElementById("4power").value
    } else if (val == 3) {
        power3 = document.getElementById("3power").value
    } else if (val == 2) {
        power2 = document.getElementById("2power").value
    } else if (val == 1) {
        power1 = document.getElementById("1power").value
    } else if (val == 0) {
        power0 = document.getElementById("0power").value
    } else if (val == -1) {
        divisor = document.getElementById("divisor").value }

    console.log(power5, power4, power3, power2, power1, power0)
}

function calculate(•{
add1 = power5 * divisor;
left1 = power4 + add1;
add2 = Number(left1 * divisor);
left2 = Number (power3 + add2);
add3 = left2 * divisor;
left3 = Number (power2 + add3);
add4 = left3 * divisor;
left4 = power1 + add4;
add5 = left4 * divisor;
remainder = power0 + add5;
document.getElementById("results"). innerHTML = ${left1} ${left2} ${left3} ${left4} $
{remainder} ${divisor} + typeof left3 }
