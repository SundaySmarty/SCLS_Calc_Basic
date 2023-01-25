window.addEventListener("DOMContentLoaded", function() {
    document.addEventListener('touchstart', function(event) {
        if(event.touches.length > 1) {
            event.preventDefault();
        }
    })
    document.addEventListener('gesturestart', function(event) {
        event.preventDefault();
    })
})