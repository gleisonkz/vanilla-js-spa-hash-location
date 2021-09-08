export async function Home() {
  const $div = document.createElement("div");
  $div.classList.add("container");

  $div.innerHTML = `
      <section class="page-section">                  
        <h2>Vanilla JS SPA feito com parcel</h2>
        <p>
          Projeto de demonstração de um SPA feito com o Vanilla JS.
          Utilizando parcel para compilar o código.
        <p>            
        <p>by: Gleison Almeida</p>          
      </section>  
    `;

  return $div;
}
