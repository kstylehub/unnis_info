const reviewWrap = document.querySelector('.review_slider_wrap');
console.log(reviewWrap)

const reviewContents = [{
        img: `http://placekitten.com/200/201`,
        pid: `yesol`,
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        img: `http://placekitten.com/200/200`,
        pid: `yesol`,
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        img: `http://placekitten.com/200/201`,
        pid: `yesol`,
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        img: `http://placekitten.com/200/200`,
        pid: `yesol`,
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        img: `http://placekitten.com/200/201`,
        pid: `yesol`,
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        img: `http://placekitten.com/200/200`,
        pid: `yesol`,
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
];

for (let i = 0; i < reviewContents.length; i++) {
    const newWrapDiv = document.createElement('div');
    const newWDiv = document.createElement('div');
    const newWImg = document.createElement('img');
    const newWH6 = document.createElement('h6');
    const newP = document.createElement('p');

    reviewWrap.appendChild(newWrapDiv)
    newWrapDiv.appendChild(newWDiv)
    newWDiv.appendChild(newWImg)
    newWDiv.appendChild(newWH6)
    newWDiv.appendChild(newP)
    
    newWrapDiv.classList.add('review_img_text')

    newWImg.src = reviewContents[i].img
    newWH6.textContent = reviewContents[i].pid
    newP.textContent = reviewContents[i].desc
}

// 슬릭 슬라이더 리뷰 섹션
$(document).ready(function () {

    //alert('123');

    $('.review_slider_wrap').slick({
        autoplay: true,
        dots: true,
        speed: 300 /* 이미지가 슬라이딩시 걸리는 시간 */ ,
        infinite: true,
        autoplaySpeed: 3000 /* 이미지가 다른 이미지로 넘어 갈때의 텀 */ ,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 400, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 1
                }
            }
        ]
    });

});