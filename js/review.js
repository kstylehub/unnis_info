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