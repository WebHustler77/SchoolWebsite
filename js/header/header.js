const burgerIcon = document.querySelector('.burger-icon')
const menuList = document.querySelector('.menu-box')

burgerIcon.addEventListener('click', () => {
    showMenu();
});

function showMenu() {
    menuList.classList.toggle('hidden');
    burgerIcon.style.tra
};
