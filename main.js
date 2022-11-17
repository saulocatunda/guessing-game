const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', keyVerify)

//Desafio 2, Condição de só poder clicar ao colocar 0 a 10
//Desafio 3, exigir número para aumentar o attempts
// Funções

function handleTryClick(event) {
  event.preventDefault()
  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) >= 0 && Number(inputNumber.value) <= 10) {
    if (Number(inputNumber.value) == randomNumber) {
      toggleScreen()
      screen2.querySelector(
        'h2'
      ).innerText = `Você acertou em ${xAttempts} tentativas`
      inputNumber.value = ''
      randomNumber = Math.round(Math.random() * 10)
      xAttempts = 1
    } else if (Number(inputNumber.value) != randomNumber) {
      toggleScreen()
      screen2.querySelector('h2').innerText = `Número errado, tente novamente`
      inputNumber.value = ''
      xAttempts++
    }
  } else if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    toggleScreen()
    screen2.querySelector(
      'h2'
    ).innerText = `Inválido! Digite um número de 0 a 10`
    inputNumber.value = ''
  }
}
function handleResetClick() {
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function keyVerify(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}
