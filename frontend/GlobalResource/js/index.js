Vue.component("navbar-template", {
    template: `<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="./index.html">
                <img src="../GlobalResource/img/logo.jpg" width="45" height="60"
                    class="d-inline-block align-center margin-length" alt="missing">
              <span class="tabbar-font">三零三所</span>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent" style="margin-left:30px">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="./index.html">主页</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="./personList.html">关于我们</a>
                    </li>
                    <li class="nav-item active">
                    <a class="nav-link" href="./register.html">加入我们</a>
                    </li>
                    <div class="login-status">
                        <a v-if="!login" href="./login.html"><button
                                class="navbar-login btn btn-primary">登录</button></a>
                        <div v-else>
                            <a :href="urlBase" class="navbar-hint">
                                <img class="navbar-userphoto" :src="photoPath" alt="missing">
                                <span>{{userName}}</span>
                            </a>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
    <img src="../GlobalResource/img/barbk.jpg" class="tabbar-img">
</div>`,
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
        var p = getRequest(request_url_base + "/authority/user/getLoginUser", window.localStorage["tokenName"], window.localStorage["tokenValue"]);
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