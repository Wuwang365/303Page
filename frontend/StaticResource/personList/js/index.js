var userContent = new Vue({
    el: '#personContent',
    data: []
})
Vue.component("personCard", {
    template: `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a v-bind:href={{urlBase+id}} class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `,
    data: function () {
        return {
            urlBase: "./personalPage.html?id=",
        }
    },
    props: ["id"]
})

var request = () => {
    return new Promise((resolve, reject) => {
        var url = "http://127.0.0.1:3036/information/getUserList";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
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
        userContent.data = JSON.parse(text);
    });
}