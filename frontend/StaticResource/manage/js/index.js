var load = () => {
    let tokenName = window.localStorage["tokenName"];
    let tokenValue = window.localStorage["tokenValue"];
    let p = getRequest("http://127.0.0.1:3036/authority/manage/getInformation", tokenName, tokenValue);
    p.then((text) => {
        if (text != "" && text != undefined) {
            try {
                let result = JSON.parse(text);
                information.photoPath = result.photoPath;
                information.name = result.userName;
                information.introduction = result.information;
                information.direction = result.direction;
                information.achievement = result.achievement;
                information.education = result.education;
            } catch (error) {
                alert("error");
            }
        }
    });
}

var information = new Vue({
    el: "#information",
    data: {
        photoPath: "",
        name: "",
        introduction: "",
        direction: "",
        achievement: "",
        education: ""
    }
});
var area = document.getElementById("input-area");
document.getElementById("introduction").onclick = () => {
    area.value = information.introduction.replaceAll("\\n", "\n");
}
document.getElementById("achievement").onclick = () => {
    area.value = information.achievement.replaceAll("\\n", "\n");
}
document.getElementById("education").onclick = () => {
    area.value = information.education.replaceAll("\\n", "\n");
}
document.getElementById("direction").onclick = () => {
    area.value = information.direction.replaceAll("\\n", "\n");
}
load();