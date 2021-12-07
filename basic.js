function send() {
    var arr = document.getElementsByTagName("input");
    var name =  arr[0].value;
    var age = arr[1].value;
    var email = arr[2].value;
    var check = 0;
    var check1 = arr[21].checked;
    var check2 = arr[22].checked;
    var check3 = arr[23].checked;
    var gender = "";
    var test = "";
    var arrString = email.split("");
    var arrCost = [];
    //Dùng thư viện jQuery để gán giá tiền vào trong mảng
    $("#cost tr").each(function() {
        var cost1 = $(this).find("td").eq(2).html();
        var cost2 = $(this).find("td").eq(4).html();
        var cost3 = $(this).find("td").eq(6).html();
        var cost4 = $(this).find("td").eq(8).html();
        arrCost.push(cost1);
        arrCost.push(cost2);
        arrCost.push(cost3);
        arrCost.push(cost4);
    });
    var cost = 0;
    var product = "";
    var j = 0;
    //Giới tính
    if (arr[3].checked) {
        gender = arr[3].value;
    }else {
        gender = arr[4].value;
    }

    //Mặt hàng đã mua
    for (var i=21; i<=23; i=i+1) {
        if (arr[i].checked) {
            test = test + arr[i].value + " ";
        }
    }

    //Điển thông tin
    if (name == "" || email == "" || age == "") {
        alert('Hãy điền đầy đủ thông tin!');
        return;
    }

    //Kiểm tra tuổi 
    if (isNaN(age)) {
        alert("Tuổi phải là một con số!");
        return;
    }else if (age<=0) {
        alert("Tuổi phải là số dương!");
        return;
    }

    //Kiểm tra email
    if (arrString.includes("@") == false || arrString.includes(".") == false) {
        alert("Đây không phải là một địa chỉ email!");
        return;    
    }

    //Kiểm tra mua hàng
    for (var i=5; i<=20; i=i+1) {
        if (arr[i].value == "") {
            
        }else {
            check = check + 1;
            product = product + arr[i].name + ": " + arr[i].value + "\n";
        };
        if (arr[i].value == "") {
            
        }else if (isNaN(arr[i].value)) {
            alert("Đơn hàng "+arr[i].name+" phải là số!");
            return;
        }else if (arr[i].value <= 0) {
            alert("Đơn hàng phải là một số dương!");
            return;
        };
    }
    if (check == 0) {
        alert("Bạn phải mua hàng chứ:v");
        return;
    }

    //Kiểm tra dùng thử
    if (check1||check2||check3) {

    }else {
        alert("Hãy chọn một sản phẩm dùng thử!");
        return;
    }

    //Tính bill
    for (var i=5; i<=20; i=i+1) {
        if (arr[i].value != "") {
            cost = cost + (arr[i].value * arrCost[j])
        };
        j = j + 1;
    }

    //Lấy thời gian
    var today = new Date();
    var clock = today.getHours()+"/"+today.getMinutes()+"/"+today.getSeconds()+"-"+today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();

    //Báo cáo thông tin
    var choice1 = confirm("Đã xác nhận thông tin của bạn\n"+"Họ tên: "+name+"\n"+"Tuổi: "+age+"\n"+"Giới tính: "+gender+"\n"+"Địa chỉ email: "+email);
    var choice2 = confirm("Đơn mua hàng: \n"+product+"Tổng cộng: "+cost+"vnđ"+"\n"+"Sản phẩm dùng thử: "+test+"\n"+"Hãy dùng thử và đóng góp ý kiến cho chúng tôi nhé<3\n"+"("+clock+")");
    if (choice1 == 1) {
        alert('Thông tin đã được gửi');
    }
    document.getElementById("time").innerHTML = "Đơn giá: " + cost + "vnđ (" + clock + ")"
}

//Reset dữ liệu
function resetForm(){
    document.getElementsByTagName('form')[0].reset();
}