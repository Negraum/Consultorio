const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [] // Declaro um array global

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const nome = frm.inPaciente.value
  pacientes.push(nome) // Adiciona o nome no final do array
  let lista = "" //string para concatenar pacientes

  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]}\n`
  }
  respLista.innerText = lista // Exibe a lsita de pacientes na página
  frm.inPaciente.value = "" // Limpa o conteúdo do formulário
  frm.inPaciente.focus() // Posiciona o cursor no campo
})

// Adiciona um "ouvinte" para o evento click no btUrgencia que está no form
frm.btUrgencia.addEventListener("click", () => {
  // verifica se as validações do form estão ok (no caso, paciente is required)

  if (!frm.checkValidity()) {
    alert("Informe o nome do paciente a ser atendido em carácter de urgência")
    frm.inPaciente.focus()
    return
  }

  const nome = frm.inPaciente.value // Obtém o nome do paciente
  pacientes.unshift(nome) // Adiciona o paciente no início do array
  let lista = "" // string para concatenar pacientes

  // forEach aplicado sobre o array pacientes
  pacientes.forEach((paciente, i) => (lista += `${i + 1}.${paciente}\n`))
  respLista.innerText = lista // Exibe a lista de pacientes na página
  frm.inPaciente.value = "" // limpa conteúdo do campo de formulário
  frm.inPaciente.focus() // posiciona o cursor no campo
})

frm.btAtender.addEventListener("click", () => {
  // Se o tamanho do array for = 0
  if (pacientes.length == 0) {
    alert("Não há pacientes na lista de espera")
    frm.inPaciente.focus()
    return
  }
  
  const atender = pacientes.shift() // remove do início da fila ( e obtém o nome)
  respNome.innerText = atender // Exibe o nome do paciente em atendimento
  let lista = "" // string para concatenar pacientes
  pacientes.forEach((paciente, i) => (lista += `${i + 1}.${paciente}\n`))
  respLista.innerText = lista
})