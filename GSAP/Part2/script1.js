
gsap.from("#One .Box" , {
    scale:0,
    delay:2, 
    duration:2,
})
gsap.from("#Two .Box" , {
    scale:0,
    delay:1, 
    duration:2,
    scrollTrigger:{
        trigger: "#Two .Box",
        scroller:"body",
        markers:true ,
        start:"top 60%",
        end:"top 30%",
        scrub:2 
    }
})