const signInContainer = document.querySelector(".sign-in-preview");
const form = document.querySelector(".form-container");
const successMsg = document.querySelector(".success-msg");

const submitBtn = document.querySelector(".cta-button");
const dismissBtn = document.querySelector(".dismiss-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

submitBtn.addEventListener("click", () => {
  signInContainer.classList.add("display-none");
  successMsg.classList.remove("success-msg-display");
});

dismissBtn.addEventListener("click", () => {
  signInContainer.classList.remove("display-none");
  successMsg.classList.add("success-msg-display");
});
