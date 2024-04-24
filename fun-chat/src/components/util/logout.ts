import { incrementIdgen, webSocket } from "../../api";
import AuthorizationForm from "../view/AuthorizationForm/AuthorizationForm";

const logout = () => {
  const isLoginedOnSystem = localStorage.getItem("isLogined");

  const logoutMessage = {
    id: `${incrementIdgen()}`,
    type: "USER_LOGOUT",
    payload: {
      user: {
        login: localStorage.getItem("login") || "",
        password: localStorage.getItem("password"),
      },
    },
  };

  webSocket.send(JSON.stringify(logoutMessage));

  localStorage.setItem("isLogined", "false");
  document.body.innerHTML = "";

  const authorizationForm = AuthorizationForm() as HTMLFormElement;
  if (isLoginedOnSystem === "true") {
    authorizationForm.style.display = "flex";
  }
  document.body.appendChild(AuthorizationForm());
};

export default logout;
