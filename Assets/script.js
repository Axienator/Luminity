const timerdisplay = document.querySelector('#timer')
const startbtn = document.querySelector('#startbtn')

let second = 5
let timer = null

function timeformat (s) {
    const minutes = Math.floor(s / 60)
    const remainingSeconds = second % 60
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}



startbtn.addEventListener ('click', () => {
    if (timer !== null) return 

    timer = setInterval(() => {
        second--
        timerdisplay.textContent = timeformat(second)}, 1000)

    if (second === 0) {
        clearInterval(timer)
        timer = null
    } 
    
})