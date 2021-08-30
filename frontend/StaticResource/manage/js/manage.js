document.getElementById("camera").onclick = function () {
    document.getElementById('uploadBtn').click()
}
document.getElementById('uploadBtn').onclick = function () {
    document.getElementById('file').click()
    document.getElementById('file').value = '';
}

document.getElementById('file').onclick = function () {
    document.getElementById('file').value = '';
}
window.onload = function () {
    var image_file = document.getElementById("file");
    image_file.addEventListener('change', readFile, false);
}

// 小头像
document.getElementById("smallProfile").src = base64Img;


function readFile() {
    var file = this.files[0];

    var formData = new FormData();
    formData.append('file', file);
    var reads = new FileReader();
    reads.readAsDataURL(file);
    console.log(file)

    let img1 = document.createElement('img');

    reads.onload = function (e) {
        img1.src = this.result;
        // console.log(this.result)
        base64 = this.result;
        var image = new Image();
        image.src = this.result
        image.onload = function () {
            console.log(formData)

            var p = postRequest(request_url_base + "/authority/manage/changePersonImg",
                base64, window.localStorage["tokenName"], window.localStorage["tokenValue"]);
            p.then((text) => {
                // alert(text);
                getProfile()

            })

        };

    };

}


  