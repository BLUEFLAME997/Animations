gsap.from('.page1 .box',{
  scale:0.3,
  duration:1,
  opacity:0
})

gsap.from('.page2 .box',{
  scale:0.3,
  rotate:360,
  duration:2,
  opacity:0,
  scrollTrigger:{
    trigger:".page2 .box",
    scroller:"body",
    markers:true,
    start:"top 60%",
    end:"top 20%",
    scrub:2,
    pin:true
  }
})