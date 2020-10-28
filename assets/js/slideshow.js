window.onload = () => {
  const slideShowImg = document.querySelector(".slideshow-img");

  const slideShowImages = [
    "url(assets/img/slideshow1.jpg)",
    "url(assets/img/slideshow2.jpg)",
    "url(assets/img/slideshow3.jpg)",
  ];

  let currentIndex = 0;

  setInterval(() => {
    if (currentIndex < slideShowImages.length - 1) currentIndex++;
    else currentIndex = 0;

    slideShowImg.style.backgroundImage = slideShowImages[currentIndex];
  }, 5000);
};
