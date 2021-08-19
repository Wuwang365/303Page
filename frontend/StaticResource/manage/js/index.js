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

    let re = getRequest("http://127.0.0.1:3036/authority/submitManage/getSubmitInfo", tokenName, tokenValue);
    re.then((text) => {
        if (text != "" && text != undefined) {
            try {
                let result = JSON.parse(text);
                information.uukey = result.uukey;
                information.eai_sess = result.eai_sess;
                information.location = result.location;
                information.email = result.email;
                information.atSchool = result.at_school;
                information.flag = result.flag;

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
        location: "",
        uukey: "",
        eai_sess: "",
        location: "",
        email: "",
        atSchool: "",
        flag: "",
        report: false
    }
});


/** 获取textare输入框 */
var area = document.getElementById("input-area");

/** 介绍菜单按钮 */
document.getElementById("introduction").onclick = () => {
    information.report = false;
    area.value = information.introduction.replaceAll("\\n", "\n");
}

/** 科研成果菜单按钮 */
document.getElementById("achievement").onclick = () => {
    information.report = false;
    area.value = information.achievement.replaceAll("\\n", "\n");
    information.location = "achievement";
}

/** 教育经历菜单按钮 */
document.getElementById("education").onclick = () => {
    information.report = false;
    area.value = information.education.replaceAll("\\n", "\n");
}

/** 研究方向菜单按钮 */
document.getElementById("direction").onclick = () => {
    information.report = false;
    area.value = information.direction.replaceAll("\\n", "\n");
    information.location = "direction";
}

/** 自动填报菜单按钮 */
document.getElementById("autoReport").onclick = () => {
    information.report = true;
    area.value = "";
    document.getElementById("uukey").value = information.uukey;
    document.getElementById("eai_sess").value = information.eai_sess;
    document.getElementById("location").value = information.location;
    document.getElementById("email").value = information.email;
    if (information.atSchool == "1")
        document.getElementById("atSchoolTrue").checked = true;
    else
        document.getElementById("atSchoolFalse").checked = true;
    if (information.flag == "true")
        document.getElementById("flagTrue").checked = true;
    else
        document.getElementById("flagFalse").checked = true;

    information.location = "autoReport";

}

/** 更新个人信息 */
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
    p.then((text) => {
        alert(text);
    })
}

/** 提交自动填报信息 */
document.getElementById("submitReport").onclick = () => {
    var uukey = document.getElementById("uukey").value;
    var eai_sess= document.getElementById("eai_sess").value;
    var location = document.getElementById("location").value;
    var email = document.getElementById("email").value;

    var atSchool;
    var atSchooleRadio = document.getElementsByName("atSchool");
    for (i = 0; i < atSchooleRadio.length; i++) {
        if (atSchooleRadio[i].checked) {
            atSchool = parseInt(atSchooleRadio[i].value);
        }
    }

    var flag;
    var flagRadio = document.getElementsByName("flag");
    for (i = 0; i < flagRadio.length; i++) {
        if (flagRadio[i].checked) {
            flag = (flagRadio[i].value === "true");
        }
    }

    var json = {
        "UUKey": uukey,
        "eai_sess": eai_sess,
        "location": location,
        "email": email,
        "at_school": atSchool,
        "flag": flag
    }
    var body = JSON.stringify(json);
    console.log(body)
    var p = postRequest("http://127.0.0.1:3036/authority/submitManage/updateSubmitInfo",

        body, window.localStorage["tokenName"], window.localStorage["tokenValue"]);
    p.then((text) => {
        alert(text);
    })

}

load();