import { getAnimes } from "../api";

export async function Animes() {
  const $div = document.createElement("div");
  $div.classList.add("anime");

  const animes = await getAnimes();

  const $style = createStyles();
  $div.appendChild($style);

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

function createStyles() {
  const $style = document.createElement("style");
  $style.innerHTML = `
  .anime{
    display: grid;
    row-gap: 20px;
  }

  .anime-item{
    font-size: 25px;
    background-color: var(--color-surface);
    border-radius: 10px;
    color: var(--color-text-on-surface);
    padding: 10px;    
    cursor: pointer;
    transition: color 0.3s ease;
  }  

  .anime-item:hover {
    color: var(--color-primary);
  }

  .anime-item span:first-of-type {    
    font-size: 25px;
    display: inline-flex;
    justify-content: center;
    padding: 5px;
    width: 60px;
    border-radius: 9px;
    background-color: var(--color-primary);;
    color: var(--color-text-on-primary);; 
    transition: opacity 0.3s ease;
  } 

  .anime-item:hover span:first-of-type{  
    opacity: 0.9;
  }
  
  `;
  return $style;
}
