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
