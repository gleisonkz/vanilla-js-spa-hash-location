import { getAnimeQuotes } from "../api";

export async function AnimeQuotes(animeName) {
  const $div = document.createElement("div");
  $div.classList.add("anime-quotes");

  const quotes = await getAnimeQuotes(animeName);

  const $style = createStyles();
  $div.appendChild($style);

  const $quotes = quotes.map(({ character, quote }) => {
    const $div = document.createElement("div");
    $div.classList.add("quote");

    $div.innerHTML = `     
      <blockquote>“${quote}”</blockquote>
      <div class="character">
        <strong><span>${character}</span></strong>
      </div>    
    `;

    return $div;
  });

  $quotes.forEach(($post) => $div.appendChild($post));

  return $div;
}

function createStyles() {
  const $style = document.createElement("style");
  $style.innerHTML = `
  .anime-quotes{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .quote {
    background-color: var(--color-surface);
    border-radius: 10px;
    max-width: 300px;
    position: relative;
    padding: 10px;
    padding-top: 20px;
    color: var(--color-text-on-surface);
    margin-bottom: 20px;
  }

  .quote::before {
    display: flex;
    justify-content: center;
    content: "“";
    width: 30px;
    height: 30px;
    font-size: 40px;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: var(--color-text-on-primary);
    position: absolute;
    top: -18px;
    left: 22px;
  }
  
  .character{
    margin-top: 10px;
  }
  
  `;
  return $style;
}
