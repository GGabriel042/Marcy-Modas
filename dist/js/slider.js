const sliderEl = document.getElementById("slider");
firstImg = sliderEl.querySelectorAll(".slider-item")[0];
arrowIcons = document.querySelectorAll(".container-slider i");

let isDragStart = false, prevPageX, prevScrollerLeft;


const showHideIcons = () => {
  let scrollWidth = sliderEl.scrollWidth - sliderEl.clientWidth;
  arrowIcons[0].style.display = sliderEl.scrollLeft;
  arrowIcons[1].style.display = sliderEl.scrollLeft;
}

arrowIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    let firstImgWidth = firstImg.clientWidth + 36;
    sliderEl.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth; 
    setTimeout(() => showHideIcons(), 60);
  });
});




const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollerLeft = sliderEl.scrollLeft;
}

const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  sliderEl.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  sliderEl.scrollLeft = prevScrollerLeft - positionDiff;
  showHideIcons();
}

const dragStop = () => {
  isDragStart = false;
  sliderEl.classList.remove("dragging");
}



autoSlide();


function autoSlide() {
  let slideInterval;
    slideInterval = setInterval(() => {
      const scrollWidth = sliderEl.scrollWidth - sliderEl.clientWidth;
      if (sliderEl.scrollLeft >= scrollWidth) {
        sliderEl.scrollLeft = 0;
        
      } else {
  
        sliderEl.scrollLeft += firstImg.clientWidth + 36;
      }
      showHideIcons();
    }, 2000);

    sliderEl.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });


    sliderEl.addEventListener('mouseleave', () => {
      slideInterval = setInterval(() => {
        const scrollWidth = sliderEl.scrollWidth - sliderEl.clientWidth;
        if (sliderEl.scrollLeft >= scrollWidth) {
          sliderEl.scrollLeft = 0;
        } else {
          sliderEl.scrollLeft += firstImg.clientWidth + 36;
        }
        showHideIcons();
      }, 4000);
    });
  }






sliderEl.addEventListener("mousedown", dragStart);
sliderEl.addEventListener("mousemove", dragging);
sliderEl.addEventListener("mouseup", dragStop);
sliderEl.addEventListener("mouseleave", dragStop);