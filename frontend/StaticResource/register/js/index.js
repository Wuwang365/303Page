var register = new Vue({
    el: "#register",
    data: {
        error: false,
        errorValue: ""
    }
});

document.getElementById("confirm").onclick = () => {
    let userId = document.getElementById("userId").value;
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let body = JSON.stringify({"userId":userId,"userName":userName,"password":password});
    let p = postRequest(request_url_base+"/ordinary/register",body);
    console.log(request_url_base+"/ordinary/register");
    p.then((text)=>{
        if(text=="success"){
            alert("注册成功！");
            window.location.href = "./login.html";
        }else{
            register.errorValue = text;
            register.error = true;
        }
    })
}