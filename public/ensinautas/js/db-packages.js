now = new Date();
let curent_year = now.getFullYear();
let DateYear = document.getElementById('year');
DateYear.innerHTML = `<span>Copyright© ${curent_year} - A Todos os direitos reservados</span>`;
//Instanciando um novo bjecto para pegara a Data atual

let BoxPackages = document.getElementById('caixa_pacotes');

let Package = [
    {
       
       image:'package--001.jpg',
      
    },
    {
      
       image:'package--02.jpg',
      
    },
    {
      
       image:'package--03.jpg',
      
    },
    {
      
       image:'package--04.jpg',
      
    },
    {
      
       image:'package--05.jpg',
      
    },
    {
      
       image:'package--06.jpg',
      
    },
    {
      
       image:'package--07.jpg',
      
    },
    {
      
       image:'package--08.jpg',
      
    },
    
     
];

for(i=0; i<8; i++){
    BoxPackages.innerHTML += ` 
   
    <div class="card col-md-5 mx-2 mt-3" >
      <img src="./assets/packages/${Package[i].image}" class=" card-img img-fluid" alt="...">
   
   </div>
    
     
    `
  
 }
 
