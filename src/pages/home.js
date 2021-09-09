export async function Home() {
  const $div = document.createElement("div");
  $div.classList.add("container");

  $div.innerHTML = `
      <section>                  
        <h1>Seja bem vindo ao Vanilla JS SPA</h1>
        <p>
          Projeto de demonstração de um SPA feito com o Vanilla JS.
          Utilizando parcel para compilar o código.

          <br/><br/>
          Consumindo a api Animechan para obter os dados dos animes.
          
          <br/><br/> E listar as citações de cada personagem.
        <p>                            
      </section>        
    `;

  const $style = createStyles();
  $div.appendChild($style);

  return $div;
}

function createStyles() {
  const $style = document.createElement("style");
  $style.innerHTML = `
    h1 {
      padding: 20px;
      color: var(--color-primary);
      max-width: 420px;
      font-size: 46px;
    }

    p {
      display: flex;
      column-gap: 10px;
      align-items: center;
      max-width: 558px;
      padding: 20px;
      font-size: 20px;
      color: var(--color-text-on-surface);
      line-height: 33px;
      letter-spacing: 3px;
      background-color: var(--color-surface);
      border-radius: 10px;      
    }
  `;

  return $style;
}
