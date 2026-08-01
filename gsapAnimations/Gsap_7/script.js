
// gsap.to(['.box','.box2'],{})  // for multiple elements to have same property 

// gsap.fromTo('.box',{
//   x:0
// },{
//   x:100,
//   y:100,
//   duration:2,
//   delay:0.6
// })

gsap.from('h1 span',{
  yPercent:100,
  duration:0.5,
  opacity:0,
  stagger:{
    each:0.1,
    from:"random"
  }
})