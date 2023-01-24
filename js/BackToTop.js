window.onload = function() {
    var cssStyleSheets = document.styleSheets;
    function getStyle(cssName, selectorName) {
        let cssTargetIndex, targetStyleIndex;
        for(let i = 0; i < cssStyleSheets.length; i++) {
            if(typeof cssStyleSheets[i].href === "string") {
                if(cssStyleSheets[i].href.indexOf(cssName) >= 0)  cssTargetIndex = i;
            }
        }
        for(let i = 0; i < cssStyleSheets[cssTargetIndex].rules.length; i++) {
            if(typeof cssStyleSheets[cssTargetIndex].rules[i].selectorText === "string") {
                if(cssStyleSheets[cssTargetIndex].rules[i].selectorText == selectorName) targetStyleIndex = i;
            }
        }
        return [cssTargetIndex, targetStyleIndex];
    }
    var cssTargetIndex = getStyle("ChapterFormat.css", "#back_to_top")[0];
    var targetStyleIndex = getStyle("ChapterFormat.css", "#back_to_top")[1];
    var backToTop = cssStyleSheets[cssTargetIndex].rules[targetStyleIndex];
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
}