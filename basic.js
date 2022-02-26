//Set the animation for the image when enter the mouse
window.addEventListener("load", function() {
    const table = [...document.querySelectorAll(".image")];
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
    const menu = document.querySelector(".image-out");
    menu.addEventListener("mouseleave", function() {
        line.style.left = 0;
        line.style.top = 0;
        line.style.width = 0;
        line.style.height = 0;
    })
});

//Send the information
function send() {
    var arr = document.getElementsByTagName("input");
    var name =  arr[0].value;
    var email = arr[1].value;
    var check = 0;
    var check1 = arr[20].checked;
    var check2 = arr[21].checked;
    var check3 = arr[22].checked;
    var gender = "";
    var test = "";
    var arrString = email.split("");

    //Cost array
    var arrCost = [];

    //Use jQuery to find the prize
    $("#cost tr").each(function() {
        var prize = $(this).find("td").eq(1).html();
        arrCost.push(prize);
    });
    var cost = 0;
    var product = "";
    var j = 0;

    //Sex
    if (arr[2].checked) {
        gender = arr[2].value;
    }else {
        gender = arr[3].value;
    }

    //Products were bought
    for (var i=20; i<=22; i=i+1) {
        if (arr[i].checked) {
            test = test + arr[i].value + " ";
        }
    }

    //Fill the gap
    if (name == "" || email == "") {
        alert('Hãy điền đầy đủ thông tin!');
        return;
    }

    //Email checked
    if (arrString.includes("@") == false || arrString.includes(".") == false) {
        alert("Đây không phải là một địa chỉ email!");
        return;    
    }

    //Buy checked
    for (var i=4; i<=19; i=i+1) {
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

    //Test checked
    if (check1||check2||check3) {

    }else {
        alert("Hãy chọn một sản phẩm dùng thử!");
        return;
    }

    //Bill, i and j go together, i for number và j for prize
    for (var i=4; i<=19; i=i+1) {
        if (arr[i].value != "") {
            cost = cost + (arr[i].value * arrCost[j])
        };
        j = j + 1;
    }

    //Age allow
    var age = prompt("How old are you?");

    //Age checked 
    if (isNaN(age)) {
        alert("Tuổi phải là một con số!");
        return;
    }else if (age <= 0) {
        alert("Tuổi phải là số dương!");
        return;
    }else if (age <= 10) {
        alert("You are not allowed to use this service, just support 10 and up");
        return;
    }

    //Give the time
    var today = new Date();
    var clock = today.getHours()+"/"+today.getMinutes()+"/"+today.getSeconds()+"-"+today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();

    //Confirm
    var choice1 = confirm("Đã xác nhận thông tin của bạn\n"+"Họ tên: "+name+"\n"+"Tuổi: "+age+"\n"+"Giới tính: "+gender+"\n"+"Địa chỉ email: "+email);
    var choice2 = confirm("Đơn mua hàng: \n"+product+"Tổng cộng: "+cost+"vnđ"+"\n"+"Sản phẩm dùng thử: "+test+"\n"+"Hãy dùng thử và đóng góp ý kiến cho chúng tôi nhé<3\n"+"("+clock+")");
    if (choice1 == 1) {
        alert('Thông tin đã được gửi');
    }
    document.getElementById("time").innerHTML = "Đơn giá: " + cost + "vnđ (" + clock + ")"
}

//Reset data
function resetForm(){
    document.getElementsByTagName("form")[0].reset();
}