export async function About() {
  const $div = document.createElement("div");
  $div.classList.add("container");

  $div.innerHTML = `
      <address>
        <h1>Sobre</h1>
        <p>Contact us by phone (11 2345-6789),
        e-mail (vanillajs@javascript.com) 
        </p>
      </address>  
    `;
  return $div;
}
