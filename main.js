let power5 = 0;
let power4 = 0;
let power3 = 0;
let power2 = 0;
let power1 = 0;
let power0 = 0;

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
    }

    console.log(power5, power4, power3, power2, power1, power0)
}

