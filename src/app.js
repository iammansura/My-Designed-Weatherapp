// Week 4 Homework Day and Time and degrees.

// Day And Time

function dayAndTime(date) {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  let month = months[now.getMonth()]

  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
  let day = days[now.getDay()]
  let dates = now.getDate()
  let hours = now.getHours()
  let minutes = now.getMinutes()

  minutes = minutes <= 9 ? '0' + minutes : minutes

  return ` ${month} ,${day} ${dates}  ${hours}:${minutes}`
}
let dates = document.querySelector('#dates')
let now = new Date()
dates.innerHTML = dayAndTime(now)

// Change City

function ChangeCity(event) {
  event.preventDefault()
  let input = document.querySelector('#search-input')
  let citys = document.querySelector('#city')
  citys.innerHTML = input.value
}
let form = document.querySelector('#search-form')
form.addEventListener('submit', ChangeCity)

// Change Degrees

function celCius(event) {
  event.preventDefault()
  let tempaRatureCel = document.querySelector('#Temp')
  tempaRatureCel.innerHTML = '17'
}
let Celcius = document.querySelector('#celcius')
Celcius.addEventListener('click', celCius)

function fahrenHeit(event) {
  event.preventDefault()
  let fahrenheit = document.querySelector('#Temp')
  fahrenheit.innerHTML = '62.6'
}
let FahrenHeit = document.querySelector('#fahrenheit')
FahrenHeit.addEventListener('click', fahrenHeit)
