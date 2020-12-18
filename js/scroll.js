window.addEventListener('scroll', scrollWork, {
    passive: true
})

const html = document.querySelector('html');
const cosmeticLis = document.querySelectorAll('#cosmetic_box li')

console.log(cosmeticLis)

function scrollWork(){
    if(html.scrollTop > 1000 && html.scrollTop<1600){

        for(i=0; i<cosmeticLis.length; i++){
            cosmeticLis[i].classList.add('ani')
        }    
    }
}