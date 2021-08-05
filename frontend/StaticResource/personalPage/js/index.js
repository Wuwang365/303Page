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

var load = function(){
    getPersonalInfo("2018119085");
}

var getPersonalInfo = function (userId) {
    var url = "http://127.0.0.1:3036/information/getPersonal?userId="+userId;
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4&&xhr.status===200){
            var result = JSON.parse(xhr.responseText);
            personalCard.name = result.userName;
            personalCard.introduction = result.introduction;
            personalCard.photoPath = result.photoPath;
        }
    }
    
}

load();
