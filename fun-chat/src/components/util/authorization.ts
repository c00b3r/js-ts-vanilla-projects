import { webSocket, incrementIdgen } from "../../api";
import { WebSocketMessage, WebSocketMessageOutcoming } from "../../interface";
import ChatPage from "../view/Chat/ChatPage";

const authorization = () => {
  const buttonLogin = document.querySelector(
    ".button-login",
  ) as HTMLButtonElement;
  const inputLogin = document.querySelector(".input-login") as HTMLInputElement;
  const inputPassword = document.querySelector(
    ".input-password",
  ) as HTMLInputElement;
  const form = document.querySelector(".form") as HTMLFormElement;

  const isLoginedOnSystem = localStorage.getItem("isLogined");
  if (isLoginedOnSystem === "true") {
    const login = localStorage.getItem("login");
    if (login) {
      form.style.display = "none";
      ChatPage(login);
    }
  }

  buttonLogin.addEventListener("click", (event) => {
    event.preventDefault();

    const message: WebSocketMessage = {
      id: `${incrementIdgen()}`,
      type: "USER_LOGIN",
      payload: {
        user: {
          login: inputLogin.value,
          password: inputPassword.value,
        },
      },
    };
    webSocket.send(JSON.stringify(message));
  });

  webSocket.onmessage = function getMessageFromServer(event) {
    const { type, payload } = JSON.parse(
      event.data,
    ) as WebSocketMessageOutcoming;
    if (type === "USER_LOGIN") {
      const { login } = payload.user;
      const isLogined = payload.user.isLogined || false;
      if (isLogined) {
        localStorage.setItem("isLogined", "true");
        localStorage.setItem("login", login);
        form.style.display = "none";
        ChatPage(login);
      }
    } else if (type === "ERROR") {
      const errorMessage: string | undefined = payload.error;
      if (errorMessage) {
        const errorElement = document.createElement("div");
        errorElement.textContent = errorMessage;
        errorElement.classList.add("error-message");
        form.appendChild(errorElement);
      }
    }
  };
};

authorization();

export default authorization;
