$(function(){

    chrome.storage.sync.get(['words'],function(array){
        $('#show_input').text(array.words);
    });

    $('#add_input').click(function(){
        chrome.storage.sync.get(['words'],function(array){
            var newArray= [];
            if (array.words){
                newArray.push(array.words);
            }

            var newWord = $('#text_input').val();
            if (newWord){
                newArray.push(newWord);
            }

            chrome.storage.sync.set({'words': newArray}, function(){               
            });
            $('#show_input').text(newArray);
            $('#text_input').val('');

           

        });
    });

    $("#clear_input").click(function(){
        newArray = null;
        chrome.storage.sync.set({'words': newArray}, function(){
            var notifOptions = {
                    type: "basic",
                    iconUrl: "hello_extensions.png",
                    title: "Words reset!",
                    message: "The keyword list has been reset."
            };
            chrome.notifications.create('limitNotif', notifOptions);
             
        });
        $('#show_input').text(newArray);;      
    });

    $("#addMovie").click(function(){
        var selectedMovie = $("#movieList").children("option:selected").attr('id');
        
        if(selectedMovie != 'a')
        {

            var addKeyword=[];
            switch(selectedMovie){
                case "b":
                    addKeyword = ["Rock Hammer", "Red", "escapes", "hole", "mexico", "arrested"];
                    break;
                case "c":
                    addKeyword = ["andrew", "mental", "teddy", "edward"];
                    break;
                case "d":
                    addKeyword = ["split", "insomnia"];
                    break;
                case "e":
                    addKeyword = ["twin", "dies", "tesla"];
                    break;
            };

            chrome.storage.sync.get(['words'],function(array){
                var newArray=[];
                if(search(array.words, addKeyword))
                {
                    var notifOptions = {
                        type: "basic",
                        iconUrl: "hello_extensions.png",
                        title: "Movie already added!",
                        message: "The movie keywords are already included in the list."
                    };
                    chrome.notifications.create('limitNotif', notifOptions);
                }
                else
                {    
                    if(array.words){
                    newArray= (array.words).concat(addKeyword);
                    };
                    chrome.storage.sync.set({'words': newArray}, function(){               
                        $('#show_input').text(newArray);
                    });
                };

                
            });
        };
    });
   
    function search(arr1, arr2){
        var there=0;
        for(var i=0; i < arr1.length; i++){
            if(arr1[i] == arr2[0]){
                there = 1;
            };
            for(var j=0; j< arr2.length; j++){
                if( arr1[i+j] != arr2[j])
                {
                    there=0;
                };
            };
            if(there == 1){break;};
            
        };
        return there;
    };

});