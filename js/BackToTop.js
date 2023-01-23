window.onload = function() {
    var backToTop = document.getElementById("back_to_top");
    window.onscroll = function() {
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop; //Get the scrollHeight of scrollbar
    }
    backToTop.onclick = function() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
}