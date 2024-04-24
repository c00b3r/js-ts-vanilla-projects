const validationForm = (
  userLogin: HTMLInputElement,
  userPassword: HTMLInputElement,
) => {
  const passwordError = document.getElementById(
    "password-error",
  ) as HTMLElement;
  const loginError = document.getElementById("login-error") as HTMLElement;
  const buttonLogin = document.querySelector(
    "#login-button",
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
    const containsUppercaseLatin = /[A-Z]/.test(password);
    const containsLowercaseLatin = /[a-z]/.test(password);
    const containsUppercaseCyrillic = /[А-ЯЁ]/.test(password);
    const containsLowercaseCyrillic = /[а-яё]/.test(password);
    if (
      !(containsUppercaseLatin && containsLowercaseLatin) &&
      !(containsUppercaseCyrillic && containsLowercaseCyrillic)
    ) {
      passwordError.textContent =
        "Используйте и прописные, и заглавные буквы латиницы или кириллицы";
      return false;
    }

    passwordError.textContent = "";
    return true;
  }

  function updateButtonState() {
    const isLoginValid: boolean = validateLogin(userLogin.value);
    const isPasswordValid: boolean = validatePassword(userPassword.value);

    buttonLogin.disabled = !(isLoginValid && isPasswordValid);
  }

  userLogin.addEventListener("input", updateButtonState);
  userPassword.addEventListener("input", updateButtonState);
};

export default validationForm;
