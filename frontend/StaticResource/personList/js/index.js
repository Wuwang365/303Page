var userContent = new Vue({
    el: '#personContent',
    data: {
        users:[]
    }
})
Vue.component("person-card", {
    template: `
    <div class="card cardself" style="width: 18rem;">
  <img :src="photoPath" class="card-img-top person-img" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{name}}</h5>
    <p class="card-text">{{information}}</p>
    <a v-bind:href="urlBase+id" class="btn btn-primary">了解更多</a>
  </div>
</div>
    `,
    data: function () {
        return {
            urlBase: "./personalPage.html?id=",
        }
    },
    props: ["id","name","photo-path","information"]
})

var request = () => {
    return new Promise((resolve, reject) => {
        var url = "http://127.0.0.1:3036/information/getUserList";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
            }
        }
    });
}

var load = () => {
    let p = request();
    p.then(text => {
        userContent.users = JSON.parse(text);
    });
}

load();