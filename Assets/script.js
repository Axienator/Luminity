const timerdisplay = document.querySelector('#timer')
const controls = document.querySelector('.control')
const startpausetoggle = document.querySelector('#startpausetoggle')
const restart = document.querySelector('#restart')

let second = 400
let timer = null

function timeformat (s) {
    const minutes = Math.floor(s / 60) // Converts 60 seconds to 1 minute
    const remainingSeconds = s   % 60
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`; // Format of the timer (00:00)
}
// initial display of the timer(5 seconds)
timerdisplay.textContent = timeformat(second) 


// start the timer
function startTimer () {
    startpausetoggle.classList.toggle('Pause')
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

function handleToggleChange () {
    if (startpausetoggle.classList.contains('Pause')) {
        startpausetoggle.textContent="Pause"
        startTimer()
    } else {
        startpausetoggle.textContent="Resume"
        pauseTimer()
    }
}

function pauseTimer () {
    clearInterval(timer)
    timer = null
}

function restartTimer () {
    second = 400
    timerdisplay.textContent = timeformat(second) // to set it back from the original time
}


controls.addEventListener('click', (e) => {
    if(e.target.id === 'startpausetoggle') {
        handleToggleChange()
    } 
    if(e.target.id === 'restart') restartTimer()
})

// needs a variable that can control the flow