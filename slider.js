const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const images = document.querySelectorAll('.slide');
const dotContainer = document.querySelector('.dots');

let dot = document.createElement('span');
dot.className = "dot";

for(let i = 0; i < images.length; i++){
    dotContainer.innerHTML += "";
    dotContainer.appendChild(dot)
}

let dots = document.querySelectorAll('.dot');
dots[0].classList.add('fill');

let imgIndex = 0;
images[imgIndex].classList.add('active');

const changeSlide = (dir) => {
    if(dir == 1){
        imgIndex = imgIndex < images.length - 1 ? imgIndex + 1 : 0;
    }else {
        imgIndex = imgIndex > 0 ? imgIndex - 1 : images.length - 1;
    }
    images.forEach(function(slide){
        slide.className = "slide"
    })
    images[imgIndex].classList.add('active');
    
    dots.forEach(function(dot){
        dot.className = "dot"
    })
    dots[imgIndex].classList.add('fill');
}

// Add Click Event From JS File
// nextBtn.addEventListener('click', ()=> {
//     imgIndex = imgIndex < images.length - 1 ? imgIndex + 1 : 0;
//     images.forEach(function(slide){
//         slide.className = "slide"
//     })
//     images[imgIndex].classList.add('active');
// })

// prevBtn.addEventListener('click', () => {
//     imgIndex = imgIndex > 0 ? imgIndex - 1 : images.length - 1;
//     images.forEach(function(slide){
//         slide.className = "slide"
//     })
//     images[imgIndex].classList.add('active');
// })
