const buttonSend = document.querySelector('button')
buttonSend.addEventListener('click', calcular)


function calcular(){
  const valor = document.querySelector('.valor')
  const valorPlano = valor.value

  const dias = document.querySelector('.dias')
  const diasProp = dias.value

  const resultado = document.querySelector('.result')

  const calc = (valorPlano/30) * diasProp

  const format = calc.toFixed(2)

  const formatCrct = format.replace(".",",")

  resultado.value = formatCrct

}


const buttonClear = document.querySelector('.clear').addEventListener('click', function(){
  const inputValor = document.querySelector('.valor').value = ""

  const days = document.querySelector('.dias').value = ""

  const result = document.querySelector('.result').value = ""
})







