const topbar = document.querySelectorAll('.top-bar div')
const timerdisplay = document.querySelector('#timer')
const controls = document.querySelector('.control')
const startpausetoggle = document.querySelector('#startpausetoggle')
const restart = document.querySelector('#restart')
const clicksfx = document.querySelector('#click-sfx')
const countdownsfx = document.querySelector('#countdown-sfx')

let second = 1500
let timer = null


function timeformat (s) {
    const minutes = Math.floor(s / 60) // Converts 60 seconds to 1 minute
    const remainingSeconds = s   % 60
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}` // Format of the timer (00:00)
}
// initial display of the timer(5 seconds)
timerdisplay.textContent = timeformat(second) 

function playcountdown () {
    countdownsfx.currentTime = 0
    countdownsfx.play()
}

function playClick () {
    clicksfx.currentTime = 0
    clicksfx.play()
}

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
    }, 1000) // code will run once every 1000ms
    playClick()
    playcountdown()
}

function resetToggle () {
    startpausetoggle.classList.remove('Pause')
    startpausetoggle.textContent='Start'

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
    playClick()
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
    playClick()
}

function pomodorotimer () {
    pauseTimer()
    second = 1500
    timerdisplay.textContent = timeformat(second)
    resetToggle()    
    playClick()
}

function shortbreaktimer () {
    pauseTimer()
    second = 300
    timerdisplay.textContent = timeformat(second)
    resetToggle() 
    playClick()
}

function longbreaktimer () {
    pauseTimer()
    second = 600
    timerdisplay.textContent = timeformat(second)
    resetToggle() 
    playClick()
}


controls.addEventListener('click', (e) => {
    if(e.target.id === 'startpausetoggle') handleToggleChange()
    if(e.target.id === 'restart') restartTimer()
})

topbar.forEach(tab => {
    tab.addEventListener('click', () => {
        const id = tab.id
        if (id === 'pomodoro') pomodorotimer ()
        if (id === 'shortbreak') shortbreaktimer ()
        if (id === 'longbreak') longbreaktimer ()
    })
})