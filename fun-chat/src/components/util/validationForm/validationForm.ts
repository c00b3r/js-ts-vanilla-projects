// TODO:
// LOGIN: 1. Length should be more than 4 characters
// PASSWORD: 1. Length should be more than 4 characters & 2. Use uppercase and lowercase letters

const inputLogin = document.querySelector(".input-login") as HTMLInputElement;
const inputPassword = document.querySelector(
  ".input-password",
) as HTMLInputElement;
const passwordError = document.getElementById("password-error") as HTMLElement;
const loginError = document.getElementById("login-error") as HTMLElement;
const buttonLogin = document.querySelector(
  ".button-login",
) as HTMLButtonElement;

function validateLogin(login: string): boolean {
  const minLength = 4;
  if (login.length <= minLength) {
    loginError.textContent = `Длина должна быть более ${minLength} символов.`;
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

function updateButtonState() {
  const isLoginValid = validateLogin(inputLogin.value);
  const isPasswordValid = validatePassword(inputPassword.value);

  buttonLogin.disabled = !(isLoginValid && isPasswordValid);
}

inputLogin.addEventListener("input", updateButtonState);
inputPassword.addEventListener("input", updateButtonState);
