export async function AnimeQuotes(animeName) {
  const $div = document.createElement("div");
  $div.classList.add("container");
  const API_URL = `https://animechan.vercel.app/api/quotes/anime?title=${animeName}`;
  const response = await fetch(API_URL);
  const quotes = await response.json();

  console.log(quotes);

  const $quotes = quotes.map(({ character, quote }) => {
    const $div = document.createElement("div");

    $div.innerHTML = `
      <h1>${character}</h1>
      <p>${quote}</p>
    `;

    return $div;
  });

  $quotes.forEach(($post) => $div.appendChild($post));
  return $div;
}
