// Get the button and the dropdown elements
let btn = document.getElementById("btn");
let dropdown = document.getElementById("dropdown");

// Add a click event listener to the button
btn.addEventListener("click", function () {
    // Toggle the show class to the dropdown element
    dropdown.classList.toggle("show");
});


//   const imagesContainer = document.querySelector(".images-container");
//   const leftArrow = document.querySelector(".left-arrow");
//   const rightArrow = document.querySelector(".right-arrow");
//   const imageWidth = document.querySelector(
//     ".images-container img"
//   ).clientWidth;
//   let currentPosition = 0;
//   leftArrow.addEventListener("click", () => {
//     currentPosition += imageWidth;
//     if (currentPosition > 0) {
//       currentPosition = -imageWidth * (imagesContainer.children.length - 1);
//     }
//     imagesContainer.style.transform = translateX(${currentPosition}px);
//   });
//   rightArrow.addEventListener("click", () => {
//     currentPosition -= imageWidth;
//     if (
//       currentPosition <
//       -imageWidth * (imagesContainer.children.length - 1)
//     ) {
//       currentPosition = 0;
//     }
//     imagesContainer.style.transform = translateX(${currentPosition}px);
//   });
