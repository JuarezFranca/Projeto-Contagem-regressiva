const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`janeiro 01 ${nextYear} 00:00:00`)

const updateCountdown = () => {
    const currentTime = new Date()
    const diferenceTime = newYearTime - currentTime  
    const days = Math.floor(diferenceTime /1000 / 60 / 60 / 24)
    const hours = Math.floor(diferenceTime / 1000/ 60 / 60) % 24
    const minutes = Math.floor(diferenceTime / 1000/ 60 ) % 60
    const seconds = Math.floor(diferenceTime / 1000 ) % 60

    console.log(minutes)
}
updateCountdown()