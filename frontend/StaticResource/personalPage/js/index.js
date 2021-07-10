var personalCard = new Vue({
    el: "#personalCard",
    data: {
        name: "lxc",
        introduction: "",
        photoPath: "../StaticResource/personalPage/img/photo.jpg",
        date:(new Date()).toLocaleDateString()
    }
})

personalCard.introduction = "躺平菜狗";