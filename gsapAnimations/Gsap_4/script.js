gsap.to('.page2 h1',{
  transform:"translateX(-150%)",
  scrollTrigger:{
    trigger:".page2",
    marker:true,
    scrub:1,
    pin:true,
    start:"top 0%",
    end:"top -450%"
  }
})