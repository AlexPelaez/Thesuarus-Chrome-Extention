
// create a chrome contextMenu that will appear when text is selected
// @TO-DO: Preform regex string matching for a more refined selection
chrome.contextMenus.create({
    id: "synonynms",
    title: "Synonynms of: %s",
    contexts: ["selection"]
    
});

// On clicked event listener for the contextMenu with the id:synonynms
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "synonynms") {
        console.log("Word selected is: "+info.selectionText);
    }
});