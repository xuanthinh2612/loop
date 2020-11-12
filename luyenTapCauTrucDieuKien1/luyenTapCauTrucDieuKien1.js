function tinhtiendien7() {
    let tiendien = +document.getElementById('tinhtiendien').value;
    alert('Tiền điện là: '+tiendien*4000)
}
function bai66dsbh() {
    let dsbh = +document.getElementById('bai6dsbh').value;
    dsbh < 50 ? alert('hoa hồng = 0') : dsbh<70?alert('hoa hồng = 5%'):dsbh<100?alert('hoa hồng = 7%'):alert('hoa hồng = 10%');
}
function bai5diemthi() {
    let diem1 = +document.getElementById('diem1').value;
    let diem2 = +document.getElementById('diem2').value;
    let diem3 = +document.getElementById('diem3').value;
    let tb=(diem1+diem2+diem3)/3;
    tb<4?alert('học lực yếu'):tb<6.5?alert('học lực trung bình'):tb<8?alert('học lực khá'):alert('học lực giỏi');
}
function bai4timmax() {
    let bai4so1 = +document.getElementById('bai4so1').value;
    let bai4so2 = +document.getElementById('bai4so2').value;
    let bai4so3 = +document.getElementById('bai4so3').value;
    let max = bai4so1;
    max<bai4so2?max=bai4so2:max=max;
    max<bai4so3?max=bai4so3:max=max
    alert('Số lớn nhất là: ' + max);
}
function kiemtrasonguyen() {
    let songuyen = document.getElementById('bai3nhapsonguyen').value;
    songuyen > 0 ? alert('Số vừa nhập là số dương') : songuyen < 0 ? alert('Số vừa nhập là số âm') : alert('Bạn vừa nhập số 0');
}
function baisotuoi() {
    let sotuoi = document.getElementById('bai2sotuoi').value;
    sotuoi >= 16 ? alert('Đủ tuổi vào lớp 10') : alert('không đủ tuổi');
}
function bai1kiemtra() {
    let soa = document.getElementById('bai1soa').value;
    let sob = document.getElementById('bai1sob').value;
    soa % sob == 0 ? alert('a chia hết cho b') : alert('a không chia hết cho b');
}