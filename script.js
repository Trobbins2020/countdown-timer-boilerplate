document.addEventListener("DOMContentLoaded", () => {
    const timeLeftDisplay = document.querySelector("#time-left")
    const srtBtn = document.querySelector("#srt-btn")
    timeLeft = 10

    function countDown(){
        setInterval(function(){
            if(timeLeft<=0){
                clearInterval(timeLeft=0)
            }
            timeLeftDisplay.innerHTML=timeLeft
            timeLeft -=1
        }, 1000)
    }

    srtBtn.addEventListener('click', countDown)
})