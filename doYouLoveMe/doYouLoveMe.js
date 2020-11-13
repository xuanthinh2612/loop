function mouseover() {
    let a = document.getElementById('no');
    let b = Math.round(Math.random()*550+100);
    let c = Math.round(Math.random()*550+100);
    a.style.left= c + 'px';
    a.style.top= b + 'px';
window.onload=mouseover();
}