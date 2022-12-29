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
${vaga.dataLimite}<br><br>`

  vagas +=`<br>Vaga<br><br>${vaga.nome}<br><br>
             ${vaga.descricao}<br><br>
             ${vaga.dataLimite}<br><br>`
            vagas.push(vaga)      }

let excluirvagas =  ` ${vagas}<br><button  onclick="excluir()"  id="excluir">Excluir candidato</button><br><br>`
let listarvagas = `${vagas} <button onclick="inscrever()"  id="inscrever">Inscrever o candidato</button><br><br>` 
            
      function listar(){
         document.getElementById(`resultado`).innerHTML = listarvagas
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
function excluirvaga(){
 document.getElementById(`resultado`).innerHTML = excluirvagas
  
}

function confirmar(){
 
   
}
function excluir(){
  vagas.splice()
}


//vagas += `<br>Excluir vaga<br><br>
  //           ${vaga.nome}<br><br>
    //         ${vaga.descricao}<br><br>
      //       ${vaga.dataLimite}<br><br><button  onclick="excluir()"  id="excluir">Excluir candidato</button><br><br>`

      //