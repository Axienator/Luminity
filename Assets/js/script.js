import { elements, formInput, settings, state, } from './Elements.js'
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
    let count = 0
elements.changebg.addEventListener('click', () => {
    count++
    if(count == 1) document.body.classList.add('bg1')
    if(count == 2) document.body.classList.add('bg2')
    if(count == 3) document.body.classList.add('bg3')
    if(count % 4 == 0) {
        count = 0
        document.body.classList.remove('bg1')
        document.body.classList.remove('bg2')
        document.body.classList.remove('bg3')
    } 
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

formInput.inputSubmit.addEventListener('click', (a) => {
    a.preventDefault()
    OtherFunctions.CustomizeTimer()
})

settings.settingoptions.addEventListener ('click', (z) => {
    if(z.target.id === 'settings-icon') OtherFunctions.sidebarToggle()
})




