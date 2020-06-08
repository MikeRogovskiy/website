function sendMessage(str){
    window.parent.postMessage(str, "*")
    console.log(str)
};

document.querySelector("#download-extension").addEventListener("click", function(){
    sendMessage("download-extension")
});