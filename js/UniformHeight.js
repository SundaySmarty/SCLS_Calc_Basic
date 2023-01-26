window.addEventListener("DOMContentLoaded", function() {
    var catalogRight = document.getElementsByClassName("catalog_right")[0];
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
    var cssTargetIndex = getStyle("ChapterFormat.css", ".catalog_left")[0];
    var targetStyleIndex = getStyle("ChapterFormat.css", ".catalog_left")[1];
    var catalogLeft = cssStyleSheets[cssTargetIndex].rules[targetStyleIndex];
    catalogLeft.style.height = catalogRight.getBoundingClientRect().height + "px";
})