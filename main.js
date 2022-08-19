const heroImg = document.querySelector(".hero--img img");
const form = document.querySelector(".form");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".form small");

document.addEventListener("DOMContentLoaded", resizeImage);
window.addEventListener("resize", resizeImage);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});

function resizeImage() {
  if (window.innerWidth >= 850) {
    heroImg.src = "./images/hero-desktop.jpg";
  } else {
    heroImg.src = "./images/hero-mobile.jpg";
  }
}

function handleSubmit() {
  const emailValue = emailInput.value;
  if (emailValue === "") {
    form.classList.remove("sucess");
    form.classList.add("error");
    errorMessage.textContent = "Email cannot be blank";
  } else if (!isEmail(emailValue)) {
    form.classList.remove("sucess");
    errorMessage.textContent = "Please enter valid Email";
    form.classList.add("error");
  } else {
    form.classList.remove("error");
    form.classList.add("success");
    errorMessage.textContent = "Your email has been registered";
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
