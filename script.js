
let x_vel = 0

window.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft"){moveleft()};
    if(event.key==="ArrowRight"){moveright()}
});

function moveleft() {
    x_vel -= 2
}
function moveright() {
    x_vel += 2
}

while (true) {
x_vel = x_vel * 0.8;
let left = parseInt(window.getComputedStyle(fox).getPropertyValue("Left"));
    fox.style.left += x_vel + "px"    
}
