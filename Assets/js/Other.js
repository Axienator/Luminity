//Other.js
import { elements, settings, state, formInput } from "./Elements.js"
import { backgroundFunctions } from './bgFunctions.js'
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

    changeTimer () {
        document.querySelector('.ceTimerlayout').classList.add('show')
        document.querySelector('#ceTimerContainer').classList.add('show')
    },

    ceTimerExitdisplay () {
        document.querySelector('.ceTimerlayout').classList.remove('show')
        document.querySelector('#ceTimerContainer').classList.remove('show')
    },

    CustomizeTimer () { // This will be the function that will be declared on 
        
        const w = formInput.workInput.value.trim()
        const s = formInput.shortbreakInput.value.trim()
        const l = formInput.longbreakworkInput.value.trim()

        const IsValid = (value) => !isNaN(value) && value >= 1 && value <= 60

        if(!IsValid(w) || !IsValid(s) || !IsValid(l)) {
            alert("Not a Value!")
            return
        } 

        workMin = w
        shortbreakMin = s
        longbreakMin = l

        this.UpdatedTimeformat()
        
    },

    UpdatedTimeformat () {
        let minutes 

        if(state.mode === 'pomodoro') {
            minutes = workMin
        }
        if(state.mode === 'shortbreak') {
            minutes = shortbreakMin
        }
        if(state.mode === 'longbreak') {
            minutes = longbreakMin
        }

        const min = String(minutes).padStart(2, '0')

        elements.timerDisplay.textContent = `${min}`
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
    }

    


}

