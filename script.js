let next1 = document.querySelector('.next-1')
let prev1 = document.querySelector('.prev-1')

next1.addEventListener('click', function(){
    let items = document.querySelectorAll('.item-skills')
    document.querySelector('.slide').appendChild(items[0])
})

prev1.addEventListener('click', function(){
    let items = document.querySelectorAll('.item-skills')
    document.querySelector('.slide').prepend(items[items.length - 1])
})



let next2 = document.querySelector('.next-2')
let prev2 = document.querySelector('.prev-2')

next2.addEventListener('click', function(){
    let items = document.querySelectorAll('.item-ex')
    document.querySelector('.slide-ex').appendChild(items[0])
})

prev2.addEventListener('click', function(){
    let items = document.querySelectorAll('.item-ex')
    document.querySelector('.slide-ex').prepend(items[items.length - 1])
})

// responsive for navbar
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});


// navbar transition
const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if (window.scrollY > 1) {
        navbar.classList.replace('navbar', 'navbar-scroll');
    } else if (this.window.scrollY <= 0) {
        navbar.classList.replace('navbar-scroll', 'navbar');
    }
});

const navlist = document.getElementsByTagName('ul')[0];
window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if (window.scrollY > 1) {
        navlist.classList.replace('nav-list-scroll', 'nav-list');
    } else if (this.window.scrollY <= 0) {
        navlist.classList.replace('nav-list', 'nav-list-scroll');
    }
});