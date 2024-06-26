const prompt = require("prompt-sync")({ sigint: true });

let consultas = [];

while (true) {
  console.log(`
    //     === Menu de Cadastro de Consultas ===
    //     1. Adicionar uma nova consulta médica
    //     2. Listar todas as consultas
    //     3. Atualizar uma consulta
    //     4. Cancelar uma consulta
    //     0. Sair
    //     `);

  let opcao = prompt("Escolha uma opção: ");

  if (opcao === "1") {
    let paciente = prompt("Nome do Paciente: ");
    let medico = prompt("Nome do Médico: ");
    let agendamento = prompt("Data da Consulta: ");
    let horario = prompt("Horário da Consulta: ");

    consultas.push({ paciente, medico, agendamento, horario });
    console.log("Consulta adicionada com sucesso!", consultas);
  } else if (opcao === "2") {
    if (consultas.length === 0) {
      console.log("Nenhuma consulta agendada.");
      break;
    } else {
      consultas.forEach((consultas, index) => {
        console.log(
          `${index + 1}. ${consultas.paciente} - Dr. ${consultas.medico} - ${consultas.agendamento} - ${
            consultas.horario
          }`
        );
      });
    }
  } else if (opcao === "3") {
        let atualizar = prompt("Escolha o número da consulta que deseja atualizar: ")
        consultas.splice(atualizar-1,1)
        let paciente = prompt("Nome do Paciente: ");
        let medico = prompt("Nome do Médico: ");
        let agendamento = prompt("Data da Consulta: ");
        let horario = prompt("Horário da Consulta: ");
        consultas.splice(atualizar-1,0,{paciente,medico,agendamento,horario})
  } else if (opcao === "4"){
        let cancelar = prompt("Escolha o número da consulta que seja cancelar: ")
        consultas.splice(cancelar-1,1)
        console.log("Consulta Excluída")
  } else if (opcao === "0") {
    console.log("Saindo do sistema. Até logo!");
    break;
  } else {
    console.log("Opção inválida. Tente novamente.");
  }
}
