


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
function page3(){
    var elemC = document.querySelector("#elem-container")
    elemC.addEventListener("mouseenter",function(){
        document.querySelector('#fixed-image').style.display='block'
    })
    elemC.addEventListener("mouseleave",function(){
        document.querySelector('#fixed-image').style.display='none'
    })
    
    var elems = document.querySelectorAll(".elem")
    elems.forEach(function(e){
        e.addEventListener("mouseenter",()=>{
            let img= e.getAttribute("data-image")
            document.querySelector('#fixed-image').style.backgroundImage=`url(${img})`;
        })
    })
}

function nav__link(){
    var a = document.querySelectorAll(".nav__link ");

    a.forEach(a=>{
        a.addEventListener('click',()=>{
            document.querySelector('.active')?.classList.remove('active');
            a.classList.add('active');
            document.querySelector('#data-entry').innerHTML=a.getAttribute("data");
            
            let img= a.getAttribute("img")
            document.querySelector('#DPE #right').style.backgroundImage=`url(${img})`;
        })
    })
}

function swiperAnimation(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,

      });

}

page3();
nav__link();
swiperAnimation();