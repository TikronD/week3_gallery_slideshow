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
    displayedImages.src = thumb.src;
    displayedImages.alt = thumb.alt;
  });
});

// click on btnLeft
// big image becomes the thumbnail of the left of the current (array of thumbnail -1)
// if leftmost image, go to the rightmost image
btnLeft.addEventListener("click", function () {
  btnPressLeft();
});

btnRight.addEventListener("click", function () {
  btnPressRight();
});

function btnPressLeft() {
  thumbnails.forEach(function (opacityOn) {
    opacityOn.classList.remove("is-active");
  });
  if (currentImgIndex === 0) {
    displayedImages.src = thumbnails[thumbnails.length - 1].src;
    displayedImages.alt = thumbnails[thumbnails.length - 1].alt;
    currentImgIndex = thumbnails.length - 1;
    thumbnails[thumbnails.length - 1].classList.add("is-active");
  } else {
    displayedImages.src = thumbnails[currentImgIndex - 1].src;
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
    displayedImages.src = thumbnails[0].src;
    displayedImages.alt = thumbnails[0].alt;
    currentImgIndex = 0;
    thumbnails[0].classList.add("is-active");
  } else {
    displayedImages.src = thumbnails[currentImgIndex + 1].src;
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
