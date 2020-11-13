function bai1doinhietdo() {
    let doc = +document.getElementById('bai1').value;
    let dof = (doc * 9 / 5) + 32;
    alert('Độ F là: ' + dof);
}

function bai2doidodai() {
    let met = +document.getElementById('bai2').value;
    let fit = (met * 3.2808)
    alert('Độ dài tính bằng Fit là: ' + fit);
}

function bai3dthv() {
    let a = +document.getElementById('bai3').value;
    let area = (a * a)
    alert('Diện tích hình vuông là: ' + area);
}

function bai42tinhdthcn() {
    let bai41 = +document.getElementById('bai41').value;
    let bai42 = +document.getElementById('bai42').value;
    let dthcn = bai41 * bai42;
    alert('Diện tích hình chữ nhật là: ' + dthcn);
}

function bai52tinhdthtg() {
    let bai51 = +document.getElementById('bai51').value;
    let bai52 = +document.getElementById('bai52').value;
    let dthtg = bai51 * bai52 / 2;
    alert('Diện tích hình tam giác là: ' + dthtg);
}

function bai62tinhptbn() {
    let bai61 = +document.getElementById('bai61').value;
    let bai62 = +document.getElementById('bai62').value;
    let nghiem = -bai62 / bai61;
    alert('Nghiệm của phương trình là: ' + nghiem);
}

function bai72tinhptbh() {
    let bai71a = +document.getElementById('bai71').value;
    let bai72b = +document.getElementById('bai72').value;
    let bai73c = +document.getElementById('bai73').value;
    let delta = (bai72b * bai72b - 4 * bai71a * bai73c)
    if (bai71a == 0) {
        if (bai72b == 0) {
            if (bai73c == 0) {
                alert('PT Vô Số Nghiệm !')
            } else {
                alert('PT VÔ NGHIỆM!!!')
            }
        } else {
            alert('Phuong trinh co 1 nghiem -b/a')
        }
    } else {
        alert('Phương trình có 2 nghiệm phân biệt')
    }
}

function bai8kttuoi() {
    let tuoi = +document.getElementById('bai8').value;
    tuoi <= 120
    &&
    tuoi > 0 ? alert('Bạn đã nhập đúng tuổi') : alert('Bạn nhập sai tuổi');
}

function bai9kthinhtamgiac() {
    let bai91 = +document.getElementById('bai91').value;
    let bai92 = +document.getElementById('bai92').value;
    let bai93 = +document.getElementById('bai93').value;
    bai91 > 0 && bai92 > 0 && bai93 > 0 &&
    (bai91 + bai92) > bai93 &&
    (bai93 + bai92) > bai91 &&
    (bai91 + bai93) > bai92 ? alert('là kích thước 3 cạnh của hình tam giác') : alert('Không phải kích thước của hình tam giác');
}

function bai10tinhtiendien() {
    let sodien = +document.getElementById('bai10').value;
    let tiendien = sodien * 4
    alert('Tiền điện là: ' + tiendien);
}

function bai11tinhthuetncn() {
    let tienluong = +document.getElementById('bai11').value;
    tienluong < 11000000 ? alert('Bạn không phải đóng thuế') : alert('Tiền thuế của bạn là (10%): ' + tienluong * 0.1);
}

function bai12tinhlsnh() {
    let tienvay = +document.getElementById('bai121').value;
    let thangvay = +document.getElementById('bai122').value;
    let i = 0;
    let tienlai=0;
    for (i = 0; i < thangvay; i++) {
        tienlai=tienvay*0.01
        tienvay=tienlai+tienvay;
    }
    alert(tienlai);
}


