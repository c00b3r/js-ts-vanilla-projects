import "./AuthorizationForm.css";

const form = document.createElement("form");
const fieldset = document.createElement("fieldset");

const createInputUser = () => {
  const inputUserLoginHTML = `
  <div class="style-input">
  <label>Имя</label>
  <input class="input input-login" type="text" label="Имя" placeholder="Введите имя" required pattern=".{4,}" required>
  </div>
  <div id="login-error" style="color: red;"></div>
`;

  const inputUserPasswordHTML = `
  <div class="style-input">
  <label>Пароль</label>
  <input class="input input-password" placeholder="Введите пароль" type="password" required>
  </div>
  <div id="password-error" style="color: red;"></div>
 `;

  fieldset.innerHTML = inputUserLoginHTML + inputUserPasswordHTML;

  return fieldset;
};

const createFormBody = () => {
  form.classList.add("form");
  fieldset.classList.add("input-wrapper");

  form.appendChild(createInputUser());

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
