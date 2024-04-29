import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ChatPage.css";
import logout from "../../util/logout";
import UserList from "../UserList/UserList";

const ChatPage = (userName: string) => {
  const appContainer = document.createElement("div");
  appContainer.id = "app-container";
  document.body.appendChild(appContainer);

  const mainPage = document.createElement("main");
  mainPage.classList.add("main-page");

  mainPage.append(Header(userName));
  mainPage.append(UserList());
  mainPage.append(Footer());

  appContainer.appendChild(mainPage);

  const buttonExit = document.querySelector(
    ".button-exit",
  ) as HTMLButtonElement;

  buttonExit.addEventListener("click", logout);
};

export default ChatPage;
