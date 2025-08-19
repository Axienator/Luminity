import { elements, settings, state } from './Elements.js'
import { UtilityFunctions } from './TimerFunctions.js'
import { OtherFunctions } from './Other.js'
import { backgroundFunctions } from './bgFunctions.js'

elements.timerDisplay.textContent = UtilityFunctions.Timeformat(state.seconds)

elements.controlPanel.addEventListener('click', (x) => {
    if(x.target.id === 'startpausetoggle') UtilityFunctions.handleToggleChange()
    if(x.target.id === 'restart') UtilityFunctions.restartTimer()
})

elements.TopbarTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const id = tab.id
        if(id === 'pomodoro') UtilityFunctions.pomodoroTimer()
        if(id === 'shortbreak') UtilityFunctions.shortbreakTimer()
        if(id === 'longbreak') UtilityFunctions.longbreakTimer()
    })
})

elements.colorScheme.addEventListener('click', (y) => {
    if(y.target.id === 'colorMode') backgroundFunctions.SchemeMode()
})

elements.music.addEventListener ('click', () => {
    OtherFunctions.musicPlaylist()
})

elements.musicExit.addEventListener('click', () => {
    OtherFunctions.musicExitdisplay()
})

document.addEventListener('mousemove', () => {
    if(state.isAFK) {
        UtilityFunctions.exitAFK()
        state.isAFK = false
    } 
    UtilityFunctions.resetAFKTimer()
})

elements.changebg.addEventListener('click', () => {
    backgroundFunctions.changeBackground()
})

elements.changetimer.addEventListener('click', () => {
    OtherFunctions.changeTimer ()
})

elements.ceTimerExit.addEventListener('click', () => {
    OtherFunctions.ceTimerExitdisplay ()
})

elements.sfxtoggle.addEventListener('click', () => {
    OtherFunctions.sfxToggledisplay ()

    if (!state.isMuted) {
        OtherFunctions.playClick
    } 
})

elements.inputSubmit.addEventListener('click', () => {
    OtherFunctions.CustomizeTimer()
})

settings.settingoptions.addEventListener ('click', (z) => {
    if(z.target.id === 'settings-icon') OtherFunctions.sidebarToggle()
})




