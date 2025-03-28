let element = document.querySelector('#button-menu');
const layout = document.querySelector('.central-layout');

element.addEventListener('click', () => {
    let sidebarContent = document.querySelector('.left-sidebar');
    let currentDisplay = getComputedStyle(sidebarContent).display;

    if (currentDisplay === 'none') {
        sidebarContent.style.display = 'block';
    } else {
        sidebarContent.style.display = 'none';
    }
});
