import { Route } from "../../interface";
import AuthorizationForm from "../view/AuthorizationForm/AuthorizationForm";

const routes: Route = {
  "/login": AuthorizationForm,
  "/chat": () => {},
};

const renderPage = (page: () => void) => {
  page();
};

const router = () => {
  const path: string = window.location.pathname;
  const route: () => void = routes[path] || "Page not found";

  renderPage(route);
};

const navigateTo = (path: string) => {
  // eslint-disable-next-line no-restricted-globals
  history.pushState({}, path, window.location.origin + path);
  router();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector(".login-button");

  if (loginButton) {
    loginButton.addEventListener("click", () => {
      navigateTo("/chat");
    });
  }

  router();
});

export default router;
