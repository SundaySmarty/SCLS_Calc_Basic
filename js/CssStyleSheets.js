window.addEventListener("DOMContentLoaded", function() {
    // find elements
    var cssStyleSheets = document.styleSheets;
    function getStyle(cssName, selectorName) {
        let cssTargetIndex, targetStyleIndex;
        for(let i = 0; i < cssStyleSheets.length; i++) {
            if(typeof cssStyleSheets[i].href === "string") {
                if(cssStyleSheets[i].href.indexOf(cssName) >= 0)  cssTargetIndex = i;
            }
        }
        for(let i = 0; i < cssStyleSheets[cssTargetIndex].cssRules.length; i++) {
            if(typeof cssStyleSheets[cssTargetIndex].cssRules[i].selectorText === "string") {
                if(cssStyleSheets[cssTargetIndex].cssRules[i].selectorText == selectorName) targetStyleIndex = i;
            }
        }
        return [cssTargetIndex, targetStyleIndex];
    }
    var cssTargetIndex = getStyle("ChapterFormat.css", "#back_to_top")[0];
    var targetStyleIndex = getStyle("ChapterFormat.css", "#back_to_top")[1];
    var backToTop = cssStyleSheets[cssTargetIndex].cssRules[targetStyleIndex];

    // set menu minHeight
    var cssTargetIndex1 = getStyle("ChapterFormat.css", ".menu")[0];
    var targetStyleIndex1 = getStyle("ChapterFormat.css", ".menu")[1];
    var menu = cssStyleSheets[cssTargetIndex1].cssRules[targetStyleIndex1];
    menu.style.minHeight = (window.screen.availHeight - document.getElementsByClassName("header")[0].offsetHeight) + "px";

    // back to top
    window.onscroll = function() {
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop; //Get the scrollHeight of scrollbar
        if(scrolltop < 600) {
            backToTop.style.display = "none";
        }
        else {
            backToTop.style.display = "";
        }
    }
    document.getElementById("back_to_top").onclick = function() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
})