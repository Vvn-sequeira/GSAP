gsap.to("#exp h1", {
    x: "-100%",
    scrollTrigger:{
     trigger:"#exp",
     scroller:"body",
     markers:true, 
     start:"top 30%",
     scrub:2,
     start:"top 0%",
     end:"top -150%",
     pin:true
    }
})


var initialPath = "M 0 250 Q 600 250 1200 250"
var Path = "M 0 250 Q 600 250 1200 250"

var StringDiv = document.querySelector("#string")

StringDiv.addEventListener("mousemove" , (dets)=>{
    Path = `M 0 250 Q ${dets.x} ${dets.y} 1200 250`
    gsap.to("svg path" , {
    attr:{
      d:Path
    },
    duration:0.3
})
})
StringDiv.addEventListener("mouseleave" , ()=>{
    Path = "M 0 250 Q 600 250 1200 250"
     gsap.to("svg path" , {
    attr:{
      d:Path
    },
    ease:"elastic.out(1,0,2)"
})
})


