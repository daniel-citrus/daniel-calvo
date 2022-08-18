let toggle = document.getElementById('nav-toggle');
let mobileNavBar = document.querySelector('.mobile-nav-bar');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    mobileNavBar.classList.toggle('active');
})