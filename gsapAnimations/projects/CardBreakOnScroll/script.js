gsap.from('.page1 h1',{
  y:-40,
  duration:1,
  opacity:0
})

gsap.from('.page3 h1',{
  y:-40,
  duration:1,
  opacity:0,
  scrollTrigger:{
    trigger:".page3",
  }
})