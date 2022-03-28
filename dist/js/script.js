document.addEventListener('DOMContentLoaded', () => {
    console.log("123")
    const menuItem = document.querySelectorAll('.js-filter-handler'),
    menu = document.querySelector('.cards__filters_action');

    menuItem.forEach(item => {
        item.addEventListener('click',function(e) { 
            e.preventDefault()
            console.log(this)
            menu.classList.toggle('cards__filters_action__active');
        })
    })
})
const iconHeader = document.querySelector('.header__icon');
if (iconHeader) {
    const navHeader = document.querySelector('.header__nav');
    iconHeader.addEventListener("click", function(e) {
        document.body.classList.toggle('.lock');
        iconHeader.classList.toggle('header__icon_active');
        navHeader.classList.toggle('header__nav_active')
    });
}