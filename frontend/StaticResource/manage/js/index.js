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
        education: "",
        location: ""
    }
});
var area = document.getElementById("input-area");
document.getElementById("introduction").onclick = () => {
    area.value = information.introduction.replaceAll("\\n", "\n");
    information.location = "introduction";
}
document.getElementById("achievement").onclick = () => {
    area.value = information.achievement.replaceAll("\\n", "\n");
    information.location = "achievement";
}
document.getElementById("education").onclick = () => {
    area.value = information.education.replaceAll("\\n", "\n");
    information.location = "education";
}
document.getElementById("direction").onclick = () => {
    area.value = information.direction.replaceAll("\\n", "\n");
    information.location = "direction";
}
document.getElementById("update").onclick = () => {
    switch (information.location) {
        case "introduction":
            information.introduction = area.value;
            break;
        case "achievement":
            information.achievement = area.value;
            break;
        case "education":
            information.education = area.value;
            break;
        case "direction":
            information.direction = area.value;
            break;
        default:
            break;
    }
    var json = {
        "information": information.introduction.replaceAll("\n", "\\n"),
        "achievement": information.achievement.replaceAll("\n", "\\n"),
        "education": information.education.replaceAll("\n", "\\n"),
        "direction": information.direction.replaceAll("\n", "\\n")
    }
    var body = JSON.stringify(json);
    var p = postRequest("http://127.0.0.1:3036/authority/manage/updateInformation",
        body, window.localStorage["tokenName"], window.localStorage["tokenValue"]);
    p.then((text)=>{
        alert(text);
    })
}
load();