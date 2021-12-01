function changeBackground(color) {
    document.body.style.background = color
}
window.addEventListener("load",function() {changeBackground('lightgreen')})

function send() {
    var arr = document.getElementsByTagName('input');
    var name =  arr[0].value;
    var check1 = arr[3].value;
    var check2 = arr[4].value;
    var check3 = arr[5].value;
    var check4 = arr[6].value;
    if (name == "") {
        alert('Hãy điền tên của bạn!');
        return;
    }
    if (check1||check2||check3||check4) {

    }
    else {
        alert('Bạn phải mua hàng chứ:v');
        return;
    }
}
