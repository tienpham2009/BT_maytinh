function Addition() {
    let left = +document.getElementById("left").value;
    let right = +document.getElementById("right").value;
Result = left + right;
document.getElementById("Result").innerHTML = "Result is :" +Result;
}
function Subtration() {
    let left = +document.getElementById("left").value;
    let right = +document.getElementById("right").value;
    Result = left - right;
    document.getElementById("Result").innerHTML = "Result is :" +Result;
}
function Multiplication() {
    let left = +document.getElementById("left").value;
    let right = +document.getElementById("right").value;
    Result = left * right;
    document.getElementById("Result").innerHTML = "Result is :" +Result;
}
function Division() {
    let left = +document.getElementById("left").value;
    let right = +document.getElementById("right").value;
    Result = left / right;
    document.getElementById("Result").innerHTML = "Result is :" +Result;
}
