var request = (url,headerKey,headerValue)=>{
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        if(header!=""&&header!=undefined){
            xhr.setRequestHeader(headerKey,headerValue);
        }
        xhr.open("GET", url, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
            }
        }
    });
}