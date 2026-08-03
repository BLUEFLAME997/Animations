// gsap.to('.box',{
//   x:700,
//   duration:1.6,
//   scrollTrigger:{
//     trigger:".page2",
//     start:"top top",
//     end:"top -100%",
//     scrub:true,
//     pin:true
//   }
// })

gsap.set('.imageContent', {
  scale: 0.4
})

const tl = gsap.timeline({
  // duration:2,
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "top -100%",
    scrub: true,
    pin: true
  }
});

tl.to('.imageContent', {
  scale: 1,
  ease:"power2.inOut"
}).to('.content', {
  gap: "7rem"
},"<")