const tabs = document.querySelectorAll(".slider_tab a")
const sliderImgs = document.querySelectorAll(".slider_img_text img")
const sliderText = document.querySelectorAll(".slider_img_text li > div")

console.log(sliderText)

// tads 첫번째껄 누르면 display none에서 block으로 바뀜

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', clickWork)
}

function clickWork(e) {
    e.preventDefault();

    // 만약 첫번째탭을 눌렀으면 첫번째 li는 display block으로 바꾸고
    // 나머지 li들은 display none으로 바꾼다

    if (tabs[0]) {
        console.log('첫번째클릭')
    } else {
        console.log('다른거클릭')
    }
}