let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // curVideo = slides[i].getElementsByTagName('video')[0];
    // curVideo.currentTime = 0;
    // curVideo.pause();
    // slides[i].getElementsByTagName('video')[0].currentTime = 0; // reset all videos
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // console.log(slideIndex);
  // console.log(slides);
  // console.log(slides[0]);
  // console.log(slides[slideIndex-1]);
  // slides[slideIndex-1].getElementsByTagName('video')[0].play(); // replay video on click
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// var media=document.querySelector('video');

// btn.addEventListener("click",function(){
//   media.currentTime = 0;
// })
// play.addEventListener("click", function(){
//   media.play();
// })