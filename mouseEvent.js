// let img = null;
//
// function int() {
//     img = document.getElementById('ball');
//     img.style.position = "relative";
//     img.style.left = '0px';
// }
//
// function moveright() {
//     img.style.left = parseInt(img.style.left) + 10 + 'px';
//
// }
// function moveleft() {
//     img.style.left=parseInt(img.style.left) - 10 +'px';
// }
//
// window.onload = int;

let img;

function int() {
    img = document.getElementById('ball');
    img.style.position = "relative";
    img.style.left = 0 + 'px'
}

window.onload = int;

function moveleft() {
    img.style.left = parseInt(img.style.left) - 10 + 'px';
}

function moveright() {
    img.style.left = parseInt(img.style.left) + 10 + 'px';
}