//Làm viền cho hình ảnh khi rê chuột
window.addEventListener("load", function() {
    const table = [...document.querySelectorAll(".images")];
    table.forEach(item => item.addEventListener("mouseenter", handleHoverLink));

    const line = document.createElement("div");
    line.className = "line-effect";
    document.body.appendChild(line);

    //Add a rect use left, top, width, height are taken from the "td" FTWH by enter mouse on it
    function handleHoverLink(event) {
        const {left, top, width, height} = event.target.getBoundingClientRect();

        line.style.left = `${left}px`;
        line.style.top = `${top}px`;
        line.style.width = `${width}px`;
        line.style.height = `${height}px`;
    }

    //Disapear rect when leave mouse
    const menu = document.querySelector(".imagesout");
    menu.addEventListener("mouseleave", function() {
        line.style.left = 0;
        line.style.top = 0;
        line.style.width = 0;
        line.style.height = 0;
    })
});

//Draw logo
/*const cvs = document.getElementById("drag");
const ctx = cvs.getContext("2d");
const logo = new Image();
logo.src = "images/logo.png";

function logo() {
ctx.fillRect(0, 0, cvs.width, cvs.height);
ctx.drawImage(logo, 0, 0, 244, 206, 0, 0, cvs.width, cvs.height);
}
logo()*/

//Gửi thông tin đi
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
    //Mảng giá thành
    var arrCost = [];
    //Dùng thư viện jQuery để gán giá tiền vào trong mảng
    $("#cost tr").each(function() {
        var prize = $(this).find("td").eq(1).html();
        arrCost.push(prize);
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

    //Tính bill, i và j sẽ chạy song song nhau, i cho số lượng và j cho giá thành
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