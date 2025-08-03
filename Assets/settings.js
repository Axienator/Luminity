const sidebar = document.querySelector('#sidebar-list')
const settings = document.querySelector('#settings-icon')

function sidebarToggle () {
    
    settings.classList.toggle('show')
    if(settings.classList.contains('show')) {
        sidebar.style.display='flex'
    } else {
        sidebar.style.display='none'
    }
}

settings.addEventListener ('click', (x) => {
    if(x.target.id === 'settings-icon') sidebarToggle()
})