const elements = {
    TopbarTabs: document.querySelectorAll('#pomodoro, #shortbreak, #longbreak'),
    timerDisplay: document.querySelector('#timer'),
    StartPausetoggle: document.querySelector('#startpausetoggle'),
    restart: document.querySelector('#restart'),
    clickSFX: document.querySelector('#click-sfx'),
    currentMode: document.querySelector('#currentMode'),
    controlPanel: document.querySelector('.control'),
    pageLayout: document.querySelector('.page-layout')
}
const Duration = {
    pomodoro: 1800,
    shortbreak: 300,
    longbreak: 600
}
const settings = {
    sidebar: document.querySelector('#sidebar-list'),
    settingoptions: document.querySelector('#settings-icon')
}
let state = {
    mode: 'pomodoro',
    seconds: Duration.pomodoro,
    timer: null,
    lastClickTime: 0,
    cooldown: 150
}

function Timeformat (seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0')
    const secs = String(seconds % 60).padStart(2, '0')
    return `${mins}:${secs}`
}