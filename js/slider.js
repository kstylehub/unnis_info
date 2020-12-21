const tabs = document.querySelectorAll(".slider_tab a i")
const sliderLis = document.querySelectorAll(".slider_img_text li")
const sliderImgs = document.querySelectorAll(".slider_img_text img")
const sliderText = document.querySelectorAll(".slider_img_text li > div")
const tabTitle = document.querySelector(".tab_title")
const tabDesc = document.querySelector('.tab_desc')
const tabImg = document.querySelector('.tab_img')

// tads 첫번째껄 누르면 display none에서 block으로 바뀜

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', clickWork)
}

function clickWork(e) {
    e.preventDefault();

    console.log(e.target.tagName)

    // 만약 첫번째탭을 눌렀으면 첫번째 li는 display block으로 바꾸고
    // 나머지 li들은 display none으로 바꾼다

    // target의 태그네임이 I가 아니면 나가라

    console.log(e.target.tagName)
    if (e.target.tagName !== "I") {
        return;
    } else {
        for (let i = 0; i < tabs.length; i++) {
            if (e.target === tabs[i]) {
                tabs[i].className = "far fa-check-circle"
            } else {
                tabs[i].className = "far fa-circle"
            }
        }
    }
}

let tabContent = [{
        tabTitle: '1번 누름',
        tabDesc: '1번 설명 오브젝트에서 가져옴 길게 길게 한번 해볼까',
        tabImg: 'images/todolist.png'
    },
    {
        tabTitle: '2번 누름',
        tabDesc: '2번 설명',
        tabImg: 'images/item.png"'
    },
    {
        tabTitle: '3번 누름',
        tabDesc: '3번 설명',
        tabImg: 'images/review.png'
    }]

console.log(tabContent[0].tabTitle)

document.querySelector('.slider_tab li:nth-child(1)').addEventListener('click', () => {
    tabTitle.textContent = tabContent[0].tabTitle
    tabDesc.textContent = tabContent[0].tabDesc
    tabImg.src = tabContent[0].tabImg
})

document.querySelector('.slider_tab li:nth-child(2)').addEventListener('click', () => {
    tabTitle.textContent = "2번 눌름"
    tabDesc.textContent = "2번의 설명임"
    tabImg.src = "images/item.png"
})

document.querySelector('.slider_tab li:nth-child(3)').addEventListener('click', () => {
    tabTitle.textContent = "3번 눌름"
    tabDesc.textContent = "3번의 설명임"
    tabImg.src = "images/review.png"
})


// 자동 슬라이딩
setInterval(function () {

    // 만약 class list에 on이 있으면 다음칭구한테 on을 줘라
    for (let i = 0; i < sliderLis.length; i++) {
        if (sliderLis[i].classList.contains('on')) {
            sliderLis[i].nextElementSibling.classList.add('on');
            sliderLis[i].classList.remove('on')
        }
    }
}, 10000);