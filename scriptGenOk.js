function wideVideo() {
    var video = document.getElementById("myVideo");
    video.removeAttribute('width');
    var nav = document.getElementsByClassName('navbar-dark');
    nav.item(0).remove();
    var col9 = document.getElementsByClassName('col-md-9');
    col9.item(0).classList.add('col-md-12');
}

//to auto use the function after running the code, uncomment the line below.
//wideVideo()