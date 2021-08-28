window.onload = function(){
    console.log('loaded')
}

var menu = document.querySelector('.menu');
var menulist = document.querySelector('.menulist')
var sec = document.querySelector('section')

console.log(menu)
menu.addEventListener('click',function(){
    menu.classList.toggle('cancel')
    menulist.classList.toggle('slidedown')
    // document.body.classList.toggle('disable');
    sec.classList.toggle('disable')
    
    
    console.log('cancel')
})

// 


const tl = gsap.timeline({default:{duration:1}});
const tt = gsap.timeline({default:{duration:1}});



tl.from(".navigation-bar .logo,.navigation-bar .menu",1,{transform:'translate(0,-100%)',opacity:0})
.from(".section1 h1",0.5,{transform:'translate(0,-10%)',ease:Power4.easeIn,opacity:0})
.from(".section1 h3",0.5,{transform:'translate(0,-10%)',ease:Power4.easeIn,opacity:0})



gsap.from('.section2 .card1 ',{
    scrollTrigger: ".card1",
    transform:'translate(-4%,15%)',
    x:50,
    duration:1,
    opacity:0
})

gsap.from('.section2 .card2',{
    scrollTrigger: ".card2",
    transform:'translate(4%,15%)',
    duration:1,
    opacity:0

})

gsap.from('.section2 .card3 ',{
    scrollTrigger: ".card3",
    transform:'translate(-4%,15%)',
    // x:50,
    duration:1,
    opacity:0
})

gsap.from('.section3 h1 ',{
    scrollTrigger: ".section3 h1",
    transform:'translate(0%,20%)',
    // x:50,
    duration:1.5,
    opacity:0
})

gsap.from('.section3 h4 ',{
    scrollTrigger: ".section3 h4",
    transform:'translate(0%,20%)',
    // x:50,
    duration:2,
    opacity:0
})

window.addEventListener('scroll',function(){

    if(window.pageYOffset > 2.4*window.innerHeight){
       document.querySelector('.cta').classList.add('bottom');

    }
    else{
        document.querySelector('.cta').classList.remove('bottom');

    }
  })






// tl.to(".box11",0.2,{width:0,ease:Power4.easeIn})
// .from(".block3",0.5,{transform:'scale(1.5)',ease:Power4.easeIn})

// tl.to(".box22",0.2,{width:0,ease:Power4.easeIn,delay:0.1})
// .from(".block2",0.5,{transform:'scale(1.5)',ease:Power4.easeIn})

// tl.to(".box33",0.2,{width:0,ease:Power4.easeIn})
// .from(".block1",0.5,{transform:'scale(1.5)',ease:Power4.easeIn})


// const menu = document.querySelector('.menu');
// const hamMenu = document.querySelector('.ham-menu');
// const dropdown = document.querySelector('.dropdown');

// menu.addEventListener('click',clicked);

// function clicked(){
//     menu.classList.toggle('arrowon');    
//     menu.classList.toggle('roundon');    
//     menu.classList.toggle('menuon');    
//     dropdown.classList.toggle('drop');
// }

{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/gsap.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
<script src="./agency.js"></script> */}