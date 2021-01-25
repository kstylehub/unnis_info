const tabs = document.querySelectorAll(".slider_tab li")
const sliderLis = document.querySelectorAll(".slider_img_text li")
const sliderImgs = document.querySelectorAll(".slider_img_text img")
const sliderText = document.querySelectorAll(".slider_img_text li > div")
const tabTitle = document.querySelector(".tab_title")
const tabDesc = document.querySelector('.tab_desc')
const tabImg = document.querySelector('.tab_img')

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', clickWork)
}

function clickWork(e) {
    e.preventDefault();

    // 클릭 하지 않은 애들은 on을 떼라
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].classList.contains('on')) {
            tabs[i].classList.remove('on')
        }
    }
    // 클릭하면 클래스 on을 붙이고 
    e.target.parentNode.classList.add('on')
}

// SLIDER CONTENTS
let tabContent = [{
        tabTitle: '1 Calendar',
        tabDesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
        tabImg: 'images/calender.png'
    },
    {
        tabTitle: '2 Cosmetic',
        tabDesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
        tabImg: 'images/item.png'
    },
    {
        tabTitle: '3 todolist',
        tabDesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
        tabImg: 'images/todolist.png'
    },
    {
        tabTitle: '3 recommend',
        tabDesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
        tabImg: 'images/recommend.png'
    }
]

console.log(tabContent[0].tabTitle)

for (let i = 0; i < tabContent.length; i++) {

    document.querySelector(`.slider_tab li:nth-child(${i+1})`).addEventListener('click', () => {
        tabTitle.textContent = tabContent[i].tabTitle
        tabDesc.textContent = tabContent[i].tabDesc
        tabImg.src = tabContent[i].tabImg
    })
}

// 자동 슬라이딩

let imgIndex = 0;

function changeImg() {

    // classname에 on이 붙어 있으면 온을 차례대로 붙이고 초기화
    // li class에 on이 있으면 다음번에 다음애한테 클래스 온을 붙여라

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('on')
    }

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].indexNum = i

        if (tabs[i].classList.contains('on')) {

            const Index = tabs[i].indexNum
            tabs[Index].className = 'on'
        }
    }

    // 타이틀, 사진, 설명은 순서대로 변경됨
    tabTitle.textContent = tabContent[imgIndex].tabTitle
    tabDesc.textContent = tabContent[imgIndex].tabDesc
    tabImg.src = tabContent[imgIndex].tabImg

    imgIndex++
    if (imgIndex >= tabContent.length) {
        imgIndex = 0
    }
}

setInterval(changeImg, 5000)


