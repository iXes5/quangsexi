function send() {
    var arr = document.getElementsByTagName('input');
    var name =  arr[0].value;
    var age = arr[1].value;
    var email = arr[2].value;
    var check1 = arr[5].checked;
    var check2 = arr[10].checked;
    var check3 = arr[15].checked;
    var check4 = arr[20].checked;
    var gender = "";
    var favorite = "";
    var arrString = email.split("");

    if (arr[1].checked) {
        gender = arr[3].value;
    }else {
        gender = arr[4].value;
    }

    for(var i=5; i<=20; i=i+5) {
        if (arr[i].checked) {
            favorite = favorite + arr[i].value + " ";
        }
    }

    if (name == "" || email == "" || age == "") {
        alert('Hãy điền đầy đủ thông tin!');
        return;
    }

    if (isNaN(age)) {
        alert("Tuổi phải là một con số!");
        return;
    }else if (age<=0) {
        alert("Tuổi phải là số dương!");
        return;
    }

    if (arrString.includes("@", ".") == false) {
        alert("Đây không phải là một địa chỉ email!");
        return;    
    }

    if (check1||check2||check3||check4) {

    }else {
        alert('Bạn phải mua hàng chứ:v');
        return;
    }

    var choice =  confirm("Đã xác nhận thông tin của bạn\n"+"Họ tên: "+name+"\n"+"Tuổi: "+age+"\n"+"Địa chỉ email: "+email+"\n"+"Giới tính: "+gender+"\n"+"Đã mua: "+favorite);
    if(choice == 1){
        alert('Thông tin đã được gửi');
    }
}

function resetForm(){
    document.getElementsByTagName('form')[0].reset();
}