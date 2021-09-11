import template from "./about.html";
import styles from "./about.css";

export async function About() {
  const $div = document.createElement("div");
  $div.classList.add("container", "about");
  $div.innerHTML = template.trim();
  return $div;
}
