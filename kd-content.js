function find_video() {
    video_players = document.getElementsByClassName("vjs video-player-box");
    ret_url = "";
    found = false;
    if (video_players.length > 0) {
        video_player = video_players[0];
        url = video_player.currentSrc;

        console.log("URL: " + ret_url);
        browser.runtime.sendMessage({url: url});
    }
    else {
        alert("Video not found");
    }

}

console.log("[Kwejk downloader - Content Script] Started!");
find_video();
