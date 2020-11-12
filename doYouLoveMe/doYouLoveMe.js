function mouseover() {
    let a = document.getElementById('no');
    let b = Math.round(Math.random()*600);
    let c = Math.round(Math.random()*600);
    a.style.left= c + 'px';
    a.style.top= b + 'px';
window.onload=mouseover();
}