// const images = ["img1.jpeg", "img2.jpeg", "img3.jpeg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// console.log(bgImage);
// bgImage.src = `img/${chosenImage}`;
// bgImage.classList.add("img");
// document.body.appendChild(bgImage);

const backImg = document.querySelector("#body");
const images = ["img3.jpeg", "img4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = `img/${chosenImage}`;

backImg.background = bgImage;
