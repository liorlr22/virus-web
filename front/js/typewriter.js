var i = 0;
var speed = 50;
var txt = document.getElementById("urlPlaceHolder").placeholder;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("videoTitle").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}