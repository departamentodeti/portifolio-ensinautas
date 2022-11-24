now = new Date();
let GetYear = now.getFullYear();
let ShowYear =  "";
ShowYear.innerHTML = `<span>Copyright© ${GetYear} - Todos os direitos reservados</span>`;
//Instanciando um novo bjecto para pegara a Data atual

let header = document.getElementById("inicio");
let footer = document.getElementById("sobre");

header.innerHTML += `
<nav class=" navbar navbar-expand-lg  navbar-dark menu shadow-lg fixed-top text-start menu"  >
<a class="navbar-brand p-2 d-flex flex-column justify-content-end" href="index.html">
  <img class="logo-ensinautas mx-3" src="./img/logo-ensinautas.png" alt="logotipo-ensinautas">
  <span class="text mx-1">Ensinautas</span>
</a>

<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse text-white  justify-content-end p-1 text-center" id="navbarNav">
  <ul class="navbar-nav ">
    <li class="nav-item active">
      <a class="nav-link text-white" href="index.html">Início</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="index.html">Serviços</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="projects.html">Projectos</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="team.html">Equipa</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="about.html">Sobre</a>
    </li>
  </ul>

</div>
</nav>
`

footer.innerHTML += `

<div class=" d-flex flex-wrap container    col-md-8 justify-content-between">
    <div class="col-md-4 p-1">      
      <h4 class="text-bold">Contatos</h4>
      <a href="tel:+244921767552" class="text-light link">Tel: +244 921-767-552</a><br>
      <a href="tel:+244956884314" class="text-light link">Tel: +244 956-884-314</a><br>
      <a href="mailto:geral@ensinautas.ao" class="text-light link">Email: geral@ensinautas.ao</a>
    </div>
      
    <div class="col-md-4 p-1  d-flex flex-column flex-wrap align-items-center">
          <h4 class="text-bold">Redes sociais</h4>
          <div class="d-flex flex-wrap ">
            <a href=""><i class="fab fa-facebook text-light p-1 fs-4"></i></a>
            <a href=""><i class="fab fa-instagram text-light p-1 fs-4"></i></a>
            <a href=""><i class="fab fa-whatsapp text-light p-1 fs-4"></i></a>
          </div>
    </div>

       
</div>

<div class="text-center mt-4 p-2">
        <span id="year">${ShowYear}</span>
      </div>


`
