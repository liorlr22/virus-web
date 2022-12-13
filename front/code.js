
// let favicon = document.getElementById('favicon');
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector('link[rel=icon]').href = 'resources/icon-dark.png'
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.querySelector('link[rel=icon]').href = 'resources/icon-light.svg'
}
const links = ["https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
    "https://www.youtube.com/watch?v=ZHwVBirqD2s&ab_channel=EltonJohnVEVO",
    "https://www.youtube.com/watch?v=SQCSxqScSVQ&ab_channel=CoolioVEVO",
    "https://www.youtube.com/watch?v=7j7twuejxvU&ab_channel=ImagineDragonsVEVO",
    "https://www.youtube.com/watch?v=w5tWYmIOWGk&ab_channel=ImagineDragonsVEVO",
    "https://www.youtube.com/watch?v=dvgZkm1xWPE&ab_channel=Coldplay",
    "https://www.youtube.com/watch?v=PIh2xe4jnpk&ab_channel=ournameismagicVEVO",
    "https://www.youtube.com/watch?v=KRaWnd3LJfs&ab_channel=Maroon5VEVO",
    "https://www.youtube.com/watch?v=qpgTC9MDx1o&ab_channel=Maroon5VEVO",
    "https://www.youtube.com/watch?v=hT_nvWreIhg&ab_channel=OneRepublicVEVO"];


let urlPlaceHolder = document.getElementById("urlPlaceHolder");
let randomNumber = Math.floor(Math.random() * 10);
urlPlaceHolder.placeholder = links[randomNumber];
$(document).ready(function () {
    w_w = $(window).width();
    alert(w_w)
    if (w_w >= 1920) {
        $("#title").addClass('Display-2');
        $("#title").removeClass('Display-1');
        $("#title").removeClass('Display-3');
        $("#title").removeClass('Display-4');
    }
    //onResize
    $(window).resize(function () {
        w_w = $(window).width();
        // if(w_w < 1920 && w_w > 980){
        //   $("#title").addClass('Display-4');
        //   $("#submit").css('width', '50vh');
        //   alert(w_w);
        // } else if(w_w <= 980) {
        //   $("#title").addClass('Display-4');
        //   // $("#title").css("display", "inline");
        //   $("#submit").css('width', '44vh');
        //   alert(w_w);
        // } else {
        //   $("#title").removeClass('Display-4');
        //   $("#title").addClass('Display-2');
        //   $("#submit").css('width', '101vh');
        //   alert(w_w);
        // }
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
var target = document.getElementById("target");
var frm = document.getElementsByName("submitUrl")[0];
var dnldVar = document.getElementById("dnldBtn");
function toggleAnswer(link) {
    if (link != "") {
        if (target.style.display === "none") {
            console.log("in");
            var pic = document.getElementById("tnpic");
            if (link.indexOf('=') > -1) {
                link = link.split("=");
                if (link.length == 2) {
                    link = link[1];
                } else {
                    link = link[1];
                    link = link.split('&');
                    link = link[0];
                }
            } else {
                link = link.split('/');
                link = link[link.length - 1];
            }
            let src = "https://img.youtube.com/vi/" + link + "/0.jpg";
            localStorage.setItem('thumbnail', `${src}`);
            pic.src = src;
            var obj = "https://www.googleapis.com/youtube/v3/videos?id=" + link + "&key=AIzaSyAcwblTx35lcf6pF9ZtB5ptLSGvTGwIXp4&fields=items(snippet(title))&part=snippet";
            console.log(obj);
            const getJSON = async obj => {
                const response = await fetch(obj);
                return response.json(); // get JSON from the response 
            }
            getJSON(obj).then(data => data.items[0].snippet.title).then(title => {
                document.getElementById("videoTitle").innerHTML = title,
                    localStorage.setItem('title', `${title}`)
            });

            pic.style.height = "75%";
            pic.style.width = "75%";
            target.style.display = "block";
            frm.reset();
        }
    } else {
        console.log("out");
        target.style.display = "none";
    }
}
function dnld(btn) {
    let link = localStorage.getItem('thumbnail');
    // link = link.slice(8);
    window.open(link, '_blank');
    // link = "/" + link;
    let title = localStorage.getItem('title') + ".png";
    var a = document.createElement('a');
    a.href = link;
    a.download = title;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

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