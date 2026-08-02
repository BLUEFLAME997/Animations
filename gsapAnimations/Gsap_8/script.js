
// controls of timeline: play(),pause(),restart(),reverse(),seek()

const timeline = gsap.timeline({paused:true});

timeline.to('#box1',{
  x:700,
  duration:0.8
}).to('#box2',{
  x:700,
  duration:0.8
}).addLabel("second")
.to('#box3',{
  x:700,
  duration:0.8
}).to('#box4',{
  x:700,
  duration:0.8
}).to('#box5',{
  x:700,
  duration:0.8
})

const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const restart = document.querySelector('.restart');
const reverse = document.querySelector('.reverse');
const seek = document.querySelector('.seek');

play.addEventListener("click",()=>{
  timeline.play();
})

pause.addEventListener("click",()=>{
  timeline.pause();
})

restart.addEventListener("click",()=>{
  timeline.restart();
})

reverse.addEventListener("click",()=>{
  timeline.reverse();
})

seek.addEventListener("click",()=>{
  timeline.seek("second");
})