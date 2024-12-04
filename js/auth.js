const signInLink = document.querySelector(".signIn-link");
const signUpLink = document.querySelector(".signUp-link");
const wrapper = document.querySelector(".wrapper");

signUpLink.onclick = () => {
  wrapper.classList.add("animate-signIn");
  wrapper.classList.remove("animate-signUp");
};
signInLink.onclick = () => {
  wrapper.classList.add("animate-signUp");
  wrapper.classList.remove("animate-signIn");
};
