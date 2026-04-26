// gsap.to(".box1",{
//   x:1000,
//   duration:2,
//   delay:1,
//   rotate:360,
// })

// gsap.to('.box2',{
//   x:1000,
//   duration:2,
//   delay:3
// })

// gsap.to('.box3',{
//   x:1000,
//   duration:2,
//   delay:5,
//   backgroundColor:"green",
//   scale:0.5
// })


// gsap.from('h1',{
//   y:30,
//   opacity:0,
//   stagger:1,
// })

let tl=gsap.timeline();
tl.from('h2',{
  y:-20,
  opacity:0,
  duration:0.8
})
tl.from('h3',{
  y:-20,
  opacity:0,
  duration:0.3,
  stagger:0.25
})
tl.from('h1',{
  scale:0.2,
  opacity:0,
  duration:0.6
})

// repeat : -1 from infinite animation 
//stagger:1 same type of multiple elements get the animation property only by one
