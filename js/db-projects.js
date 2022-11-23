//Instanciando um novo bjecto para pegara a Data atual
now = new Date();
let curent_year = now.getFullYear();
let DateYear = document.getElementById('year');
DateYear.innerHTML = `<span>Copyright© ${curent_year} - A Todos os direitos reservados</span>`;
//Instanciando um novo bjecto para pegara a Data atual

let BoxProjects = document.getElementById('caixa_projectos');
let ProjetInformation = [
    {
        
       project: 'Sistema de Gestão Acadêmico',
       image: '_student.svg',       
 
    },
    {
        
       project: 'Website de Consultoria',
       image:'_website.svg',       
 
    },
    {
        
       project: 'Sistema de Gestão Hospitalar',
       image:'_hospital.svg',       
 
    },

    
     
];

for(i=0; i<3; i++){
    BoxProjects.innerHTML += `
 
   
    <div  class="card b-danger  cabecalho mx-1 mt-2 mb-2  " style="width: 18rem; height:20rem">
    <div class="card-body">
      <h4 class="card-title text-center">${ProjetInformation[i].project}</h4>
    </div>
    <img width="50" src="/assets/projects/${ProjetInformation[i].image}" class="card-img-top" alt="Imagem iltustrativa sobre desenvolvimento de website de Consultoria">
    </div>
    
     
    `
  
 }
 