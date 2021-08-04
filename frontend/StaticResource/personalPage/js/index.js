var personalCard = new Vue({
    el: "#personalCard",
    data: {
        name: "lxc",
        introduction: "",
        photoPath: "",
        date: (new Date()).toLocaleDateString(),
        option: "",

    }
});


var load = new function (url) {
    var urlObj = new URL(url);
    urlObj.
    const baseData = { name: "李晓晨", introduction: "123", photoPath: "../StaticResource/personalPage/img/photo.jpg" }
    personalCard.name = baseData.name;
    personalCard.introduction = baseData.introduction;
    personalCard.photoPath = baseData.photoPath;
}

var requestDetail = new function(url,userName) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4&&xhr.status===200){

        }
    }
}

load();
