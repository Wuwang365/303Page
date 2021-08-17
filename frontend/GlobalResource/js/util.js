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