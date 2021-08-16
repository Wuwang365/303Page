var load = () => {
    let tokenName = window.localStorage["tokenName"];
    let tokenValue = window.localStorage["tokenValue"];
    let p = getRequest("http://127.0.0.1:3036/authority/manage/getInformation",tokenName,tokenValue);
    p.then((text)=>{
        if(text!=""&&texxt!=undefined){
            try {
                let result = JSON.parse(text);
                information.photoPath = result.photoPath;
                information.name = result.userName;
                information.introduction = result.information.split("\\n");
                information.direction = result.direction.split("\\n");
                information.achievement = result.achievement.split("\\n");
                information.education = result.education.split("\\n");
            } catch (error) {
                
            }
        }
    });
}

var information = new Vue({
    el: "#information",
    data: {
        photoPath: "",
        name: "",
        introduction: [],
        direction: [],
        achievement: [],
        education: []
    }
});