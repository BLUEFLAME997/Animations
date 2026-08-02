
// gsap.to(['.box','.box2'],{})  // for multiple elements to have same property 

// gsap.fromTo('.box',{
//   x:0
// },{
//   x:100,
//   y:100,
//   duration:2,
//   delay:0.6
// })

// gsap.from('h1 span',{
//   yPercent:100,
//   duration:0.5,
//   opacity:0,
//   stagger:{
//     each:0.1,
//     from:"random"
//   }
// })

const t1 = gsap.timeline();
const val = 0.1



t1.to(".box1",{
  x:600,
  duration:0.9,
}).to(".box2",{
  x:600,
  duration:0.9,
},"animation1").to(".box3",{
  x:600,
  duration:0.9,
}).to(".box4",{
  x:600,
  duration:0.9,
}).to(".box5",{
  x:600,
  duration:0.9,
},`animation1-=${val}`)


// <0.2 : adds 0.2s to the starting time of the previous one and becomes to the current one,-=0.3:ST2=ET1-0.3s,+=0.2:ST2=ET1+0.2