Vue.component("navbar-template", {
    template: `<div><nav class="navbar navbar-expand-lg navbar-light navbar-bg">
    <a class="navbar-brand" href="./index.html">
        <img src="../GlobalResource/img/logo.jpg" width="45" height="60" class="d-inline-block align-center margin-length" alt="missing">
        <span class="tabbar-font">三零三所</span>
      </a>
    <div class="collapse navbar-collapse navbar-content-margin" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="./index.html">主页</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="./personList.html">关于我们</a>
            </li>
            <div class="login-status">
            <a v-if="!login" href="./login.html"><button  class="navbar-login btn btn-primary">登录</button></a>
            
            <div v-else>
            <a :href="urlBase" class="navbar-hint">
            <img class="navbar-userphoto" :src="photoPath" alt="missing">
            <span>{{userName}}</span>
            </a>
            </div>
            </div>
            
        </ul>
    </div>
</nav>
<img src="../GlobalResource/img/barbk.jpg" class="tabbar-img"></div>`,
    props: ["login", "photoPath", "userName"],
    data: () => {
        return {
            urlBase: "./manage.html"
        }
    },
},

);

var navbar = new Vue({
    el: "#navbar",
    data: {
        login: false,
        photoPath: "",
        userName: "",
    }
})

function navbarLoad() {
    var tokenName = window.localStorage["tokenName"];
    if (tokenName == undefined || tokenName == "") {
        navbar.login = false;
    } else {
        var p = getRequest("http://127.0.0.1:3036/authority/user/getLoginUser", window.localStorage["tokenName"], window.localStorage["tokenValue"]);
        p.then(text => {
            console.log("123");
            if (text != "" && text != undefined) {
                let user = JSON.parse(text);
                navbar.photoPath = user.photoPath;
                navbar.userName = user.userName;
                navbar.id = user.userId;
                navbar.login = true;
            }
        });
    }
}
navbarLoad();