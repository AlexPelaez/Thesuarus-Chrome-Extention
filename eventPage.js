
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
    if(info.menuItemId != null) {
        var xhttp;
        var str = info.selectionText;
        var array = str.split(" ");
        var host = "http://api.datamuse.com/words?";
        if (info.menuItemId == "syn") {

            var query = ml.concat(str);
            var url = host.concat(query);
            console.log(url);
            httpGet(url, syn, xhttp);
            console.log(xhttp.responseText);

        } else if (info.menuItemId == "sounds") {

        } else if (info.menuItemId == "spelled") {

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
    console.log(xhttp.responseText);
}
function sounds(xhttp) {

}
function spelled(xhttp) {

}
