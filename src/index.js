import { ROUTES } from "./routes.js";

const $main = document.querySelector("#root");
const addHashListener = () => window.addEventListener("hashchange", renderPage);
const getTargetRoute = (hash) => (hash === "" ? "home" : hash.replace("#", ""));

const renderPage = async () => {
  const hashedRoute = window.location.hash;
  const targetRoute = getTargetRoute(hashedRoute);
  const [fragment, param] = targetRoute.split("/");

  const renderPageFn = ROUTES[fragment];
  const hasParam = !!param;
  $main.innerHTML = "";
  const html = hasParam ? await renderPageFn(param) : await renderPageFn();
  $main.appendChild(html);
};

window.addEventListener("load", async () => {
  await renderPage();
  addHashListener();
});
