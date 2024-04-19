// TODO:
// LOGIN: 1. Length should be more than 4 characters
// PASSWORD: 1. Length should be more than 4 characters & 2. Use uppercase and lowercase letters

const inputLogin = document.querySelector(".input-login") as HTMLInputElement;
const inputPassword = document.querySelector(
  ".input-password",
) as HTMLInputElement;
const passwordError = document.getElementById("password-error") as HTMLElement;
const loginError = document.getElementById("login-error") as HTMLElement;

function validateLogin(login: string): boolean {
  const minLength = 4;
  if (login.length <= minLength) {
    loginError.textContent = `Длина должна быть более ${minLength} символов.`;
    // console.error(`Login should be longer than ${minLength} characters.`);
  } else {
    loginError.textContent = "";
  }
  return true;
}

function validatePassword(password: string): boolean {
  const minLength = 4;
  if (password.length <= minLength) {
    passwordError.textContent = `Длина должна быть более ${minLength} символов.`;
    return false;
  }
  if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
    passwordError.textContent = "Используйте прописные и заглавные буквы";
    return false;
  }

  passwordError.textContent = "";
  return true;
}

inputLogin.addEventListener("input", () => {
  validateLogin(inputLogin.value);
});

inputPassword.addEventListener("input", () => {
  validatePassword(inputPassword.value);
});
