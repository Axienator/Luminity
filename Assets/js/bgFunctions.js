import { elements } from "./Elements.js"

import (elements)
export const backgroundFunctions = { 

SchemeMode () {
        elements.colorScheme.classList.toggle('lightMode')

        if(elements.colorScheme.classList.contains('lightMode')) {
            elements.colorScheme.textContent = "☀"
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
            elements.colorScheme.textContent = "⏾"
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
    },
    
    changeBackground () {
        document.body.classList.toggle('change')
    },
}