now = new Date();
let curent_year = now.getFullYear();
let DateYear = document.getElementById('year');
DateYear.innerHTML = `<span>Copyright© ${curent_year} - A Todos os direitos reservados</span>`;
//Instanciando um novo bjecto para pegara a Data atual

let BoxTeam = document.getElementById('caixa_equipe');

let Members = [
    {
       name: 'Leandro José',
       position: 'CEO',
       image:'Leandro José.jpg',
      
    },
    {
       name: 'Paulo Francisco',
       position: 'Gestor de RH',
       image:'Paulo Francisco.jpg',
      
    },
    {
       name: 'Maximino José',
       position: 'Gestor de TI',
       image:'Maximino José.jpg',
      
    },
    {
       name: 'António Miguel',
       position: 'Desenvolvedor Web',
       image:'AntonioMiguel.jpg',
       
      },
      {
         name: 'Cirilo Canganjo',
         position: 'Desenvolvedor Web',
         image:'CiriloCanganjo.jpg',
      
    },
     
];

for(i=0; i<5; i++){
    BoxTeam.innerHTML += ` 
   
   <div id="box_worker" class="mt-2 mb-2 mx-2" >
   <div>
         <img src="./assets/workers/${Members[i].image}" class=" " alt="Membro da equipe {{$members->nome}}">
         </div>
         <div class=" text-center info-card mt-2">
         <h5>${ Members[i].name }</h5>
         <span>${ Members[i].position }</span>
         </div>

   </div>
    
     
    `
  
 }
 
