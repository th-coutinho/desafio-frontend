const ajaxRequest = (url, callback, callbackParam = 'empty' ) => {
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            let response = JSON.parse(xhttp.responseText);
            callback(response, callbackParam);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    
}

export { ajaxRequest }