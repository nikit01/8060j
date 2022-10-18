
const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav_btn');
const navBtnImg = document.querySelector('#nav_btn_img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav_close.svg";
    } else {
        navBtnImg.src = './img/icons/NAV.svg';
    }
}

AOS.init();