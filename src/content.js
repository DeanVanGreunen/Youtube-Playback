chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    	if(!sender.tab){
    		if( request.action == "getPlaybackSpeed" ) {
   				chrome.runtime.sendMessage({action: "returnPlaybackSpeed", speed: document.getElementsByTagName("video")[0].playbackRate}, function(){});
			} else if( request.action == "setPlaybackSpeed" ) {
        		document.getElementsByTagName("video")[0].playbackRate = request.speed;
    	    }
	    }
	}
);