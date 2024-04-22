import "./Header.css";

const Header = (userName: string) => {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const headerProfileInfo = document.createElement("h3");
  headerProfileInfo.classList.add("text-profile");
  headerProfileInfo.textContent = `Пользователь ${userName}`;
  headerDiv.append(headerProfileInfo);

  const buttonExit = document.createElement("button");
  buttonExit.classList.add("button-exit");
  buttonExit.textContent = "Выйти";
  headerDiv.append(buttonExit);

  return headerDiv;
};

export default Header;
