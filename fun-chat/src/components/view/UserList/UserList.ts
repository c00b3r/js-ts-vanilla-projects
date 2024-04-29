import "./UserList.css";
import { webSocket, incrementIdgen } from "../../../api";
import { user } from "../../../interface";

const UserList = () => {
  const userWrapper = document.createElement("div");
  userWrapper.classList.add("user-wrapper");

  const userList = document.createElement("ul");
  userList.classList.add("user-list");

  const requestMessageUserList = {
    id: `${incrementIdgen()}`,
    type: "USER_ACTIVE",
    payload: null,
  };

  if (webSocket.readyState === webSocket.OPEN) {
    webSocket.send(JSON.stringify(requestMessageUserList));
  } else {
    webSocket.onopen = () => {
      webSocket.send(JSON.stringify(requestMessageUserList));
    };
  }

  webSocket.onmessage = (event) => {
    const response = JSON.parse(event.data);
    const userArray: user[] = response.payload.users;
    userArray.forEach((elem) => {
      const userItem = document.createElement("li");
      userItem.textContent = elem.login;
      userList.append(userItem);
    });
    console.log(response.payload.users);
  };

  userWrapper.append(userList);
  return userWrapper;
};

export default UserList;
