import { webSocket, incrementIdgen } from "../../api";
import { WebSocketMessage } from "../../interface";

const authorization = () => {
  const buttonLogin = document.querySelector(
    ".button-login",
  ) as HTMLButtonElement;
  const inputLogin = document.querySelector(".input-login") as HTMLInputElement;
  const inputPassword = document.querySelector(
    ".input-password",
  ) as HTMLInputElement;

  buttonLogin.addEventListener("click", () => {
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
};

authorization();

export default authorization;
