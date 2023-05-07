const carouselMain = document.querySelector('.carousel_container');
const carouselInnerMain = document.querySelector('.carousel_inner-container');
const slides = Array.from(carouselInnerMain.children);
const nextBtn = document.querySelector('.carousel_button--right');
const prevBtn = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;
const slideHeight = slideSize.height;

// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';    //'px' bcz width should be in pixels
// slides[2].style.left = slideWidth * 2 + 'px';

// const dummyArray = [1,2,3,4,5,6];
// dummyArray.forEach(function(numbers, index){
//     console.log(`Index ${index} = Number ${numbers}`);
// });

// dummyArray.forEach((numbers,index) => {
//     console.log(`The Element at index ${index} : ${numbers}`);
// });

const setSlidePosition = (slide,index) => {
    slide.style.left = slideWidth * index + 'px';
}
// slides.forEach((slide,index) =>{
//     slide.style.left = slideWidth * index + 'px';
// })
slides.forEach(setSlidePosition);

const moveToSlide = (carouselInnerMain,currentSlide,targetSlide) => {
    carouselInnerMain.style.transform = 'translateX(-'+ targetSlide.style.left +')';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
    console.log(targetSlide);
}

nextBtn.addEventListener('click',e => {
    const currentSlide = carouselInnerMain.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    // const amountToMove = nextSlide.style.left;

    moveToSlide(carouselInnerMain, currentSlide, nextSlide);
    // carouselInnerMain.style.transform = 'translateX(-'+ amountToMove +')';
    // currentSlide.classList.remove('current_slide');
    // nextSlide.classList.add('current_slide');
});

prevBtn.addEventListener('click', e => {
    const currentSlide = carouselInnerMain.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(carouselInnerMain, currentSlide, prevSlide);
});

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    console.log(targetIndex);
})

