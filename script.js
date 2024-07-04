function lososcroll() {
    // locomotive scroll trigger
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
  
      // for tablet smooth
      tablet: { smooth: true },
  
      // for mobile
      smartphone: { smooth: true },
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      // follwoing line is not required to work pinning on touch screen
  
      /* pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed"*/
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    ScrollTrigger.refresh();
  }
  
// lososcroll();
// image animation

var elemc = document.querySelector(".elem-container")
var images = document.querySelector("#imagecontainer")
elemc.addEventListener("mouseenter",function(){
    images.style.display="block";
})
elemc.addEventListener("mouseleave",function(){
    images.style.display="none";
})
var elems = document.querySelectorAll(".elem");
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        images.style.backgroundImage= `url(${image})`
    })
})


document.addEventListener('DOMContentLoaded', function() {
    const designHeading = document.getElementById('design');
    const projectHeading = document.getElementById('project');
    const executionHeading = document.getElementById('execution');
    const designImage = document.getElementById('designImage');
    const projectImage = document.getElementById('projectImage');
    const executionImage = document.getElementById('executionImage');

    function updateActiveElement(activeElement, activeImage) {
        // Remove active class and add dull class to all headings
        designHeading.classList.remove('active');
        projectHeading.classList.remove('active');
        executionHeading.classList.remove('active');
        
        designHeading.classList.add('dull');
        projectHeading.classList.add('dull');
        executionHeading.classList.add('dull');

        // Add active class to the clicked heading and remove dull class
        activeElement.classList.add('active');
        activeElement.classList.remove('dull');

        // Remove active class from all images and add it to the active image
        designImage.classList.remove('active');
        projectImage.classList.remove('active');
        executionImage.classList.remove('active');

        activeImage.classList.add('active');
    }

    designHeading.addEventListener('click', function() {
        updateActiveElement(designHeading, designImage);
    });

    projectHeading.addEventListener('click', function() {
        updateActiveElement(projectHeading, projectImage);
    });

    executionHeading.addEventListener('click', function() {
        updateActiveElement(executionHeading, executionImage);
    });
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var menu = document.querySelector("nav h3")
var full = document.querySelector("#fullscr")
var img = document.querySelector("nav img")
flag = 0
menu.addEventListener("click",function(){
    if(flag == 0){
        full.style.top = 0;
        img.style.opacity = 0;
        flag =1
    }
    else{
        full.style.top ="-100%";
        img.style.opacity = 1;
        flag =0
    }
})

var load = document.querySelector("#loader")
setTimeout(function(){
    load.style.top = "-100%"
},3200)

// var tl = gsap.timeline()

// tl.from("#loader h2",{
//     x:100,
//     opacity:0,
//     duration:1.2,
//     stagger:0.3,
   
// })
// tl.to("#loader h2",{
//     x:-80,
//     opacity:0,
//     duration:1.2,
//     stagger:0.3,
   
// })
// tl.to("#loader",{
//     opacity:0,
// })
// // tl.from("#page1",{
// //     y:100,
// //     duration:0.4,
// //     opacity:0,
// //     stagger:0.1,
// // })
// tl.to("#loader",{
//     display:"none",
// })