// main.js
import { elements, settings, state } from './elements.js'
import { UtilityFunctions } from './functions.js'
import { OtherFunctions } from './Other.js'

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
    if(y.target.id === 'colorMode') OtherFunctions.SchemeMode()
})

settings.settingoptions.addEventListener ('click', (z) => {
    if(z.target.id === 'settings-icon') OtherFunctions.sidebarToggle()
})

elements.music.addEventListener ('click', () => {
    OtherFunctions.musicPlaylist()
})

elements.musicExit.addEventListener('click', () => {
    OtherFunctions.musicExitdisplay()
})

document.addEventListener('click', () => {
    if(state.isAFK) {
        UtilityFunctions.exitAFK()
        state.isAFK = false
    } 
    UtilityFunctions.resetAFKTimer()
})
