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
// Call the function
typeWriter();
