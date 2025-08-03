const topbar = document.querySelectorAll('#pomodoro, #shortbreak, #longbreak')
const timerdisplay = document.querySelector('#timer')
const controls = document.querySelector('.control')
const startpausetoggle = document.querySelector('#startpausetoggle')
const restart = document.querySelector('#restart')
const clicksfx = document.querySelector('#click-sfx')
const currentMode = document.querySelector('#currentMode')

const pomodoro_duration = 1800
const shortbreak_duration = 300
const longbreak_duration = 600

let timerMode = 'pomodoro'
let second = pomodoro_duration
let timer = null
let lastPlay = 0
const cooldown = 150

timerdisplay.textContent = timeformat(second) 

function Mode () {
    if(timerMode === 'pomodoro') {
        currentMode.textContent='Pomodoro'
        second = pomodoro_duration
    } 
    if(timerMode === 'shortbreak') {
        currentMode.textContent='Short break'
        second = shortbreak_duration
    }
    if(timerMode === 'longbreak') {
        currentMode.textContent='Long break'
        second = longbreak_duration
    }
}
// Display of the Time
function timeformat (s) {
    const minutes = Math.floor(s / 60) // Converts 60 seconds to 1 minute
    const remainingSeconds = s % 60
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}` // Format of the timer (00:00)
}
// Click sfx
function playClick () {
    const now = Date.now()
    if (now - lastPlay > cooldown) {
    clicksfx.volume = 0.3
    clicksfx.currentTime = 0
    clicksfx.play()
    lastPlay = now
    }
}
// Timer start
function startTimer () {
    if (timer !== null) return 
    timerdisplay.textContent = timeformat(second)
    timer = setInterval(() => {
        // if second is set off to 0
        if (second === 0) {
            clearInterval(timer) // timer will be off
            timer = null
        } else { // if not, continue reducing the seconds
            second-- 
            timerdisplay.textContent = timeformat(second)
        }
    }, 1000) // code will run once every 1000ms
    playClick()
    awayfromkeyboard ()
}
// AFK State
function awayfromkeyboard () {
    setTimeout(() => {
        document.querySelector('.page-layout').classList.add('layout-move-top')
        document.querySelector('.control').classList.add('Afk-controls')
    }, 10000)
}
// Normal State
function notawayfromkeyboard () {
    document.querySelector('.page-layout').classList.remove('layout-move-top')
    document.querySelector('.control').classList.remove('Afk-controls')
}
// Reset to original state
function resetToggle () {
    startpausetoggle.classList.remove('Pause')
    startpausetoggle.textContent='Start'

}
// Start / Pause button
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
    notawayfromkeyboard()
}
// Pause Functionality
function pauseTimer () {
    clearInterval(timer)
    timer = null
}
// Restart Functionality
function restartTimer () {
    pauseTimer()
    if (currentMode === 'pomodoro') second = pomodoro_duration
    if (currentMode === 'shortbreak') second = shortbreak_duration
    if (currentMode === 'longbreak') second = longbreak_duration
    timerdisplay.textContent = timeformat(second)
    resetToggle()
    playClick()
    notawayfromkeyboard()
}
// Pomodoro Time
function pomodorotimer () {
    pauseTimer()
    timerMode = 'pomodoro'
    second = pomodoro_duration
    timerdisplay.textContent = timeformat(second)
    resetToggle()    
    playClick()
    notawayfromkeyboard()
    Mode()
}
// Short break Time
function shortbreaktimer () {
    pauseTimer()
    timerMode = 'shortbreak'
    second = shortbreak_duration
    timerdisplay.textContent = timeformat(second)
    resetToggle() 
    playClick()
    notawayfromkeyboard()
    Mode()
}
// Long break Time
function longbreaktimer () {
    pauseTimer()
    timerMode = 'longbreak'
    second = longbreak_duration
    timerdisplay.textContent = timeformat(second)
    resetToggle() 
    playClick()
    notawayfromkeyboard()
    Mode()
}
// Events of Start / Pause
controls.addEventListener('click', (e) => {
    if(e.target.id === 'startpausetoggle') handleToggleChange()
    if(e.target.id === 'restart') restartTimer()
})
// items on top-bar
topbar.forEach(tab => {
    tab.addEventListener('click', () => {
        const id = tab.id
        if (id === 'pomodoro') pomodorotimer ()
        if (id === 'shortbreak') shortbreaktimer ()
        if (id === 'longbreak') longbreaktimer ()
    })
})