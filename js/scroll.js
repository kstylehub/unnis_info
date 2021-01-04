// scroll event
window.addEventListener('scroll', scrollWork, {
    passive: true
})

const html = document.querySelector('html');
const cosmeticLis = document.querySelectorAll('#cosmetic_box li')
const calendarTexts = document.querySelectorAll('.calendar_text')

function scrollWork() {

    if (html.scrollTop > 1700 && html.scrollTop < 1800) {

        for (i = 0; i < calendarTexts.length; i++) {
            calendarTexts[i].classList.add('ani')
        }
    } else if (html.scrollTop > 1000 && html.scrollTop < 1400) {

        for (i = 0; i < cosmeticLis.length; i++) {
            cosmeticLis[i].classList.add('ani')
        }
    }
}

// navigation
const hamburgerBtn = document.querySelector('.hamburger')
const navUl = document.querySelector('.nav_wrap ul')
console.log(navUl)

hamburgerBtn.addEventListener('click', () => {

    // 클릭하면 바뀌고 한번 더 클릭하면 원상태로
    if (!hamburgerBtn.classList.contains('toggle')) {
        hamburgerBtn.classList.add('toggle');
        navUl.classList.add('on')
    } else {
        hamburgerBtn.classList.remove('toggle')
        navUl.classList.remove('on')
    }
});