const slideshowImages = document.querySelectorAll(".Images .slideshow-img");
const slideshowP = document.querySelectorAll(".slideshow-p");

var mouse_x;
var mouse_y;
var dx;
var dy;

const nextImageDelay = 5000;
const box = document.querySelector(".slideshow-img");
const rect = box.getBoundingClientRect();
console.log(rect);
let currentImageCounter = 0;



window.addEventListener('mousemove', function(e) {
    mouse_x = e.x;
    mouse_y = e.y;
    dx = (e.x-rect.right)*(e.x-rect.left);
    dy = (e.y-rect.top)*(e.y-rect.bottom);

});




//slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity= 1;
slideshowP[currentImageCounter].style.display = "block";
setInterval(nextImage, nextImageDelay);

function nextImage(){
    //slideshowImages[currentImageCounter].style.display = "none";
    if (dx < 0 && dy < 0){
        console.log('HP');
    } else{
        slideshowImages[currentImageCounter].style.opacity= 0;
        slideshowP[currentImageCounter].style.display = "none";
        currentImageCounter = (currentImageCounter+1) % slideshowImages.length;
        //slideshowImages[currentImageCounter].style.display = "block";
    
        slideshowImages[currentImageCounter].style.opacity= 1;
        slideshowP[currentImageCounter].style.display = "block";
    }
}
