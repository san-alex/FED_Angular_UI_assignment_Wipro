function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function currentslide(n) {
    var dotInd = document.getElementsByClassName("dot");
    for (var i = 0; i < dotInd.length; i++) {
        if (i != (n - 1)) {
            dotInd[i].className = dotInd[i].className.replace(" activedot", "");
        }
    }
    dotInd[n - 1].className = "dot activedot";
}