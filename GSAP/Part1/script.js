
// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     repeat:-1,
//     yoyo:true
// })

// gsap.from("#box2" , {
//      x:1000,
//      duration:2,
//      delay:2
// })


// gsap.from("h1" , {
//      opacity:0,
//      duration:2,
//      delay:1,
//      y:20,
//      stagger:1
   
// })


var tl = gsap.timeline()
var t2 = gsap.timeline()

// tl.to("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,

// })
// tl.to("#box2",{
//     x:1000,
//     duration:2,
//     rotate:360,

// })


tl.from(".Logo" , {
     opacity:0,
     y:-20,
     duration:1.3,
     
})
t2.from(".Links p" , {
     opacity:0,
     y:-30,
     duration:1.3,
     stagger:0.2
})