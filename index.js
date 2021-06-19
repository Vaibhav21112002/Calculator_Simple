const one = document.getElementById("num1");
const two = document.getElementById("num2");

function clee() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}

const summ = () => {
  document.getElementById("result").innerHTML =
    parseInt(one.value) + parseInt(two.value);
  clee();
};
const subs = () => {
  document.getElementById("result").innerHTML = one.value - two.value;
  clee();
};
const prod = () => {
  document.getElementById("result").innerHTML = one.value * two.value;
  clee();
};
const divi = () => {
  document.getElementById("result").innerHTML = one.value / two.value;
  clee();
};

function resete() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerHTML = "";
}

document.getElementById("add").addEventListener("click", summ);
document.getElementById("sub").addEventListener("click", subs);
document.getElementById("product").addEventListener("click", prod);
document.getElementById("divide").addEventListener("click", divi);
