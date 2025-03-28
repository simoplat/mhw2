const buttonMenuLines = document.querySelector('#button-menu');
const layout = document.querySelector('.central-layout');

buttonMenuLines.addEventListener('click', () => {
    let sidebarContent = document.querySelector('.left-sidebar');
    let currentDisplay = getComputedStyle(sidebarContent).display;

    if (currentDisplay === 'none') {
        sidebarContent.style.display = 'block';
        layout.style.width ='calc(100vw - 300px)'; 
        layout.style.height ='calc(100vh - 60px)'; 
        layout.style.left = '300px'; 
    } else {
        sidebarContent.style.display = 'none';
        layout.style.left = '0px';
        layout.style.width ='100%';
        layout.style.height ='100%';
    }
})


const buttonProfile = document.querySelector('#button-profile');
const personalMenu = document.querySelector('.personal-menu');

buttonProfile.addEventListener('click', () => {
    let currentDisplay = getComputedStyle(personalMenu).display;

    if (currentDisplay === 'none' || currentDisplay === '') {
        personalMenu.style.display = 'flex';
    } else {
        personalMenu.style.display = 'none';
    }
});


let changeButton = document.querySelector('[data-action="change-picture"]');
let pic = document.querySelector('#profpic');
let menuPic = document.querySelector('#profpic-menu');
let imageOptions = ['pf1.jpg', 'pf2.jpg', 'pf3.jpg']; 

let lastImage = null;

changeButton.addEventListener('click', () => {
    let randomImage;
    do {
        randomImage = imageOptions[Math.floor(Math.random() * imageOptions.length)];
    } while (randomImage === lastImage);

    pic.src = randomImage;
    menuPic.src = randomImage;
    lastImage = randomImage;
});
