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