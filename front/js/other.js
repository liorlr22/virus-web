
// let favicon = document.getElementById('favicon');
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector('link[rel=icon]').href = 'resources/icon-dark.png'
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.querySelector('link[rel=icon]').href = 'resources/icon-light.svg'
}

$(document).ready(function () {
    w_w = $(window).width();
    if (w_w >= 1920) {
        $("#title").addClass('Display-2');
        $("#title").removeClass('Display-1');
        $("#title").removeClass('Display-3');
        $("#title").removeClass('Display-4');
    }
    //onResize
    $(window).resize(function () {
        w_w = $(window).width();
        if (w_w >= 3840) {
            $("#title").addClass('Display-1');
            $("#title").removeClass('Display-2');
            $("#title").removeClass('Display-3');
            $("#title").removeClass('Display-4');
        } else if (w_w < 3840 && w_w >= 1920) {
            $("#title").addClass('Display-2');
            $("#title").removeClass('Display-1');
            $("#title").removeClass('Display-3');
            $("#title").removeClass('Display-4');
        } else if (w_w < 1920 && w_w >= 768) {
            $("#title").addClass('Display-3');
            $("#title").removeClass('Display-1');
            $("#title").removeClass('Display-2');
            $("#title").removeClass('Display-4');
        } else {
            $("#title").addClass('Display-4');
            $("#title").removeClass('Display-1');
            $("#title").removeClass('Display-2');
            $("#title").removeClass('Display-3');
        }
    });

});

$("#linkReceive").submit(function (e) {
    e.preventDefault();
});
