function check () {
    let month=+document.getElementById('month').value;
    let output=document.getElementById('output');
    // alert('ok')
    switch (month) {
        case 1:
            output.innerHTML="Tháng 1 có 31 ngày";
            break;
        case 2:
            output.innerHTML="Tháng 2 có 28 hoặc 28 ngày";
            break;
        case 3:
            output.innerHTML="Tháng 3 có 31 ngày";
            break;
        case 4:
            output.innerHTML="Tháng 4 có 30 ngày";
            break;
        case 5:
            output.innerHTML="Tháng 5 có 31 ngày";
            break;
        case 6:
            output.innerHTML="Tháng 6 có 30 ngày";
            break;
        case 7:
            output.innerHTML="Tháng 7 có 31 ngày";
            break;
        case 8:
            output.innerHTML="Tháng 8 có 31 ngày";
            break;
        case 9:
            output.innerHTML="Tháng 9 có 30 ngày";
            break;
        case 10:
            output.innerHTML="Tháng 10 có 31 ngày";
            break;
        case 11:
            output.innerHTML="Tháng 11 có 30 ngày";
            break;
        case 12:
            output.innerHTML="Tháng 12 có 31 ngày";
            break;
        default:
            alert:('Nhập lại tháng');
    }
}