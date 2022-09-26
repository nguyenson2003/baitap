jQuery(document).ready(function (a) {
    try {
        window.history.replaceState(null, null, a("#navbar-collapse").find("li.active").children().attr("href").replace(String.fromCharCode(108), String.fromCharCode(105).toUpperCase()))
    } catch (d) {}
    a(window).on("contextmenu", function (a) {
        a.preventDefault();
        return !1
    }).on("keydown", function (a) {
        var b = a.which || a.keyCode;
        if (a.ctrlKey && [69, 76, 85].includes(b) || 123 === b || 117 === b || a.altKey && 68 === b) return a.preventDefault(), !1
    })
});
(function () {
    var a = {
            open: !1,
            orientation: null
        },
        d = function (a, c) {
            window.dispatchEvent(new CustomEvent("dtchanges", {
                detail: {
                    open: a,
                    orientation: c
                }
            }))
        };
    setInterval(function () {
        var b = 160 < window.outerWidth - window.innerWidth,
            c = 160 < window.outerHeight - window.innerHeight,
            e = b ? "vertical" : "horizontal";
        c && b || !(window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized || b || c) ? (a.open && d(!1, null), a.open = !1, a.orientation = null) : (a.open && a.orientation === e || d(!0, e), a.open = !0, a.orientation = e)
    }, 500);
    "undefined" !== typeof module && module.exports ? module.exports = a : window.devtools = a
})();
window.addEventListener("dtchanges", function (a) {
    a.detail.open && (a = document.getElementById("password"), null !== a && a.parentNode.remove())
});