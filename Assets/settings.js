const sidebar = document.querySelector('#sidebar-list')
const settings = document.querySelector('#settings-icon')

settings.addEventListener ('click', (x) => {
    if(x.target.id === 'settings-icon') {
        sidebar.style.display='flex'
    }
})