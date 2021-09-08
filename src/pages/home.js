export async function Home() {
  const $div = document.createElement("div");
  $div.classList.add("container");

  $div.innerHTML = `
      <section>                  
        <h1>Seja bem vindo ao Vanilla JS SPA</h1>
        <p>
          Projeto de demonstração de um SPA feito com o Vanilla JS.
          Utilizando parcel para compilar o código.
        <p>            
        <p>by: Gleison Almeida</p>          
      </section>  
    `;

  return $div;
}
