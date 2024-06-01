let cursor=document.getElementById('cursor')
let cursorBlur=document.getElementById('cursor-blur')

document.addEventListener("mousemove",function (dets) {
   cursor.style.left=dets.x+"px"
   cursor.style.top=dets.y+"px"
   cursorBlur.style.left = dets.x - 250 + "px";
   cursorBlur.style.top = dets.y - 250 + "px";
})

gsap.to('#nav', {
    backgroundColor: "black",
    height: '110px',
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "black",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 1
    }
})

let h4All=document.querySelectorAll('#nav h4')
h4All.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        cursor.style.scale=2.5;
        cursor.style.border='0.8px solid white';
        cursor.style.backgroundColor='transparent';
    })

    elem.addEventListener("mouseleave",()=>{
        cursor.style.scale=1;
        cursor.style.border='0px solid #95C11E';
        cursor.style.backgroundColor='#95C11E';
    })
})

gsap.from('#about-us img , #about-us-in',{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})

gsap.from('.cards',{
    scale:0,
    opacity:0,
    duration:0.3,
    stagger:0.2,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"top 100%",
        end:"top 60%",
        scrub:2
    }
})

gsap.from('#quote-left',{
    y:-70,
    x:-70,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#quote-left",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:1
    }
})

gsap.from('#quote-right',{
    y:70,
    x:70,
    duration:0.5,
    scrollTrigger:{
        trigger:"#quote-left",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from('#page-5 h1',{
    y:50,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page-5 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})