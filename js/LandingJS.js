async function worker(){
    const techStackScrollController = new ScrollMagic.Controller();
    const techStackScroll = gsap.to('.techStackImage',{opacity:1,duration:1})

    const scrollScene = new ScrollMagic.Scene({
        triggerElement:'.distHR',
        duration:'50%'
    }).setTween(techStackScroll).addTo(techStackScrollController)

    const recordScorllController = new ScrollMagic.Controller();

    const recordScroll = gsap.to('.recordListContainer',{opacity:1,top:0,duration:2})

    const recordScrollScene = new ScrollMagic.Scene({
        triggerElement:'.distHR2',
        duration:'50%'
    }).setTween(recordScroll).addTo(recordScorllController);

    await gsap.to('#profileImage',{opacity:1,duration:2})
    await gsap.to('#profileMe',{opacity:1,duration:1})
    await gsap.to('#profileInfo',{opacity:1,duration:1})
    await gsap.to('.distHR',{opacity:1,duration:1})
    
}

const profileElem = document.getElementById('profileArea')
const skillsElem = document.getElementById('distHR')
const recordsElem = document.getElementById('distHR2')

const moveToProfile = () =>{
    profileElem.scrollIntoView({behavior:"smooth"});
}

const moveToSkills = () =>{
    skillsElem.scrollIntoView({behavior:"smooth"});
}

const moveToRecords = () =>{
    recordsElem.scrollIntoView({behavior:"smooth"});
}


worker();

