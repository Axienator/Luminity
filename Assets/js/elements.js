// elements.js
export const elements = {
    TopbarTabs: document.querySelectorAll('#pomodoro, #shortbreak, #longbreak'),
    timerDisplay: document.querySelector('#timer'),
    StartPausetoggle: document.querySelector('#startpausetoggle'),
    restart: document.querySelector('#restart'),
    music: document.querySelector('#music-icon'),
    musicExit: document.querySelector('#exitmusic'),
    ceTimerExit: document.querySelector('#exitceTimer'),
    clickSFX: document.querySelector('#click-sfx'),
    breakSFX: document.querySelector('#break-sfx'),
    colorScheme: document.querySelector('#colorMode'),
    controlPanel: document.querySelector('.control'),
    pageLayout: document.querySelector('.page-layout'),
    currentModeDisplay: document.querySelector('#currentMode'),
    changebg: document.querySelector('#cebackground'),
    changetimer: document.querySelector('#cetimer'),
    sfxtoggle: document.querySelector('#sfxtoggle'),
}
export let Duration = {
    pomodoro: 1800,
    shortbreak: 300,
    longbreak: 900,
    counterbeforelongbreak: 3,
}
export const settings = {
    sidebar: document.querySelector('#sidebar-list'),
    settingoptions: document.querySelector('#settings-icon')
}
export const state = {
    isMuted: false,
    isAFK: false,
    mode: 'pomodoro',
    seconds: Duration.pomodoro,
    timer: null,
    lastClickTime: 0,
    cooldown: 150,
    afkTimeout: null,
    PomodoroCounter: 0,
}

export const formInput = {
    workInput: document.querySelector('#work'),
    shortbreakInput: document.querySelector('#sbreak'),
    longbreakworkInput: document.querySelector('#lbreak'),
    inputSubmit: document.querySelector('#submit'),
}


