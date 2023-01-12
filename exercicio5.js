let saldo = prompt ("informe a quantidade de dinheirinho inicial: ")
saldo = parseFloat(saldo)
let opcao = " "

do {
  opcao = prompt (
    "Saldo disponível: R$ " + saldo + 
    "\n1. Adicionar dinheiro: " + 
    "\n2. Remover dinheiro: " +
    "\n3. Sair. "
    )
  
  switch (opcao) {
  case "1":
    saldo += parseFloat (prompt("informe o valor a ser adicionado: "))
    break
  case "2":
    saldo -= prompt ("informe o valor a ser removido: ")
    break
    case "3" :
      alert ("saindo...")
    break 
  default:
  alert ("Entrada invalida!")
  }
} while (opcao !== "3")