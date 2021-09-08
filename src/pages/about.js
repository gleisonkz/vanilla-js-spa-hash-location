export async function About() {
  const $div = document.createElement("div");
  $div.classList.add("container");

  $div.innerHTML = `
      <address>
      <h3 align="center">Meus contatos:</h3>

      <p align="center">
      
      <a title="Instagram" href="https://www.instagram.com/gleison_gbass/">
          <img class="instagram" alt="Instagram Logo" >
      </a>
      
      <a title="Linkedin" href="https://www.linkedin.com/in/gleison-ribeiro-a65257119/">
          <img class="linkedin" alt="Linkedin Logo" width="40px" height="40px"  >
      </a>
      
      <a title="Youtube" href="https://www.youtube.com/channel/UCxZ1pK5ExBbS6VS0x5YMGfA?view_as=subscriber">
          <img class="youtube" alt="Youtube Logo">
      </a>
      
      <a title="Medium" href="https://gleisonsubzerokz.medium.com/">
          <img class="medium" alt="Medium Logo">
      </a>
      
      </p>
      </address>  
    `;
  return $div;
}
