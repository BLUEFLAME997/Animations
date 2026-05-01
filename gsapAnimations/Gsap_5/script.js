let initialState = `M 10 100 Q 400 100 890 100`
let finalState = `M 10 100 Q 400 100 890 100`
let enter = false;

let string = document.querySelector('.string')

string.addEventListener('mousemove',(e)=>{
  initialState=`M 10 100 Q ${e.clientX} ${e.clientY} 890 100`
  enter = true;
  gsap.to('svg path',{
    attr:{
      d:initialState
    },
    duration:0.2,
    ease:"power3.out"
  })
})

string.addEventListener('mouseleave',(e)=>{
  gsap.to('svg path',{
    attr:{
      d:finalState
    },
    duration:0.8,
    ease:"elastic.out(1,0.2)"
  })
})