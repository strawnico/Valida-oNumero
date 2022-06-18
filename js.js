const p = document.querySelector('p.status')
const input = document.querySelector('input')
input.addEventListener('keydown', formatNumber)
input.addEventListener('input', validateNumber)
function validateInput(e) {
  if (e.keyCode == 8 || e.keyCode == 46) return false
  if (e.target.value.length >= 15) {
    e.preventDefault()
    return false
  }
  if (isNaN(e.key)) {
    e.preventDefault()
    return false
  }
  return true
}
function validateNumber(e) {
  const number = e.target.value.replace(/\D/g, '')
  if (number.length == 11) {
    input.style.borderColor = 'green'
    p.innerText = 'O número é válido'
    p.style.color = 'green'
    return true
  }
  input.style.borderColor = 'red'
  p.innerText = 'O número é inválido'
  p.style.color = 'red'
  return false
}
function formatNumber(e) {
  let formattedNumber
  const number = e.target.value
  if (!validateInput(e)) return
  if (number.length == 2) {
    const dddRaw = number.slice(0, 2)
    const ddd = '(' + dddRaw + ') '
    formattedNumber = ddd
    input.value = formattedNumber
  }
  if (number.length == 10) {
    input.value += '-'
  }
}
