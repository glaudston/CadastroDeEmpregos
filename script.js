let vagas = []
let candidato = []

//Nova Vaga
function criarvaga(){
  let vaga = {nome:prompt(`Nome da vaga:`),descricao:prompt(`Descrição da vaga : Ex: função, carga horária ...`),dataLimite:prompt(`digite a data limite para candidatura:`) }
document.getElementById(`resultado`).innerHTML = 
`<br>Vagas<br><br>
${vaga.nome}<br>
${vaga.descricao}<br><br>
Data limite para se candidatar:<br>
${vaga.dataLimite}<br><br>
<button  onclick="inscrever()"  id="inscrever">Inscrever o candidato</button>
`
vagas.push(vaga)

vagas += `${vaga.nome}<br><br>
             ${vaga.descricao}<br><br>
             ${vaga.dataLimite}`
     
      }
      function listar(){
         document.getElementById(`resultado`).innerHTML = 
         `vagas<br><br>${vagas}`
        
      
      
      }

//Candidato á Vaga
function inscrever(){
  candidato = 
   {nome:prompt(`Nome do candidato:`),
   email:prompt(`Digite seu E-mail para receber Alertas sobre a candidatura!`)}
   document.getElementById(`resultado`).innerHTML = `<br>Candidato<br>
   Nome: ${candidato.nome}<br><br>
   Email: ${candidato.email}<br><br>
   <input id = "curriculo" type="file" /><br><br>
   <button onclick"confirmar()" id"confirmarCandidatura">Confirmair Candidatura</button>
   ` 
   
  
}


function confirmar(){
 
   
}