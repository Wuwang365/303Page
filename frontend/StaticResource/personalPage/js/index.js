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
        direction: "",
        education: "",
        achievement: ""
    }
})

document.getElementById("direction").onclick = () => {
    personDetail.detail = personDetail.direction.split("\\n");
}
document.getElementById("education").onclick = () => {
    personDetail.detail = personDetail.education.split("\\n");
}
document.getElementById("achievement").onclick = () => {
    personDetail.detail = personDetail.achievement.split("\\n");
}

var load = function () {
    if (!getQueryVariable("id")) {
        getPersonalInfo("1111111111")
    } else {
        let p = getRequest("http://127.0.0.1:3036/ordinary/information/getPersonal?userId="+getQueryVariable("id"));
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