var load = () => {
    let tokenName = window.localStorage["tokenName"];
    let tokenValue = window.localStorage["tokenValue"];
    let p = getRequest("http://127.0.0.1:3036/authority/manage/getInformation", tokenName, tokenValue);
    p.then((text) => {
        if (text == "not login") {
            window.location.href = "./login.html";
        }
        if (text != "" && text != undefined) {
            try {
                let result = JSON.parse(text);
                information.photoPath = result.photoPath;
                information.name = result.userName;
                information.introduction = result.information;
                information.direction = result.direction;
                information.achievement = result.achievement;
                information.education = result.education;
                document.getElementById("introduction").click();
            } catch (error) {
                alert("error");
            }
        }
    });

    let re = getRequest("http://127.0.0.1:3036/authority/submitManage/getSubmitInfo", tokenName, tokenValue);
    re.then((text) => {
        if (text == "not login") {
            window.location.href = "./login.html";
        }
        if (text != "" && text != undefined) {
            try {
                let result = JSON.parse(text);
                information.uukey = result.UUKey;
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


/** ??????textare????????? */
var area = document.getElementById("input-area");

/** ?????????????????? */
document.getElementById("introduction").onclick = () => {
    information.report = false;
    area.value = information.introduction.replaceAll("\\n", "\n");
}

/** ???????????????????????? */
document.getElementById("achievement").onclick = () => {
    information.report = false;
    area.value = information.achievement.replaceAll("\\n", "\n");
    information.location = "achievement";
}

/** ???????????????????????? */
document.getElementById("education").onclick = () => {
    information.report = false;
    area.value = information.education.replaceAll("\\n", "\n");
}

/** ???????????????????????? */
document.getElementById("direction").onclick = () => {
    information.report = false;
    area.value = information.direction.replaceAll("\\n", "\n");
    information.location = "direction";
}

/** ???????????????????????? */
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

/** ?????????????????? */
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

/** ???????????????????????? */
document.getElementById("submitReport").onclick = () => {
    var uukey = document.getElementById("uukey").value;
    var eai_sess = document.getElementById("eai_sess").value;
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
document.getElementById("signout").onclick = () => {
    window.localStorage["tokenName"] = "";
    window.localStorage["tokenValue"] = "";
    window.location.href = "./index.html";
}
load();