var userContent = new Vue({
    el: '#personContent',
    data: {
        users:[]
    }
})
Vue.component("person-card", {
    template: `
    <div class="card cardself" style="width: 18rem;">
  <img :src="photoPath" onerror="imgOnerror(this)" class="card-img-top person-img" alt="...">
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


var load = () => {
    let p = getRequest(request_url_base+"/ordinary/information/getUserList");
    p.then(text => {
        userContent.users = JSON.parse(text);
    });
}

load();