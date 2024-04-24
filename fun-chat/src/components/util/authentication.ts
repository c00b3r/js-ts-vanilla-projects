import { webSocket, incrementIdgen } from "../../api";

const authentication = (userLogin: string, isLoginedUser: boolean) => {
  const message = {
    id: `${incrementIdgen()}`,
    type: "USER_EXTERNAL_LOGIN",
    payload: {
      user: {
        login: userLogin,
        isLogined: isLoginedUser,
      },
    },
  };

  webSocket.send(JSON.stringify(message));
};

export default authentication;
