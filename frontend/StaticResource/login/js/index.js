var login = new Vue({
    el: "#login",
    data: {
        error: false,
        errorValue: ""
    },
    methods: {
        confirm: confirm,
    }
});

var confirm = () => {
    let id = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let p = request("127.0.0.1:3036/user/login?id=" + id + "&password=" + password);
    p.then((text) => {
        if (text == "" || text == undefined) {
            login.error = true;
            login.errorValue = "用户名或密码不正确";
        } else {
            try {
                let result = JSON.parse(text);
                window.localStorage["tokenName"] = result.tokenName;
                window.localStorage["tokenValue"] = result.tokenValue;
                window.location.href = "./index.html";
            } catch (error) {
                login.error = true;
                login.errorValue = "未知错误，请联系管理员";
            }
        }
    });
}
