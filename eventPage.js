
// create a chrome contextMenu that will appear when text is selected
// @TO-DO: Preform regex string matching for a more refined selection
chrome.contextMenus.create({
    id: "syn",
    title: "Words that mean: %s",
    contexts: ["selection"]
    
});

chrome.contextMenus.create({
    id: "sounds",
    title: "Words that sound like: %s",
    contexts: ["selection"]

});

chrome.contextMenus.create({
    id: "spelled",
    title: "Words spelled like: %s",
    contexts: ["selection"]

});

// On clicked event listener for the contextMenu with the id:synonynms
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    var ml = "ml=";
    var sl = "sl=";
    var sp = "sp=";
    if(info.menuItemId != null) {
        var xhttp;
        var str = info.selectionText;
        var array = str.split(" ");
        var host = "http://api.datamuse.com/words?";
        if (info.menuItemId == "syn") {
            var query = ml.concat(str);
            var url = host.concat(query);
            httpGet(url, syn, xhttp);
        } else if (info.menuItemId == "sounds") {
            var query = sl.concat(str);
            var url = host.concat(query);
            httpGet(url, syn, xhttp);
        } else if (info.menuItemId == "spelled") {
            var query = sp.concat(str);
            var url = host.concat(query);
            httpGet(url, syn, xhttp);
        }
    }
});

function httpGet(url, cFunction, xhttp) {

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cFunction(this);
        }
    };
    xhttp.open("GET", url, true);
    //xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send();
}


function syn(xhttp) {
    var response = JSON.parse(xhttp.responseText);
    chrome.extension.getURL("popup.html");
    for (i = 0; i < 9; i++) {
        try {
            if(response[i].word!=null){
                console.log(response[i].word);
            }
        } catch(error) {

        }
    }
   
}
function sounds(xhttp) {

}
function spelled(xhttp) {

}
