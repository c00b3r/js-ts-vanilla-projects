import "./AuthorizationForm.css";

const form = document.createElement("form");
const fieldset = document.createElement("fieldset");
fieldset.classList.add("input-wrapper");

const createFormBody = () => {
  form.classList.add("form");

  const legend = document.createElement("legend");
  legend.textContent = "Авторизация";
  fieldset.appendChild(legend);
  form.append(fieldset);

  const buttonAuthorization = document.createElement("button");
  buttonAuthorization.textContent = "Войти";
  buttonAuthorization.classList.add("button-authorization");
  const buttonInfo = document.createElement("button");
  buttonInfo.textContent = "Информация";
  buttonInfo.classList.add("button-info");
  form.appendChild(buttonAuthorization);
  form.appendChild(buttonInfo);

  document.body.append(form);
};

const createInputUser = () => {
  const inputUserLogin = `
  <div class="style-input">
  <label>Имя</label>
  <input class="input" type="text" label="Имя" placeholder="Введите имя">
  </div>
`;

  const inputUserPassword = `
  <div class="style-input">
  <label>Пароль</label>
  <input class="input" type="password" placeholder="Введите пароль">
  </div>
 `;
  fieldset.innerHTML = inputUserLogin + inputUserPassword;
};

const AuthorizationForm = () => {
  createFormBody();
  createInputUser();
};

AuthorizationForm();

export default AuthorizationForm;
