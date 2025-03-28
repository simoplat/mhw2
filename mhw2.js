const element = document.querySelector('#button-menu');
const layout = document.querySelector('.central-layout');

element.addEventListener('click', () => {
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
});
