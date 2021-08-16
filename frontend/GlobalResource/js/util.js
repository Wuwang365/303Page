var request = (url,headerKey,headerValue)=>{
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        if(headerKey!=""&&headerKey!=undefined){
            xhr.setRequestHeader(headerKey,headerValue);
        }
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
            }
        }
    });
}