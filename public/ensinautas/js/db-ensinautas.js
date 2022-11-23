//Instanciando um novo bjecto para pegara a Data atual
now = new Date();
let curent_year = now.getFullYear();
let DateYear = document.getElementById('year');
DateYear.innerHTML = `<span>Copyright© ${curent_year} - A Todos os direitos reservados</span>`;
//Instanciando um novo bjecto para pegara a Data atual

//Variáveis Diversas
let BoxDestaque = document.getElementById('caixa_destaque');
let BoxServicos = document.getElementById('caixa_servicos');

//Variáveis Diversas

let FotosDestaque = [

   {
      url: 'destaque-01.jpg', 
      description: 'Websites Diversificados', 
      subject: ` Criamos para si, todo o tipo de Website seja para
      sua empresa, com pacotes a preços acessíveis `
   },

   {url: 'destaque-02.jpg',
   description: 'Redes Sociais', 
   subject: ` Siga-nos também nas redes sociais e esteja a par dos nossos  serviços`
},

   {url: 'destaque-03.jpg',
   description: 'Aulas ao Domicílio', 
   subject: ` Temos disponível o curso de programação Web - Laravel, aprenda
   a desenvolver as suas próprias páginas web com um dos Frameworks mais solicitados no mercado
   `
   },
];

 
for(let i=0; i<3; i++)
{ 

   BoxDestaque.innerHTML += `
   <div class="card col-md-3 mx-1  mt-2" style="width: 22.5rem;">
      <img src="img_destaques/${FotosDestaque[i].url}" class="img-fluid card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title text-center fw-bold">${FotosDestaque[i].description}</h5>
      <p class="card-text text-justify">
         ${FotosDestaque[i].subject}
      </p>
      </div>
   </div>
      `  
}

let MainServices = [
   {
      icon: 'fa fa-handshake fs-1',
      service: 'Gestão de Mídias Sociais',
      description: `Prestamos serviços diversos relacionados
      a gestão de mídias sociais esteja por dentro consultando os nossos pacotes
      `
      

   },
   {
      icon: 'fa fa-book-reader fs-1',
      service: 'Aulas Particulares e aoDmicílio',
      description: `Dámos aulas ao domicílio nas mais variadas disciplinas
      tanto para o ensino Médio e ensino Superior
      `
      

   },
   {
      icon: 'fa fa-laptop-code fs-1',
      service: 'Criação e Manutenção de Sites',
      description: `Dámos aulas ao domicílio nas mais variadas disciplinas
      tanto para o ensino Médio e ensino Superior
      `
      

   },
];

for(i=0; i<3; i++){
   BoxServicos.innerHTML += `
   
   <div class="card cabecalho mx-1 mt-2" style="width: 18rem;  height: 20rem" >
   <div class="card-body">
     <div class="text-center">
       <i class="${MainServices[i].icon}"></i>
     </div>

     <h4 class="card-title text-center mt-2">${MainServices[i].service}</h4>
     <p class="card-text text-center mt-4 ">
     ${MainServices[i].description}
     </p>
     <div class="d-flex justify-content-center text-uppercase">
       <a id="text" class=" text-white btn btn-light" href="/pages/packages.html">ver pacotes</a>
     </div>
   </div>
 </div>
  
   `
}

