
let mousex
let mousey

window.addEventListener("mousemove", event => {
    mousex = event.clientX
    mousey = event.clientY
    fox.style.left = (mousex -= 114) + "px"
    fox.style.top = (mousey -= 114) + "px"
})