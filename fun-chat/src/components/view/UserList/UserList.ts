import "./UserList.css";
import { webSocket, incrementIdgen } from "../../../api";

const UserList = () => {
  console.log("получаем список пользователей");
  const userWrapper = document.createElement("div");
  userWrapper.classList.add("user-wrapper");

  const userList = document.createElement("ul");
  userList.classList.add("user-list");

  const requestMessageUserList = {
    id: `${incrementIdgen()}`,
    type: "USER_ACTIVE",
    payload: null,
  };

  webSocket.onopen = () => {
    webSocket.send(JSON.stringify(requestMessageUserList));
  };

  webSocket.onmessage = (event) => {
    const response = JSON.parse(event.data);
    console.log(response.payload.users);
  };

  userWrapper.append(userList);
  document.body.appendChild(userWrapper);
};

export default UserList;
