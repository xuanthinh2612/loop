let nobita = document.getElementById('nobita')

function moveleft() {
    // nobita.style.left = parseInt(nobita.style.left) - 10 + 'px';
    if(parseInt(nobita.style.left)<0) { alert('Left limited')
        nobita.style.left=0+'px'}
    else {
        nobita.style.left = parseInt(nobita.style.left) - 10 + 'px';
    }
}

function moveright() {
    if(parseInt(nobita.style.left)>1200) { alert('right limited')
    nobita.style.left=1200+'px'}
    else {
    nobita.style.left = parseInt(nobita.style.left) + 10 + 'px';
    }
}

function moveup() {
    if (parseInt(nobita.style.top)<0) {
        alert('top limited');
        nobita.style.top=0+'px';
    }
    nobita.style.top = parseInt(nobita.style.top) - 10 + 'px';
}

function movedown() {
    if (parseInt(nobita.style.top)>600) {
        alert('Bottom limited');
        nobita.style.top=600+'px';
    }
    nobita.style.top = parseInt(nobita.style.top) + 10 + 'px';
}
function move(evt) {
    switch (evt.keyCode){
        case 37:
            moveleft();
            break;
        case 39:
            moveright();
            break;
        case 38:
            moveup();
            break;
        case 40:
            movedown();
            break;

    }
}
// function doready () {
    window.addEventListener("keydown", move)
// }
// window.onload=doready ();