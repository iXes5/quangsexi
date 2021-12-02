function send() {
    var arr = document.getElementsByTagName('input');
    var name =  arr[0].value;
    var check1 = arr[3].checked;
    var check2 = arr[4].checked;
    var check3 = arr[5].checked;
    var check4 = arr[6].checked;
    var gender = "";
    var favorite = "";
    if (arr[1].checked) {
        gender = arr[1].value;
    }else {
        gender = arr[2].value;
    }
    for(var i=3; i<=6; i++) {
        if (arr[i].checked) {
            favorite = favorite + arr[i].value + " ";
        }
    }
    if (name == "") {
        alert('Hãy điền tên của bạn!');
        return;
    }
    if (check1||check2||check3||check4) {

    }else {
        alert('Bạn phải mua hàng chứ:v');
        return;
    }
    var choice =  confirm("Đã xác nhận thông tin của bạn\n"+"Họ tên: "+name+"\n"+"Giới tính: "+gender+"\n"+"Đã mua: "+favorite);
    if(choice == 1){
        alert('Thông tin đã được gửi');
    }
}

function resetForm(){
    document.getElementsByTagName('form')[0].reset();
}
