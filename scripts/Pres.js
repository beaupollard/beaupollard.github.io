const slideshowImages = document.querySelectorAll(" .slideshow-img1");
const slideshowImages2 = document.querySelectorAll(" .slideshow-img2");
const slideshowImages3 = document.querySelectorAll(" .slideshow-img3");
const slideshowP = document.querySelectorAll(".pRight1");
const slideshowP2 = document.querySelectorAll(".pRight2");
const slideshowP3 = document.querySelectorAll(".pRight3");

const nextImageDelay = 5000;
let currentImageCounter = 0;
let currentImageCounter2 = 0;
let currentImageCounter3 = 0;

var mouse_x;
var mouse_y;
var dx1;
var dy1;
var dx2;
var dy2;
var dx3;
var dy3;

var box1 = document.querySelector(".slideshow-img1");
var rect1 = box1.getBoundingClientRect();
var box2 = document.querySelector(".slideshow-img2");
var rect2 = box2.getBoundingClientRect();
var box3 = document.querySelector(".slideshow-img3");
var rect3 = box3.getBoundingClientRect();

window.onscroll = function() {Screen_Move()};
window.addEventListener('mousemove', function(e) {Mouse_Move(e)});

function Screen_Move(){
    box1 = document.querySelector(".slideshow-img1");
    rect1 = box1.getBoundingClientRect();
    box2 = document.querySelector(".slideshow-img2");
    rect2 = box2.getBoundingClientRect();
    box3 = document.querySelector(".slideshow-img3");
    rect3 = box3.getBoundingClientRect();

    dx1 = (mouse_x-rect1.right)*(mouse_x-rect1.left);
    dy1 = (mouse_y-rect1.top)*(mouse_y-rect1.bottom);
    dx2 = (mouse_x-rect2.right)*(mouse_x-rect2.left);
    dy2 = (mouse_y-rect2.top)*(mouse_y-rect2.bottom);
    dx3 = (mouse_x-rect3.right)*(mouse_x-rect3.left);
    dy3 = (mouse_y-rect3.top)*(mouse_y-rect3.bottom);
};

function Mouse_Move(e){
    box1 = document.querySelector(".slideshow-img1");
    rect1 = box1.getBoundingClientRect();
    box2 = document.querySelector(".slideshow-img2");
    rect2 = box2.getBoundingClientRect();
    box3 = document.querySelector(".slideshow-img3");
    rect3 = box3.getBoundingClientRect();

    mouse_x = e.x;
    mouse_y = e.y;
    dx1 = (e.x-rect1.right)*(e.x-rect1.left);
    dy1 = (e.y-rect1.top)*(e.y-rect1.bottom);
    dx2 = (e.x-rect2.right)*(e.x-rect2.left);
    dy2 = (e.y-rect2.top)*(e.y-rect2.bottom);
    dx3 = (e.x-rect3.right)*(e.x-rect3.left);
    dy3 = (e.y-rect3.top)*(e.y-rect3.bottom);
};

slideshowImages[currentImageCounter].style.opacity = 1;
slideshowImages2[currentImageCounter2].style.opacity = 1;
slideshowImages3[currentImageCounter3].style.opacity = 1;

slideshowP[currentImageCounter].style.display = "block";
slideshowP2[currentImageCounter2].style.display = "block";
slideshowP3[currentImageCounter3].style.display = "block";

setInterval(nextImage, nextImageDelay);
setInterval(nextImage2, nextImageDelay);
setInterval(nextImage3, nextImageDelay);

function nextImage(){
    if (dx1 < 0 && dy1 < 0){
        //console.log('HP1');
    } else{
        slideshowImages[currentImageCounter].style.opacity = 0;
        slideshowP[currentImageCounter].style.display = "none";
        currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

        slideshowImages[currentImageCounter].style.opacity = 1;
        slideshowP[currentImageCounter].style.display = "block";
    }
}

function nextImage2() {
    if (dx2 < 0 && dy2 < 0){
        //console.log('HP2');

    } else{
        slideshowImages2[currentImageCounter2].style.opacity = 0;
        slideshowP2[currentImageCounter2].style.display = "none";
        currentImageCounter2 = (currentImageCounter2 + 1) % slideshowImages2.length;

        slideshowImages2[currentImageCounter2].style.opacity = 1;
        slideshowP2[currentImageCounter2].style.display = "block";
    }
}

function nextImage3() {
    if (dx3 < 0 && dy3 < 0){
        //console.log('HP3');
    } else{
        slideshowImages3[currentImageCounter3].style.opacity = 0;
        slideshowP3[currentImageCounter3].style.display = "none";
        currentImageCounter3 = (currentImageCounter3 + 1) % slideshowImages3.length;

        slideshowImages3[currentImageCounter3].style.opacity = 1;
        slideshowP3[currentImageCounter3].style.display = "block";
    }
}
