let tl = gsap.timeline({
  scrollTrigger:{
    trigger:".sticky",
    start:"top 0%",
    end:"top -100%",
    scrub:0.6,
    marker:true,
    pin:true
  }
});
tl.to('.sticky .card-container',{
  scale:0.87,
}).to('.sticky .card',{
  borderRadius:"20px"
}).to('.sticky .card-container',{
  gap:"20px"
},"<").to('.sticky .card',{
  rotateY:180
}).to('.sticky #card-1',{
  rotateZ:-15,
  y:25
},"<").to('.sticky #card-3',{
  rotateZ:15,
  y:25
},"<")