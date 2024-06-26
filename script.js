function cursor(){
let main =  document.querySelector('.page1')
// let cursor = document.querySelector('.cursor')
  main.addEventListener('mousemove',(dets)=>{
    gsap.to('.cursor',{
        opacity:1,
        x:dets.x-80,
        y:dets.y-70,
        duration:0.6,
        scale:1
    })
  })
  main.addEventListener('mouseleave',(dets)=>{
    gsap.to('.cursor',{
        x:dets.x-40,
        y:dets.y-40,
        scale:0,
        duration:0.6
    })
  })

}

function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    

}

function page2(){
    gsap.from('.page2 > .uppersection > h3',{
        y:300,
        duration:3,
        
        scrollTrigger:{
            scroller:"#main",
            trigger:".page2 > .uppersection",
            // markers:true,
            end:"top 80%",
            scrub:1,
            start:"top 100%"
        }
    },"anime")
    gsap.from('.page2 > .lowersection > div > h1 ',{
        y:500,
        duration:100,
        stagger:10,
        scrollTrigger:{
            scroller:"#main",
            trigger:".page2 > .lowersection ",
            // markers:true,
            end:"top 30%",
            scrub:1,
            start:"top 100%"
        }
    },"anime")
}

function page5(){
  let main =  document.querySelector('.page5')
  // let cursor = document.querySelector('.cursor')

    main.addEventListener('mousemove',(dets)=>{
      
      gsap.to('.cursor2',{
          opacity:1,
          x:dets.x-80,
          y:dets.y-93,
          duration:0.6,
          // color:"#fff",
          // backgroundColor:"#000",
          scale:1
      })
    })
    main.addEventListener('mouseleave',(dets)=>{
      gsap.to('.cursor2',{
          x:dets.x-40,
          y:dets.y-40,
          scale:0,
          duration:0.6
      })
    })
}

function elem(){
  gsap.from('.elem h1',{
        y:300,
        duration:4,
        stagger:1,
        scrollTrigger:{
            scroller:"#main",
            trigger:".elem h1",
            // markers:true,
            end:"top 80%",
            scrub:1,
            start:"top 100%"
        }
  })
}

function page4(){
  gsap.from('.page4 > .uppersection > h3',{
      y:300,
      duration:3,
      scrollTrigger:{
          scroller:"#main",
          trigger:".page4 > .uppersection > h3",
          // markers:true,
          end:"top 100%",
          scrub:1,
          start:"top 150%"
      }
  },"anime")
  gsap.from('.page4 > .lowersection > div > h1 ',{
      y:500,
      duration:100,
      stagger:10,
      scrollTrigger:{
          scroller:"#main",
          trigger:".page4 > .lowersection ",
          // markers:true,
          end:"top 30%",
          scrub:1,
          start:"top 100%"
      }
  },"anime")
}


function page6(){
  gsap.from('.page6 > .uppersection > h3',{
      y:300,
      duration:3,
      stagger:1,
      scrollTrigger:{
          scroller:"#main",
          trigger:".page6 > .uppersection",
          // markers:true,
          end:"top 80%",
          scrub:1,
          start:"top 100%"
      }
  },"anime")
  gsap.from('.page6 > .lowersection > div > h1 ',{
      y:500,
      duration:100,
      stagger:10,
      scrollTrigger:{
          scroller:"#main",
          trigger:".page6 > .lowersection ",
          // markers:true,
          end:"top 30%",
          scrub:1,
          start:"top 100%"
      }
  },"anime")
}
function loader(){
  let tl = gsap.timeline();
tl.from('.loader h3',{
  x:100,
  stagger:0.2,
  opacity:0,
  duration:1
})
tl.to('.loader h3',{
  x:-100,
  stagger:0.2,
  opacity:0,
  delay:2,
  duration:1
})
tl.to('.loader',{
  y:-1500,
  ease: "sine.out",
  duration:2,
})
tl.to('.loader',{
  display:"none",
},"anime")
tl.from('.animate > h1',{
  y:200,
  opacity:0,
  x:-10,
  duration:0.6,
  stagger:0.2
},"anime")

}
function page8(){
  gsap.from('.uppersec',{
    y:-200,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
      scroller:".main",
      end:"top 20%",
      trigger:".page8",
      // markers:true,
      scrub:1
    }
  })
  gsap.from('.lower > h1',{
    y:-500,
    // x:10,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
      scroller:".main",
      trigger:".page8",
      // markers:true,
      start:"top 45%",
      end:"top 20%",
      scrub:2
    }

  },)
}

function navigation(){
  let tl = gsap.timeline()

  tl.to('.menu-options',{
    top:"0%",
    duration:1,
  })

  tl.pause()
  document.querySelector("#menu").addEventListener('click',()=>{
    tl.play()
  })
  document.querySelector("#close").addEventListener('click',()=>{
    tl.reverse()
  })

}
  
navigation()
locomotive()
cursor()
page8()
page2()
page5()
page4()
page6()
loader()
elem()
