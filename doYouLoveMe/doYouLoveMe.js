function mouseover() {
    let a = document.getElementById('no');
    let b = Math.round(Math.random()*window.innerWidth);
    let c = Math.round(Math.random()*window.innerHeight);
    a.style.left= a + 'px';
    a.style.top= b + 'px';
window.onload=mouseover();
}