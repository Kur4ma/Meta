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