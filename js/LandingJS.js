async function worker(){
    const scrollController = new ScrollMagic.Controller();

    const gsapScroll = gsap.to('.techStackImage',{opacity:1,duration:1})

    const scrollScene = new ScrollMagic.Scene({
        triggerElement:'.techStackImage',
        duration:'50%'
    }).setTween(gsapScroll).addTo(scrollController)

    await gsap.to('#profileImage',{opacity:1,duration:2})
    await gsap.to('#profileContent',{opacity:1,duration:1})
    await gsap.to('.distHR',{opacity:1,duration:1})
    
}

worker();

