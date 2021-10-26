// Navbar functions

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

const refresh = () =>{
    window.location.reload();
}


// loading circle progress bar

const bar = document.querySelector('.bar')
const value = document.querySelector('.value')
const dots = document.getElementsByClassName('loadingDot')

const RAD = 54;

const CIRCUMFERENCE = 2* Math.PI * RAD;

bar.style.strokeDasharray = CIRCUMFERENCE;
bar.style.strokeDashoffset = 339.292;

// loading dot

// MutationObserver monitors attribute's status.

var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutationRecord){
        value.innerHTML = Math.floor((Math.abs(Math.floor(bar.style.strokeDashoffset-340)/340))*100)+'%'
    })
})


observer.observe(bar,{attributes:true,attributeFilter:['style']})

// window scroll event

const topBtn = document.querySelector('.topBtn');
const openFooter = document.querySelector('.openFooter')


document.addEventListener('scroll',function(){
    if (window.outerHeight*0.7<window.scrollY){
        gsap.to(topBtn,{opacity:1,display:'',duration:0.5})
    }else{
        gsap.to(topBtn,{opacity:0,display:'none',duration:0.5})
    }
})

const scrollTween = gsap.to(".customScrollBar", {yPercent: 800, ease: "none", paused: true});

function updateScrollBar() {
  scrollTween.progress(scrollY / (document.body.scrollHeight - innerHeight));
}
window.addEventListener("resize", updateScrollBar);
window.addEventListener("scroll", updateScrollBar);

// openFooter modal

const openFooterText = document.querySelector('.openFooterText')

const openFooterModal = () =>{
    console.log('hi!')
    openFooterText.style.opacity='1'
    openFooter.style.top='0px'
    openFooterText.style.top='0px'
}

const leaveFooterModal = () =>{
    console.log('bye!');
    openFooterText.style.opacity='0'
    openFooter.style.top='15px'
    openFooterText.style.top='15px'
}

// openFooter func

const footer = document.querySelector('.footer')

const openFooterFunc = async () =>{
   footer.style.display='block';
   openFooter.style.opacity='0';
   openFooter.style.display='none';
   openFooterText.style.display='none';
   await gsap.to(footer,{top:'30px',opacity:'1',height:'300px',duration:0.5})
   footer.scrollIntoView({behavior:"smooth"})
   
}

const closeFooterFunc = async () =>{
    await gsap.to(footer,{opacity:'0', top:'0', duration:0.5})
    await document.querySelectorAll('.recordList')[4].scrollIntoView({behavior:'smooth'})
    gsap.to(footer,{display:'none'})
    gsap.to(openFooter,{opacity:'1',display:'', duration:1})
    gsap.to(openFooterText,{display:'',duration:1})
}


// async X await gsap animate

async function worker(){
    const scrollController = new ScrollMagic.Controller();
    const techStackScroll = gsap.to('.techStackImage',{opacity:1})

    const techStackScrollScene = new ScrollMagic.Scene({
        triggerElement:'.distHR',
        duration:'50%'
    }).setTween(techStackScroll).addTo(scrollController)

    const recordScroll = gsap.to('.recordListContainer',{opacity:1,top:0})

    const recordScrollScene = new ScrollMagic.Scene({
        triggerElement:'.distHR2',
        duration:'50%'
    }).setTween(recordScroll).addTo(scrollController);


    /*
    let tl = gsap.timeline();
    await tl.add('start')
    .to('.bar',{strokeDashoffset:0,duration:2.5})
    .to('.loadingText',{opacity:1,duration:2.5},'start')
    .to('.loadingDot1',{opacity:1,duration:0.8})
    .to('.loadingDot2',{opacity:1,duartion:1.6})
    .to('.loadingDot3',{opacity:1,duration:2.4})                // animates with the same label operate with each other.
    .to('.loadingDiv',{opacity:0,display:'none',autoAlpha:1,duration:1})
    .to('.rootDiv',{display:'block',autoAlpha:1, duration:1})              // timeline operates like async/await. */

    gsap.to('.bar',{strokeDashoffset:0,duration:2})
    gsap.to('.loadingText',{opacity:1,duration:2})
    await gsap.to('.loadingDot1',{opacity:1,duration:1.0})
    await gsap.to('.loadingDot2',{opacity:1,duration:1.0})
    await gsap.to('.loadingDot3',{opacity:1,duration:1.0})  
    await gsap.to('.loadingDiv',{opacity:0,display:'none',autoAlpha:1,duration:1})
    await gsap.to('.rootDiv',{display:'block',autoAlpha:1, duration:1})
    await gsap.to('#profileImage, .customScrollBarWrapping',{opacity:1,duration:1})
    await gsap.to('#profileMe',{opacity:1,duration:1})
    await gsap.to('#profileInfo',{opacity:1,duration:1})
    await gsap.to('.distHR',{opacity:1,duration:1})
}

worker();

// !important. if define operations globally, it will starts from initial rendering.
// Therefore, we have to create funcs locally and order them properly.