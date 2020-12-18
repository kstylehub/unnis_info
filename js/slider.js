const tabs = document.querySelectorAll(".slider_tab a i")
const sliderLis = document.querySelectorAll(".slider_img_text li")
const sliderImgs = document.querySelectorAll(".slider_img_text img")
const sliderText = document.querySelectorAll(".slider_img_text li > div")

// tads 첫번째껄 누르면 display none에서 block으로 바뀜

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', clickWork)
}

function clickWork(e) {
    e.preventDefault();

    // 만약 첫번째탭을 눌렀으면 첫번째 li는 display block으로 바꾸고
    // 나머지 li들은 display none으로 바꾼다

    for (let i = 0; i < tabs.length; i++) {
        if (e.target === tabs[i]) {
            sliderLis[i].classList.add('on');
            tabs[i].className = "far fa-check-circle"
        } else {
            sliderLis[i].classList.remove('on');
            tabs[i].className = "far fa-circle"
        }
    }
}

// 자동 슬라이딩
setInterval(function () {

    // 만약 class list에 on이 있으면 다음칭구한테 on을 줘라
    for (let i = 0; i < sliderLis.length; i++) {
        if(sliderLis[i].classList.contains('on')){
            sliderLis[i].nextElementSibling.classList.add('on');
            sliderLis[i].classList.remove('on')
        }
    }    
}, 10000);