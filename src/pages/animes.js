export async function Animes() {
  const $div = document.createElement("div");
  $div.classList.add("container");

  const API_URL = "https://animechan.vercel.app/api/available/anime";

  const response = await fetch(API_URL);
  const animes = await response.json();

  const $animes = animes.map((title, index) => {
    const id = ++index;
    const $h1 = document.createElement("h1");
    $h1.className = "post-title";
    $h1.innerText = `${id} - ${title}`;
    $h1.id = title;

    $h1.addEventListener("click", () => navigateToPostDetail($h1.id));

    return $h1;
  });

  $animes.forEach(($post) => $div.appendChild($post));

  $div.appendChild = $animes;
  return $div;

  function navigateToPostDetail(id) {
    window.location.href = `/#anime-quotes/${id}`;
  }
}
