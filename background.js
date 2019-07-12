chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id,{greeting: "hello"}, function(response) {
          
          console.log(response.farewell);
        });
      });
    }
  })

var menuItem = {
  "id": "addkeywords",
  "title": "Add Keyword",
  "contexts": ["selection"]
};
  
chrome.contextMenus.create(menuItem);
  
chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "addkeywords" && clickData.selectionText){    
                  
      chrome.storage.sync.get(['words'], function(array){
        var newArray= [];
        if (array.words){
          newArray = newArray.concat(array.words);
        }
  
        newArray.push(clickData.selectionText);
        chrome.storage.sync.set({'words': newArray}, function(){               
          
          var notifOptions = {
              type: "basic",
              iconUrl: "hello_extensions.png",
              title: "Keyword Added!",
              message: "The selected text was added to the keyword list."
            };
          chrome.notifications.create('limitNotif', notifOptions);
  
          $("#show_input").text(newArray);
          });
      });
          
    };
});
