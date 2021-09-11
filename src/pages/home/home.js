import styles from "./home.css";
import template from "./home.html";

export async function Home() {
  const $div = document.createElement("div");
  $div.classList.add("container", "home");
  $div.innerHTML = template.trim();
  return $div;
}
