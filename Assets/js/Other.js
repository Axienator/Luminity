//Other.js
import { elements, settings, state } from "./elements.js    "

export const OtherFunctions = {

    playClick () {
        const now = Date.now()
        if(now - state.lastClickTime > state.cooldown) {
            elements.clickSFX.volume = 0.3
            elements.clickSFX.currentTime = 0
            elements.clickSFX.play()
            state.lastClickTime = now
        }
    },

    playBreak () {
        const now = Date.now()
        if(now - state.lastClickTime > state.cooldown) {
            elements.breakSFX.volume = 0.3
            elements.breakSFX.currentTime = 0
            elements.breakSFX.play()
        }
    },

    sidebarToggle () {
        settings.sidebar.classList.toggle('show')
        if(settings.sidebar.classList.contains('show')) {
            settings.sidebar.style.display='flex'
        } else {
            settings.sidebar.style.display='none'
        }
        this.playClick()
    },

    // declare music-container and music-contents
    // classlist.add music-container - display:flex to appear on the screen + z-index to move it front 

    SchemeMode () {
        elements.colorScheme.classList.toggle('lightMode')

        if(elements.colorScheme.classList.contains('lightMode')) {
            elements.colorScheme.textContent = "⏾"
            elements.StartPausetoggle.classList.toggle('lightMode')
            elements.restart.classList.toggle('lightMode')
            elements.music.classList.toggle('lightMode')
            document.querySelector('#pomodoro').classList.toggle('lightMode')
            document.querySelector('#shortbreak').classList.toggle('lightMode')
            document.querySelector('#longbreak').classList.toggle('lightMode')
            document.querySelector('body').classList.toggle('lightMode')
            document.querySelector('.timer-layout').classList.toggle('timerlightMode')
            document.querySelector('#currentMode').classList.toggle('currentlightMode')
            document.querySelector('.top-bar').classList.toggle('lightMode')
        } else {
            elements.colorScheme.textContent = "☀"
            elements.StartPausetoggle.classList.remove('lightMode')
            elements.restart.classList.remove('lightMode')
            elements.music.classList.remove('lightMode')
            document.querySelector('button').classList.remove('lightMode')
            document.querySelector('#pomodoro').classList.toggle('lightMode')
            document.querySelector('#shortbreak').classList.toggle('lightMode')
            document.querySelector('#longbreak').classList.toggle('lightMode')
            document.querySelector('.center-items').classList.remove('lightMode')
            document.querySelector('body').classList.remove('lightMode')
            document.querySelector('.timer-layout').classList.remove('timerlightMode')
            document.querySelector('#currentMode').classList.remove('currentlightMode')
            document.querySelector('.top-bar').classList.remove('lightMode')
        }
        this.playClick()
    }

}