import { getAnimes } from "../../api";
import styles from "./animes.css";
import template from "./animes.html";
import { htmlToElement } from "../../utils";

export async function Animes() {
  const $div = document.createElement("div");
  $div.classList.add("anime");

  const animes = await getAnimes();

  animes.forEach((title, index) => {
    const animeTemplate = template
      .replace("{{ id }}", ++index)
      .replace("{{ title }}", title);

    const $anime = htmlToElement(animeTemplate);
    $anime.addEventListener("click", () => navigateToPostDetail(title));

    $div.appendChild($anime);
  });

  return $div;

  function navigateToPostDetail(id) {
    window.location.href = `/#anime-quotes/${id}`;
  }
}
