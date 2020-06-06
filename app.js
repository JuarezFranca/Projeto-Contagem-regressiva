const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`janeiro 01 ${nextYear} 00:00:00`)

const updateCountdown = () => {
    const currentTime = new Date()
    const diferenceTime = newYearTime - currentTime  
    console.log(diferenceTime)
}
updateCountdown()