// loop through images and crate the image elements on the page
const thumbnails = document.querySelectorAll(".thumbnails img");
const displayedImages = document.getElementById("displayedImages");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
let currentImgIndex = 0;

thumbnails[0].classList.add("is-active");

// all thumbnail images in the array
thumbnails.forEach(function (thumb, index) {
  thumb.addEventListener("click", function () {
    // Remove "is-active" class from all thumbnails
    thumbnails.forEach(function (opacityOn) {
      opacityOn.classList.remove("is-active");
    });
    // Add "is-active" class to the clicked thumbnail
    thumb.classList.add("is-active");
    currentImgIndex = index;
    // Display image and alt text
    let displayLarge = thumb.src;
    displayLarge = displayLarge.replace("150", "");

    displayedImages.src = displayLarge;
    displayedImages.alt = thumb.alt;
  });
});

btnLeft.addEventListener("click", function () {
  btnPressLeft();
});

btnRight.addEventListener("click", function () {
  btnPressRight();
});

// click on btnLeft
// big image becomes the thumbnail of the left of the current (array of thumbnail -1)
// if leftmost image, go to the rightmost image
function btnPressLeft() {
  thumbnails.forEach(function (opacityOn) {
    opacityOn.classList.remove("is-active");
  });
  if (currentImgIndex === 0) {
    let displayLarge = thumbnails[thumbnails.length - 1].src;
    displayLarge = displayLarge.replace("150", "");
    displayedImages.src = displayLarge;
    displayedImages.alt = thumbnails[thumbnails.length - 1].alt;
    currentImgIndex = thumbnails.length - 1;
    thumbnails[thumbnails.length - 1].classList.add("is-active");
  } else {
    let displayLarge = thumbnails[currentImgIndex - 1].src;
    displayLarge = displayLarge.replace("150", "");
    displayedImages.src = displayLarge;
    displayedImages.alt = thumbnails[currentImgIndex - 1].alt;
    currentImgIndex = currentImgIndex - 1;
    thumbnails[currentImgIndex].classList.add("is-active");
  }
}

function btnPressRight() {
  thumbnails.forEach(function (opacityOn) {
    opacityOn.classList.remove("is-active");
  });
  if (currentImgIndex === thumbnails.length - 1) {
    let displayLarge = thumbnails[0].src;
    displayLarge = displayLarge.replace("150", "");
    displayedImages.src = displayLarge;
    displayedImages.alt = thumbnails[0].alt;
    currentImgIndex = 0;
    thumbnails[0].classList.add("is-active");
  } else {
    let displayLarge = thumbnails[currentImgIndex + 1].src;
    displayLarge = displayLarge.replace("150", "");
    displayedImages.src = displayLarge;
    displayedImages.alt = thumbnails[currentImgIndex + 1].alt;
    currentImgIndex = currentImgIndex + 1;
    thumbnails[currentImgIndex].classList.add("is-active");
  }
}

window.addEventListener("keydown", function (event) {
  if (event.code === "ArrowLeft") {
    btnPressLeft();
  }
  if (event.code === "ArrowRight") {
    btnPressRight();
  }
});
