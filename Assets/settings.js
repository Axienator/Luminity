const sidebar = document.querySelector('#sidebar-list')
const settings = document.querySelector('#settings-icon')

function sidebarToggle () {
    
    sidebar.classList.toggle('show')
    if(sidebar.classList.contains('show')) {
        sidebar.style.display='flex'
    } else {
        sidebar.style.display='none'
    }
}

settings.addEventListener ('click', (x) => {
    if(x.target.id === 'settings-icon') sidebarToggle()
})