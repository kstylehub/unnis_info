const reviewWrap = document.querySelector('.review_slider_wrap');

const reviewContents = [{
        img: `images/which1.jpg`,
        pid: `Den**`,
        desc: `Biasanya, aku selalu ingin membeli banyak produk kosmetik Korea, tentu saja akan lebih menyenangkan jika aku bisa membelinya dengan harga murah setiap bulan. Rasanya seperti mendapatkan hadiah, aku pun menantikannya setiap bulan~ Aku juga bisa langsung mendapatkan produk sample saat mendaftar. Aku ingin segera memakai produknya. 
        `
    },
    {
        img: `images/lime1.jpg`,
        pid: `Fe**`,
        desc: `Belakangan ini aku tidak memakai banyak riasan karena harus mengenakan masker. Aku takut bedakku luntur, tapi kemudian aku dapat rekomendasi produk cushion yang bagus!
        Kalau bisa mendapatkan produk yang kubutuhkan setiap bulan seperti ini, aku nggak perlu lagi pusing belanja produk kosmetik. Sangat recommended!`
    },
    {
        img: `images/which2.jpg`,
        pid: `Gra**`,
        desc: `Aku tertarik dengan produk kosmetik Korea, dan saat kudengar ada layanan pengiriman reguler untuk kosmetik korea, tanpa ragu aku pun berlangganan.
        Aku punya kulit yang sensitif, tapi aku sangat senang karena disini aku bisa mendapatkan produk yang cocok dengan kulitku.
        Aku sudah mendapatkan paket Ampoule Mask Pack dan itu membuat kulitku tetap lembab.`
    },
    {
        img: `images/lime2.jpg`,
        pid: `Jennif**`,
        desc: `Awalnya, aku memakai app ini untuk mencari tahu skin tone-ku.
        Tapi kemudian aku sangat senang karena mendapatkan rekomendasi produk yang sesuai dengan skin tone-ku tanpa harus pusing memilih.
        Cushionnya membuat kulitku tetap lembab, punya kemampuan covering yang bagus dan casenya sangat mewah dan cantik.
        Aku ingin terus menggunakan lebih banyak lagi produk kosmetik Korea.`
    },
    {
        img: `images/which3.jpg`,
        pid: `Katri**`,
        desc: `Aku sangat senang karena bisa menjadi tester. Aku memiliki kulit yang sangat sensitif, tapi aku jadi sangat yakin saat mendapat rekomendasi dan juga kiriman produk kosmetik yang benar-benar cocok. Aku akan memakai produknya dan kembali untuk memberikan ulasan lainnya! `
    },
    {
        img: `images/lime3.jpg`,
        pid: `Aleis**`,
        desc: `Aku ini pengembara yang masih belum bisa menemukan cushion terbaik untuk kulitku. Tapi, saat aku tahu bahwa aku akan mendapatkan kiriman cushion yang cocok dengan kulitku, aku jadi penasaran!! Menurutku, manfaat terbesar UNNIS adalah kemampuannya memberi kemudahan akses pembelian dan rekomendasi produk kosmetik Korea yang bagus! Aku mau berlangganan dan menggunakannya terus-menerus. :-)`
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
    newP.className = 'review'
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

// 100자 이상 ...처리 더보기 버튼 활성

const review = document.querySelectorAll('.review')

console.log(review[0].textContent.length)

// 만약 텍스트 글씨수가 100자가 넘으면 ...처리

var content_txt_short = review[0].textContent.substring(0, 100) + "...";

if (review[0].textContent.length > 100) {
    review[0].style.color = 'red';
}