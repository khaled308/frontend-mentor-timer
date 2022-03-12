const daysElement = document.querySelector('.days .number')
const hoursElement = document.querySelector('.hours .number')
const minutesElement = document.querySelector('.minutes .number')
const secondsElement = document.querySelector('.seconds .number')

const time = daysElement.textContent
const oneDay = 24 * 60 *60
let timeInSeconds = +time * oneDay

setInterval(()=>{
    timeInSeconds -= 1
    let days = Math.floor(timeInSeconds / oneDay)
    let reminder = timeInSeconds - days * oneDay
    let hours = Math.floor(reminder / 3600)
    reminder = reminder - hours * 3600
    let minutes = Math.floor(reminder / 60)
    let seconds = reminder - minutes * 60
    
    days = String(days).length < 2 ? '0' + String(days) : String(days)
    hours = String(hours).length < 2 ? '0' + String(hours) : String(hours)
    minutes = String(minutes).length < 2 ? '0' + String(minutes) : String(minutes)
    seconds = String(seconds).length < 2 ? '0' + String(seconds) : String(seconds)

    daysElement.textContent = days
    hoursElement.textContent = hours
    minutesElement.textContent = minutes
    secondsElement.textContent = seconds
    

},1000)