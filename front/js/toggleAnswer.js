var target = document.getElementById("target");
var frm = document.getElementsByName("submitUrl")[0];
var dnldVar = document.getElementById("dnldBtn");
function toggleAnswer(link) {
    if (link != "") {
        if (target.style.display === "none") {
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