let img;

function int() {
    img = document.getElementById('ball');
    img.style.position = "relative";
    img.style.left = 0 + 'px'
}



function moveleft() {
    img.style.left = parseInt(img.style.left) - 10 + 'px';
}

function moveright() {
    img.style.left = parseInt(img.style.left) + 10 + 'px';
}
window.onload = int;