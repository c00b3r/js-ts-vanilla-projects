import "./AuthorizationForm.css";

const createInputUser = (fieldset: HTMLFieldSetElement) => {
  const inputUserLoginDiv = document.createElement("div");
  inputUserLoginDiv.classList.add("style-input");
  inputUserLoginDiv.innerHTML = `
    <label>Имя</label>
    <input class="input input-login" type="text" label="Имя" placeholder="Введите имя" required pattern=".{4,}" required>
  `;
  fieldset.appendChild(inputUserLoginDiv);

  const loginErrorDiv = document.createElement("div");
  loginErrorDiv.id = "login-error";
  loginErrorDiv.style.color = "red";
  fieldset.appendChild(loginErrorDiv);

  const inputUserPasswordDiv = document.createElement("div");
  inputUserPasswordDiv.classList.add("style-input");
  inputUserPasswordDiv.innerHTML = `
    <label>Пароль</label>
    <input class="input input-password" placeholder="Введите пароль" type="password" required>
  `;
  fieldset.appendChild(inputUserPasswordDiv);

  const passwordErrorDiv = document.createElement("div");
  passwordErrorDiv.id = "password-error";
  passwordErrorDiv.style.color = "red";
  fieldset.appendChild(passwordErrorDiv);

  return fieldset;
};

const createFormBody = () => {
  const form = document.createElement("form");
  const fieldset = document.createElement("fieldset");

  form.classList.add("form");
  fieldset.classList.add("input-wrapper");

  form.appendChild(createInputUser(fieldset));

  const legend = document.createElement("legend");
  legend.textContent = "Авторизация";
  fieldset.appendChild(legend);

  form.append(fieldset);

  if (!document.getElementById("login-button")) {
    const buttonAuthorization = document.createElement("button");
    buttonAuthorization.classList.add("button-login");
    buttonAuthorization.setAttribute("disabled", "true");
    buttonAuthorization.textContent = "Войти";
    buttonAuthorization.setAttribute("id", "login-button");
    form.append(buttonAuthorization);
  } else {
    const buttonAuthorization = document.getElementById(
      "login-button",
    ) as HTMLButtonElement;
    buttonAuthorization.disabled = false;
  }

  return form;
};

const removeExistingForm = () => {
  const existingForm = document.querySelector(".form");
  if (existingForm) {
    existingForm.remove();
  }
};

const AuthorizationForm = () => {
  removeExistingForm();
  return createFormBody();
};

document.body.append(AuthorizationForm());

export default AuthorizationForm;
