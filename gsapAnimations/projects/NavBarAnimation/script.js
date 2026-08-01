let tl = gsap.timeline();
tl.to('.menu',{
  right:0,
  duration:0.6
})
tl.from('.menu h2',{
  x:150,
  stagger:0.28
},"<")