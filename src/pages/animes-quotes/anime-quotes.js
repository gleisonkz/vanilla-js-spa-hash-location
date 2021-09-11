import { getAnimeQuotes } from "../../api";
import styles from "./anime-quotes.css";
import template from "./anime-quotes.html";

export async function AnimeQuotes(animeName) {
  const $div = document.createElement("div");
  $div.classList.add("anime-quotes");

  const quotes = await getAnimeQuotes(animeName);

  const $quotes = quotes.forEach(({ character, quote }) => {
    const quoteTemplate = template
      .replace("{{ character }}", character)
      .replace("{{ quote }}", quote);

    $div.appendChild(htmlToElement(quoteTemplate));
  });

  return $div;
}

function htmlToElement(html) {
  const template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}
