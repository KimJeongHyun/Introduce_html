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