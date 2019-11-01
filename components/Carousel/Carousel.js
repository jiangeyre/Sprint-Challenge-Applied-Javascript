/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselCont = document.querySelector('.carousel-container');

carouselCont.append(createCarousel());

function createCarousel(){
  const
    carousel = document.createElement('div'),
    leftButt = document.createElement('div'),
    mountImg = document.createElement('img'),
    compImg = document.createElement('img'),
    treeImg = document.createElement('img'),
    turntableImg = document.createElement('img'),
    rightButt = document.createElement('div');

  const imgArray = [mountImg, compImg, treeImg, turntableImg];
  let currentIndex = 0;  

  carousel.appendChild(leftButt);
  carousel.appendChild(mountImg);
  carousel.appendChild(compImg);
  carousel.appendChild(treeImg);
  carousel.appendChild(turntableImg);
  carousel.appendChild(rightButt);

  carousel.classList.add('carousel');
  leftButt.classList.add('left-button');
  rightButt.classList.add('right-button');

  mountImg.src = './assets/carousel/mountains.jpeg';
  treeImg.src = './assets/carousel/trees.jpeg';
  turntableImg.src = './assets/carousel/turntable.jpeg';
  compImg.src = './assets/carousel/computer.jpeg';

  mountImg.style.display = "inline";

  leftButt.addEventListener('click', () => {
    imgArray[currentIndex].style.display = "none";
    if(currentIndex === 0){
      currentIndex = imgArray.length;
    }
    currentIndex--;
    imgArray[currentIndex].style.display = "inline";
  })

  rightButt.addEventListener('click', () => {
    imgArray[currentIndex].style.display = "none";
    currentIndex ++;
    if(currentIndex === imgArray.length){
      currentIndex = 0;
    }
  imgArray[currentIndex].style.display = "inline";
  })

  return carousel;
}