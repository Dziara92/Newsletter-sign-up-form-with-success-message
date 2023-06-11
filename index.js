const input = document.querySelector("input");
const btn = document.querySelector("button");
const form = document.querySelector("form");
const boxSuccess = document.querySelector(".success");
const btnDissmiss = document.querySelector(".btn_dissmiss");
const img = document.querySelector(".container__img img");
const bgcMsgDesktop = document.querySelector(".bgc");

function handleSubmit(e) {
  e.preventDefault();
  let email = input.value;
  if (!email || !email.includes("@")) {
    form.classList.add("error");
  }
  if (email.includes("@")) {
    showSuccessMessage(email);
    input.value = "";
  }
}

function showSuccessMessage(email) {
  boxSuccess.classList.add("active");
  const spanEmail = document.querySelector("p span");
  spanEmail.textContent = `${email}.`;
  bgcMsgDesktop.style.opacity = "1";
}

form.addEventListener("submit", handleSubmit);

function handleInput() {
  if (form.classList.contains("error")) {
    form.classList.remove("error");
  }
}

input.addEventListener("focus", handleInput);

function dissmissMsg() {
  boxSuccess.classList.remove("active");
  bgcMsgDesktop.style.opacity = "0";
}

btnDissmiss.addEventListener("click", dissmissMsg);

function changeImg() {
  if (window.innerWidth >= 754) {
    img.src = "assets/images/illustration-sign-up-desktop.svg";
  } else {
    img.src = "assets/images/illustration-sign-up-mobile.svg";
  }
}

window.addEventListener("resize", changeImg);

document.addEventListener("DOMContentLoaded", changeImg);
