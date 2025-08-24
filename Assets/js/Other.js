//Other.js
import { elements, settings, state, formInput, Duration, } from "./Elements.js"
import { UtilityFunctions } from "./TimerFunctions.js"


export const OtherFunctions = {

    playClick () {
        const now = Date.now()
        if(now - state.lastClickTime > state.cooldown) {
            elements.clickSFX.volume = 0.2
            elements.clickSFX.currentTime = 0
            elements.clickSFX.play()
            state.lastClickTime = now
        }
    },

    playBreak () {
        const now = Date.now()
        if(now - state.lastClickTime > state.cooldown) {
            elements.breakSFX.volume = 0.2
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


    musicPlaylist () {
        document.querySelector('.music-layout').classList.add('show')
        document.querySelector('#music-container').classList.add('show')

        this.playClick()
    },

    musicExitdisplay () {
        document.querySelector('.music-layout').classList.remove('show')
        document.querySelector('#music-container').classList.remove('show')

        this.playClick()
    },

    ceTimerExitdisplay () {
        document.querySelector('.ceTimerlayout').classList.remove('show')
        document.querySelector('#ceTimerContainer').classList.remove('show')
    },

    changeTimer () {
        document.querySelector('.ceTimerlayout').classList.add('show')
        document.querySelector('#ceTimerContainer').classList.add('show')
    },

    sfxToggledisplay () {
        elements.sfxtoggle.classList.toggle('change')

        if(elements.sfxtoggle.classList.contains('change')) {
            elements.sfxtoggle.innerHTML = 
            `
            <img src="pictures/volumeoff.png" alt="Volume on icon" width="20px" height="19px">
            `
            this.sfxOff ()
            console.log('Sound effects is turned off')
        } else {
            elements.sfxtoggle.innerHTML = 
            `
            <img src="pictures/volumeon.png" alt="Volume on icon" width="24px" height="24px">
            `
            this.sfxOn ()
            console.log('Sound effects is turned on')
            
        }

    }, 

    sfxOff () {
        document.querySelectorAll('audio').forEach(Audio => {
            Audio.muted = true
            Audio.pause()
        })
    },

    sfxOn () {
            document.querySelectorAll('audio').forEach(Audio => {
            Audio.muted = false
            elements.clickSFX.pause()
            elements.clickSFX.currentTime = 0
            elements.clickSFX.play()
        })
    },

    CustomizeTimer () { 
        if(formInput.workInput.value > 60 || formInput.shortbreakInput.value > 60 || formInput.longbreakInput.value > 60 || formInput.workInput.value < 1 || formInput.shortbreakInput.value < 1 || formInput.longbreakInput.value < 1){ 
            alert("Please enter a value from 1 - 60") 
            return 
        } else {
        let updatedWork = formInput.workInput.value * 60
        let updatedSbreak = formInput.shortbreakInput.value * 60
        let updatedLbreak = formInput.longbreakInput.value * 60

        Duration.pomodoro = updatedWork
        Duration.shortbreak = updatedSbreak
        Duration.longbreak = updatedLbreak
        if(state.mode === 'pomodoro') state.seconds = Duration.pomodoro
        if(state.mode === 'shortbreak') state.seconds = Duration.shortbreak
        if(state.mode === 'longbreak') state.seconds = Duration.longbreak
        elements.timerDisplay.textContent = UtilityFunctions.Timeformat(state.seconds)
        console.log("Work:", Duration.pomodoro);
        console.log("Short break:", Duration.shortbreak);
        console.log("Long break:", Duration.longbreak);
        UtilityFunctions.pauseTimer()

        }
    },
}

