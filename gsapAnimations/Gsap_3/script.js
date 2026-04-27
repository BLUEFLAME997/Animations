gsap.from('.page1 h1',{
  y:-50,
  opacity:0,
  duration:0.8
})

gsap.from('.page2 .box',{
  scale:0,
  scrollTrigger:{
    trigger:".page2 .box",
    marker:true,
    scroller:"body",
    start:"top 80%",
    end:"top 20%",
    scrub:0.2,
  }
})

gsap.from('.page3 p',{
  x:-700,
  opacity:0,
  scrollTrigger:{
    trigger:".page3 p",
    scroller:"body",
    start:"top 60%",
    end:"top 50%",
    scrub:1
  }
})