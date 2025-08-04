// elements.js
export const elements = {
    TopbarTabs: document.querySelectorAll('#pomodoro, #shortbreak, #longbreak'),
    timerDisplay: document.querySelector('#timer'),
    StartPausetoggle: document.querySelector('#startpausetoggle'),
    restart: document.querySelector('#restart'),
    clickSFX: document.querySelector('#click-sfx'),
    colorScheme: document.querySelector('#colorMode'),
    controlPanel: document.querySelector('.control'),
    pageLayout: document.querySelector('.page-layout'),
    currentModeDisplay: document.querySelector('#currentMode')
    
}
export const Duration = {
    pomodoro: 1500,
    shortbreak: 300,
    longbreak: 600
}
export const settings = {
    sidebar: document.querySelector('#sidebar-list'),
    settingoptions: document.querySelector('#settings-icon')
}
export const state = {
    isAFK: false,
    mode: 'pomodoro',
    seconds: Duration.pomodoro,
    timer: null,
    lastClickTime: 0,
    cooldown: 150,
    afkTimeout: null 
}

