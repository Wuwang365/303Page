var getRequest = (url, headerKey = "", headerValue = "") => {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        if (headerKey != "" && headerKey != undefined) {
            xhr.setRequestHeader(headerKey, headerValue);
        }
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
            }
        }
    });
}

var postRequest = (url, body, headerKey = "", headerValue = "") => {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        if (headerKey != "" && headerKey != undefined) {
            xhr.setRequestHeader(headerKey, headerValue);
        }
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(body);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
            }
        }
    })
}

function imgOnerror(img) {
    img.src = "../GlobalResource/img/default.jpg";
    img.οnerrοr = null;
}

const production_url = "http://120.55.43.184:3037";
const develop_url = "http://127.0.0.1:3036";
const request_url_base = develop_url;