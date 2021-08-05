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

var getPersonalInfo = new function (userId) {
    var url = "120.55.43.184:8080/information/getPersonal?userId="+userId;
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
    const baseData = { name: "李晓晨", introduction: "123", photoPath: "../StaticResource/personalPage/img/photo.jpg" }
    
}

load();
