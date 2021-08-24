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

var personDetail = new Vue({
    el: "#detailIntroduction",
    data: {
        detail: ["waiting to be displayed..."],
        direction: "test",
        education: "test",
        achievement: "test"
    }
})

document.getElementById("direction").onclick = () => {
    if(personDetail.direction!=null)
    personDetail.detail = personDetail.direction.split("\\n");
}
document.getElementById("education").onclick = () => {
    if(personDetail.education!=null)
    personDetail.detail = personDetail.education.split("\\n");
}
document.getElementById("achievement").onclick = () => {
    if(personDetail.achievement!=null)  
    personDetail.detail = personDetail.achievement.split("\\n");
}

var load = function () {
    if (!getQueryVariable("id")) {
        window.location.href = "./index.html";
    } else {
        let p = getRequest(request_url_base+"/ordinary/information/getPersonal?userId="+getQueryVariable("id"));
        p.then((text) => {
            var result = JSON.parse(text);
            personalCard.name = result.userName;
            personalCard.introduction = result.information;
            personalCard.photoPath = result.photoPath;
            personDetail.direction = result.direction;
            personDetail.education = result.education;
            personDetail.achievement = result.achievement;
            document.getElementById("direction").click();
        });
    }
}
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

load();
//TODO: need to descide if id is right