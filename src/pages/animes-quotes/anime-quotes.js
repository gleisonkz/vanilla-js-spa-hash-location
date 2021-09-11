import { getAnimeQuotes } from "../../api";
import styles from "./anime-quotes.css";
import template from "./anime-quotes.html";
import { htmlToElement } from "../../utils";

export async function AnimeQuotes(animeName) {
  const $div = document.createElement("div");
  $div.classList.add("anime-quotes");

  const quotes = await getAnimeQuotes(animeName);

  const $quotes = quotes.forEach(({ character, quote }) => {
    const quoteTemplate = template
      .replace("{{ character }}", character)
      .replace("{{ quote }}", quote);

    const $quote = htmlToElement(quoteTemplate);
    $div.appendChild($quote);
  });

  return $div;
}
