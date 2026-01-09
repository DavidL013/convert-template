// Cotação hipotetica de moedas do dia.

const USD = 5.39
const EUR = 6.28
const GBP = 7.23





// Obtendo os elementos do formulario

const form = document.querySelector("form")
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// capturando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault()
  
  switch(currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break  
  }
}

// Função para converter a moeda.

function convertCurrency(amount, price, symbol){
  try {
    // Exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // calcula o total.
    let total = amount * price

    // Formatar o valor total.
    total = formatCurrencyBRL(total).replace("R$", "")

    // exibe o resultado total
    result.textContent= `${total} Reais`

    // aplica a classe que exibe o footer.
    footer.classList.add('show-result')
  } catch (error) {
    // remove a classe do footer removendo ele da tela.
    console.log(error)
    footer.classList.remove("show-result")
    alert("Não foi possivel converter. Tente mais tarde.")
  }
}

// Formata a moeda em Real Brasileiro.
function formatCurrencyBRL(value) {
  // Conversão para numero, utilizar o tolocalestring para usar o padrão brl.
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}




