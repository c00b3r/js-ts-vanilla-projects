import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ChatPage.css";
import logout from "../../util/logout";

const ChatPage = (userName: string) => {
  document.body.innerHTML = "";
  const mainPage = document.createElement("main");
  mainPage.classList.add("main-page");

  mainPage.append(Header(userName));
  mainPage.append(Footer());

  document.body.append(mainPage);

  const buttonExit = document.querySelector(
    ".button-exit",
  ) as HTMLButtonElement;

  buttonExit.addEventListener("click", logout);
};

export default ChatPage;
