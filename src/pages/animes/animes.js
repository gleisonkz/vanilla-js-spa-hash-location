import { getAnimes } from "../../api";
import styles from "./animes.css";

export async function Animes() {
  const $div = document.createElement("div");
  $div.classList.add("anime");

  const animes = await getAnimes();

  const $animes = animes.map((title, index) => {
    const id = ++index;
    const $item = document.createElement("p");
    $item.className = "anime-item";
    $item.innerHTML = `<span>${id}</span> - <span>${title}</span>`;
    $item.id = title;

    $item.addEventListener("click", () => navigateToPostDetail($item.id));

    return $item;
  });

  $animes.forEach(($post) => $div.appendChild($post));

  $div.appendChild = $animes;
  return $div;

  function navigateToPostDetail(id) {
    window.location.href = `/#anime-quotes/${id}`;
  }
}
