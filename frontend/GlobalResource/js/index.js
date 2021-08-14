Vue.component("navbar", {
    template: `<div><nav class="navbar navbar-expand-lg navbar-light navbar-bg">
    <a class="navbar-brand" href="#">
        <img src="../GlobalResource/img/logo.jpg" width="45" height="60" class="d-inline-block align-center margin-length" alt="missing">
        <span class="tabbar-font">三零三所</span>
      </a>
    <div class="collapse navbar-collapse navbar-content-margin" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">主页</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="./personList.html">关于我们</a>
            </li>
        </ul>
    </div>
</nav>
<img src="../GlobalResource/img/barbk.jpg" class="tabbar-img"></div>`,
});

var navbar = new Vue({
    el:"navbar"
})