const toggleBtn = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menubar');
const search = document.querySelector('.navbar__search')

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    search.classList.toggle('active');
});