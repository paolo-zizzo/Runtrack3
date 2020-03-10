var keylogger = document.getElementById('keylogger');

window.addEventListener('keydown', function(event){
    var key = event.key;
    keylogger.value += key;
})