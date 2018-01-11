function setPlaybackSpeed(speed){
	chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    	var activeTab = tabs[0];
    	chrome.tabs.sendMessage(activeTab.id, {action: "setPlaybackSpeed", "speed": speed});
	});
}

function getPlaybackSpeed(){
	chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    	var activeTab = tabs[0];
    	chrome.tabs.sendMessage(activeTab.id, {action: "getPlaybackSpeed"});
	});
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    	if(sender.tab){
        	if( request.action == "returnPlaybackSpeed" ) {
        		document.getElementById('text_playbackspeed').value = request.speed;
        	}
    	}
    }
);

document.getElementById('btn_updateplaybackspeed_minus').addEventListener('click', function(event) {
    var num = parseFloat(document.getElementById('text_playbackspeed').value)-1;
    document.getElementById('text_playbackspeed').value = num;
});

document.getElementById('btn_updateplaybackspeed_add').addEventListener('click', function(event) {
    var num = parseFloat(document.getElementById('text_playbackspeed').value)+1;
    document.getElementById('text_playbackspeed').value = num;
});

document.getElementById('btn_updateplaybackspeed').addEventListener('click', function(event) {
	setPlaybackSpeed(document.getElementById('text_playbackspeed').value);
});


getPlaybackSpeed();
