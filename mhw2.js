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
    

    if (personalMenu.dataset.display === 'hidden') {
        if (notifyMenu.style.display === 'flex') {
            notifyMenu.style.display = 'none';
            notifyMenu.dataset.display = 'hidden';
        }
        personalMenu.style.display = 'flex';
        personalMenu.dataset.display='show';
        console.log('Setto display show');
    } else {
        personalMenu.dataset.display='hidden';
        personalMenu.style.display = 'none';
        console.log("Setto display hidden")
    }
});


let changeButton = document.querySelector('[data-action="change-picture"]');
let pic = document.querySelector('#profpic');
let menuPic = document.querySelector('#profpic-menu');
let imageList = ['pf1.jpg', 'pf2.jpg', 'pf3.jpg']; 

let lastImage = null;

changeButton.addEventListener('click', () => {
    let randomImage;
    do {
        randomImage = imageList[Math.floor(Math.random() * imageList.length)];
    } while (randomImage === lastImage);

    pic.src = randomImage;
    menuPic.src = randomImage;
    lastImage = randomImage;
});



const notifyButton = document.querySelector('#notify-button');
const notifyMenu = document.querySelector('.notify-menu');

notifyButton.addEventListener('click', () => {

    if (notifyMenu.dataset.display === 'hidden') {
        if (personalMenu.style.display === 'flex') {
            personalMenu.style.display = 'none';
            personalMenu.dataset.display = 'hidden';
        }
        notifyMenu.style.display = 'flex';
        notifyMenu.dataset.display='show';
        if (!notifyMenu.querySelector('p')) {
            let notifyContent = document.createElement('p');
            notifyContent.textContent = 'Nessuna notifica';
            notifyMenu.appendChild(notifyContent);
        }
        console.log('Setto display show');
    } else {
        notifyMenu.dataset.display='hidden';
        notifyMenu.style.display = 'none';
        console.log("Setto display hidden")
    }
});


function nascontiContenuti(dataType) {
    document.querySelectorAll(`h1[data-type="${dataType}"] img`).forEach(img => {
        img.addEventListener('click', () => {
            document.querySelectorAll(`.sidebar-h[data-type="${dataType}"]`).forEach(sidebar => {
                let sidebarDisplay = getComputedStyle(sidebar).display;
                
                if (sidebarDisplay === 'none') {
                    sidebar.style.display = 'flex';
                    img.dataset.type = 'down';
                    console.log('A');
                } else {
                    sidebar.style.display = 'none';
                    img.dataset.type = 'up';
                    console.log('B');
                }
            });
        });
    });
}

// Example usage:
nascontiContenuti('Tu');
nascontiContenuti('channel');
