const newsCards = document.querySelectorAll('.news-card')
newsCards.forEach((e)=>{
    e.addEventListener('click',()=>{
        removeActiveNewsCard()
        e.classList.add('active')
    })
})
function removeActiveNewsCard(){
    newsCards.forEach((e)=>{{
        e.classList.remove('active')
    }})
}
var text = "اَلتَّعْلِيمُ رِسَالَةً وَلَيْسَ تِجَارَةً";
var i = 0;
var speed = 75;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("quote").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
var writerChecker = true
function writerActivate(){
    if(writerChecker){
        typeWriter()
    }
}
window.onscroll = ()=>{
    if(window.scrollY >= 700){
        writerActivate();
        writerChecker = false
    }
    if(window.scrollY >= 330){
        document.querySelector('.news .main-heading').classList.add('active')
        document.querySelector('.news-cards').classList.add('active')
    }
    if(window.scrollY >= 900){
        document.querySelector('.numbers .main-heading').classList.add('active')
        document.querySelectorAll('.numbers .number-card').forEach((e)=>{e.classList.add('active')})
    }
    if(window.scrollY >= 1400){
        document.querySelector('.semi-footer h1').classList.add('active')
        document.querySelector('.semi-footer p').classList.add('active')
    }
}