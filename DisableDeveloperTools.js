window.document.oncontextmenu = function() {
    return false;
}
var threshold = 100;
window.onkeydown = function() {
    if(window.event && window.event.keyCode == 123) {
        return false;
    }
    if(window.event && window.event.ctrlKey && window.event.shiftKey) {
        return false;
    }
};