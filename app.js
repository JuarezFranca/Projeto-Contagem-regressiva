const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countDownContainer = document.querySelector('#countdown')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`janeiro 01 ${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear

const updateCountdown = () => {
    const currentTime = new Date()
    const diferenceTime = newYearTime - currentTime  
    const days = Math.floor(diferenceTime / 1000 / 60 / 60 / 24)
    const hours = Math.floor(diferenceTime / 1000/ 60 / 60) % 24
    const minutes = Math.floor(diferenceTime / 1000/ 60 ) % 60
    const seconds = Math.floor(diferenceTime / 1000 ) % 60

    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    daysContainer.textContent = days < 10 ? '0' + days : days
}
const setTimeOutDisplay = () => {
    spinnerLoading.remove()
    countDownContainer.style.display = 'flex'
}

setTimeout(setTimeOutDisplay, 1000)

setInterval(updateCountdown, 1000)