function sendMessage(str){
    window.parent.postMessage(str, "*")
    console.log(str)
};

document.querySelector("#container_header button").addEventListener("click", function(){
    sendMessage("youtube")
});

document.querySelector("#download-video").addEventListener("click", function(){
    sendMessage("download-video")
});

document.querySelector("#download-subtitles").addEventListener("click", function(){
    sendMessage("download-subtitles")
});

document.querySelector("#container_footer_folder_download button").addEventListener("click", function(){
    sendMessage("video-from-image")
});