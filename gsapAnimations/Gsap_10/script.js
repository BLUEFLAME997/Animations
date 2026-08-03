const split = new SplitText('.title',{
  type:"words,chars",
  wordsClass:"titlewords",
  charsClass:"titlechars"
})

gsap.from(split.chars,{
  yPercent:100,
  duration:1.2,
  opacity:0,
  ease:'expo.out',
  stagger:{
    each:0.04 ,
    from:"start"
  }
})

Draggable.create('.box',{
  bounds:".page",
  // type:"X",
  // edgeResistance:0.8,
  inertia:true
})