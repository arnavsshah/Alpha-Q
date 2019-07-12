chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting == "hello")
            {sendResponse({farewell: "Message received, sending confirmation"});
        get();

      };
      
    });

function get(){
    
    chrome.storage.sync.get(['words'],function(array){
        
        p = new RegExp(('\\b(' + array.words.join('|') + ')\\b'), "i");
        
        
        const kSets = [
          {selectors: 'p, span', color: '#000000'},
          {selectors: 'li, td', color: '#000000'},
          {selectors: 'h1, h2, h3, th', color: '#000000'}
        ];
        for (let set of kSets) {
          let elements = Array.from(document.querySelectorAll(set.selectors));
          for (let element of elements) {
            if (p.test(element.innerText)){
              element.style.backgroundColor = set.color;
              element.style.fontColor = set.color;
            };
          };
        };
    });

};