import { webSocket, incrementIdgen } from "../../api";
import { WebSocketMessage } from "../../interface";
import ChatPage from "../view/Chat/ChatPage";

let isAuthorized: boolean = false;
const authorization = () => {
  if (isAuthorized) return;

  const buttonLogin = document.querySelector(
    ".button-login",
  ) as HTMLButtonElement;
  const inputLogin = document.querySelector(".input-login") as HTMLInputElement;
  const inputPassword = document.querySelector(
    ".input-password",
  ) as HTMLInputElement;

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
    const { type, payload } = JSON.parse(event.data);
    if (type === "USER_LOGIN") {
      const { login } = payload.user;
      if (login) {
        isAuthorized = true;
        const authorizationForm = document.querySelector(
          ".form",
        ) as HTMLFormElement;
        authorizationForm.style.display = "none";
        ChatPage(login);
      }
    }
  };
};

authorization();

export default authorization;
