let imgIndex = 1;
showImg(imgIndex);

function incrementImg(n) {
    showImg(imgIndex += n);
}

function currentImg(n) {
    showImg(imgIndex = n);
}

function showImg(n) {
    let i;
    let imgs = document.getElementsByClassName("carousel-image");
    let dots = document.getElementsByClassName("dot");
    if (n > imgs.length) {imgIndex = 1}
    if (n < 1) {imgIndex = imgs.length}
    for (i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].id = dots[i].id.replace("selectedDot", "");
    }
    imgs[imgIndex-1].style.display = "block";
    dots[imgIndex-1].id += "selectedDot";
}