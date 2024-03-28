window.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft"){moveleft()};
    if(event.key==="ArrowRight"){moveright()}
});

function moveleft() {
    let left = parseInt(window.getComputedStyle(fox).getPropertyValue("Left"));
    left -= 10;
    fox.style.left = left + "px"
}
function moveright() {
    let left = parseInt(window.getComputedStyle(fox).getPropertyValue("Left"));
    left += 10;
    fox.style.left = left + "px"
}