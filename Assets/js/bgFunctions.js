import { elements } from "./Elements.js"
import { OtherFunctions } from "./Other.js"
 let countDark = 0
 let countLight = 0

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
            this.Removebg()
            countLight = 0
            countDark = 0
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
            this.Removebg()
            countLight = 0
            countDark = 0
        }
        OtherFunctions.playClick()
    },

    ChangeBackground () {
        countDark++
        if(countDark == 1) document.body.classList.add('bg1')
        if(countDark == 2) {
             document.body.classList.add('bg2') 
             document.body.classList.remove('bg1')
        }
        if(countDark == 3) { 
            document.body.classList.add('bg3')
            document.body.classList.remove('bg2')
        }
        if(countDark % 4 == 0) {
            countDark = 0
            document.body.classList.remove('bg3')
        }
    },
    
    ChangeBackgroundLightMode () {
        countLight++
        if(countLight === 1) document.body.classList.add('bg4')
        if(countLight === 2) {
            document.body.classList.add('bg5')
            document.body.classList.remove('bg4')
        }
        if(countLight === 3) {
            document.body.classList.add('bg6')
            document.body.classList.remove('bg5')
        }
        if(countLight % 3 === 0) {
            countLight = 0
            document.body.classList.remove('bg6')
        }
    
    },
    Removebg () {
        countDark = 0
        countLight = 0
        document.body.classList.remove('bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6')
    }
   
}