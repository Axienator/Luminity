const timerdisplay = document.querySelector('#timer')
const controls = document.querySelector('.control')

let second = 6
let timer = null

function timeformat (s) {
    const minutes = Math.floor(s / 60)
    const remainingSeconds = second % 60
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
// initial display of the timer(5 seconds)
timerdisplay.textContent = timeformat(second) 


// start the timer
function startTimer () {
    if (timer !== null) return 

    timer = setInterval(() => {
        timerdisplay.textContent = timeformat(second)

        // if second is set off to 0
        if (second === 0) {
            clearInterval(timer) // timer will be off
            timer = null
        } else { // if not, continue reducing the seconds
            second-- 
        }
    }, 1000) // code will run once every 1000ms(1s)
}



function restartTimer() {
    clearInterval(timer)
    timer = null
    second = 6
    timerdisplay.textContent = timeformat(second)
    startTimer()
}

function pauseTimer () {
    clearInterval(timer)
    timer = null
}

function resumeTimer() {
    startTimer()
}


controls.addEventListener('click', (e) => {
    if(e.target.id === 'startbtn') restartTimer()
    if(e.target.id === 'pausebtn') pauseTimer()
})

// needs a variable that can control the flow