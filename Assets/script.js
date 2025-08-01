
const timerdisplay = document.querySelector('#timer')
const controls = document.querySelector('.control')
const startpausetoggle = document.querySelector('#startpausetoggle')
const restart = document.querySelector('#restart')

let second = 1500
let timer = null





function timeformat (s) {
    const minutes = Math.floor(s / 60) // Converts 60 seconds to 1 minute
    const remainingSeconds = s   % 60
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}` // Format of the timer (00:00)
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
    }, 950) // code will run once every 850ms
}

function handleToggleChange () {
    startpausetoggle.classList.toggle('Pause')
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
    pauseTimer()
    second = 1500
    timerdisplay.textContent = timeformat(second)
    startpausetoggle.classList.remove('Pause')
    startpausetoggle.textContent = "Start"
}



controls.addEventListener('click', (e) => {
    if(e.target.id === 'startpausetoggle') handleToggleChange()
    if(e.target.id === 'restart') restartTimer()
})
