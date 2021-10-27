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