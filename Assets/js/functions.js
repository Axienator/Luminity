// functions.js
import { elements, Duration, state } from "./elements.js"
import { OtherFunctions } from "./Other.js"

export const UtilityFunctions = {
    Timeformat (seconds) {
        const mins = String(Math.floor(seconds / 60)).padStart(2, '0')
        const secs = String(seconds % 60).padStart(2, '0')
        return `${mins}:${secs}`
    },

    DisplayMode () {
        if(state.mode === 'pomodoro') {
            elements.currentModeDisplay.textContent='Pomodoro'
        }
        if(state.mode === 'shortbreak') {
            elements.currentModeDisplay.textContent='Short break'
        }
        if(state.mode === 'longbreak') {
            elements.currentModeDisplay.textContent='Long break'
        }
    },

    StartTimer() {
        if (state.timer !== null) return

        elements.timerDisplay.textContent = this.Timeformat(state.seconds) 
        elements.StartPausetoggle.textContent = 'Pause'

        state.timer = setInterval(() => {
            if (state.seconds === 0) {
                clearInterval(state.timer)
                state.timer = null
                OtherFunctions.playBreak()

                // Switch to the next mode
                if (state.mode === 'pomodoro') {
                    state.PomodoroCounter++

                    if (state.PomodoroCounter % Duration.counterbeforelongbreak === 0) {
                        UtilityFunctions.longbreakTimer()
                    } else {
                        UtilityFunctions.shortbreakTimer()
                    }
                } else if (state.mode === 'shortbreak' || state.mode === 'longbreak') {
                    UtilityFunctions.pomodoroTimer()
                }

                // Start the next session automatically
                UtilityFunctions.StartTimer()
            } else {
                state.seconds--
                elements.timerDisplay.textContent = this.Timeformat(state.seconds)
            }
        }, 1000);

        OtherFunctions.playClick();
        this.AFK();
    },


    pauseTimer () {
        clearInterval(state.timer)
        state.timer = null

        
    },

    restartTimer () {
        this.pauseTimer()
        if(state.mode === 'pomodoro') state.seconds = Duration.pomodoro
        if(state.mode === 'shortbreak') state.seconds = Duration.shortbreak
        if(state.mode === 'longbreak') state.seconds = Duration.longbreak
        this.resetToggle()
        OtherFunctions.playClick()
        elements.timerDisplay.textContent = this.Timeformat(state.seconds)
    },

    AFK () {
        clearTimeout(state.afkTimeout)
        state.afkTimeout = setTimeout(() => {
            state.isAFK = true
            elements.pageLayout.classList.add('AFK')
            elements.controlPanel.classList.add('AFK')
            elements.currentModeDisplay.classList.add('AFK')
            elements.TopbarTabs.classList.add('AFK')
        }, 10000)
    },

    exitAFK () {
        clearTimeout(state.afkTimeout)
        state.isAFK = false
        elements.pageLayout.classList.remove('AFK')
        elements.controlPanel.classList.remove('AFK')
        elements.currentModeDisplay.classList.remove('AFK')
        elements.TopbarTabs.classList.remove('AFK')
        
    },

    resetAFKTimer() {
        clearTimeout(state.afkTimeout)  // Only start AFK timer if the pomodoro timer is running

        if (state.timer !== null) {
            this.AFK()
        }
    },

    resetToggle () {
        elements.StartPausetoggle.textContent = 'Start'
    },

    handleToggleChange () {
        elements.StartPausetoggle.classList.toggle('Resume')
        if(elements.StartPausetoggle.classList.contains('Resume')) {
            elements.StartPausetoggle.textContent = 'Pause'
            this.StartTimer()
        } else {
            elements.StartPausetoggle.textContent = 'Resume'
            this.pauseTimer()
            OtherFunctions.playClick()
        }
    },

    pomodoroTimer () {
        this.pauseTimer()
        state.mode = 'pomodoro'
        state.seconds = Duration.pomodoro
        elements.timerDisplay.textContent = this.Timeformat(state.seconds)
        this.resetToggle()
        OtherFunctions.playClick()
        this.DisplayMode()

    },

    shortbreakTimer () {
        this.pauseTimer()
        state.mode = 'shortbreak'
        state.seconds = Duration.shortbreak
        elements.timerDisplay.textContent = this.Timeformat(state.seconds)
        this.resetToggle()
        OtherFunctions.playClick()
        this.DisplayMode()
    },

    longbreakTimer () {
        this.pauseTimer()
        state.mode = 'longbreak'
        state.seconds = Duration.longbreak
        elements.timerDisplay.textContent = this.Timeformat(state.seconds)
        this.resetToggle()
        OtherFunctions.playClick()
        this.DisplayMode()
    }

}

