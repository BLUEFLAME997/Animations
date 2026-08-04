
const img = document.querySelector('.specialImage');
img.addEventListener("click",()=>{
  const state = Flip.getState(img);
  document.querySelector('.imgShow').appendChild(img);

  Flip.from(state,{
    duration:0.8,
    ease:"power2.out",
    // absolute:true,
    // scale:true,
  })
})