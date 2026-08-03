gsap.to('.box',{
  x:700,
  duration:1.6,
  scrollTrigger:{
    trigger:".page2",
    start:"top top",
    end:"top -100%",
    scrub:true,
    pin:true
  }
})