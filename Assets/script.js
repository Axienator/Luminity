const elements = {
    TopbarTabs: document.querySelectorAll('#pomodoro, #shortbreak, #longbreak'),
    timerDisplay: document.querySelector('#timer'),
    StartPausetoggle: document.querySelector('#startpausetoggle'),
    restart: document.querySelector('#restart'),
    clickSFX: document.querySelector('#click-sfx'),
    colorScheme: document.querySelector('#colorMode'),
    controlPanel: document.querySelector('.control'),
    pageLayout: document.querySelector('.page-layout')
    
}
const Duration = {
    pomodoro: 1800,
    shortbreak: 300,
    longbreak: 600
}
const settings = {
    sidebar: document.querySelector('#sidebar-list'),
    settingoptions: document.querySelector('#settings-icon')
}
let state = {
    mode: 'pomodoro',
    seconds: Duration.pomodoro,
    timer: null,
    lastClickTime: 0,
    cooldown: 150
}

const UtilityFunctions = {
    Timeformat (seconds) {
        const mins = String(Math.floor(seconds / 60)).padStart(2, '0')
        const secs = String(seconds % 60).padStart(2, '0')
        return `${mins}:${secs}`
    },

    DisplayMode () {
        if(state.mode === 'pomodoro') {
            elements.currentMode.textContent='Pomodoro'
        }
        if(state.mode === 'shortbreak') {
            elements.currentMode.textContent='Short break'
        }
        if(state.mode === 'longbreak') {
            elements.currentMode.textContent='Long break'
        }
    },

    StartTimer () {
        if(state.timer !== null) return
        elements.timerDisplay.textContent = this.Timeformat(state.seconds)
        state.timer = setInterval(() => {
            if(state.seconds == 0) {
                clearInterval(state.timer)
                state.timer = null
            } else {
                state.seconds--
                elements.timerDisplay.textContent = this.Timeformat(state.seconds)
            }
        }, 1000)
        OtherFunctions.playClick()
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
        
    },

    AFK () {
        setTimeout(() => {
            document.querySelector('.page-layout').classList.add('layout-move-top')
            document.querySelector('.control').classList.add('Afk-controls')
        }, 10000)
    },

    exitAFK () {
        document.querySelector('.page-layout').classList.add('layout-move-top')
        document.querySelector('.control').classList.add('Afk-controls')
    },

    resetToggle () {
        elements.StartPausetoggle.classList.remove('Pause')
        elements.StartPausetoggle.textContent = 'Start'
    },

    handleToggleChange () {
        elements.StartPausetoggle.classList.toggle('Pause')
        if(elements.StartPausetoggle.classList.contains('Pause')) {
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

elements.timerDisplay.textContent = UtilityFunctions.Timeformat(state.seconds)

const OtherFunctions = {

    playClick () {
        const now = Date.now()
        if(now - state.lastClickTime > state.cooldown) {
            elements.clickSFX.volume = 0.3
            elements.clickSFX.currentTime = 0
            elements.clickSFX.play()
            state.lastClickTime = now
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

    SchemeMode () {
        .body.backgroundcolor='white'
    }
}


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



