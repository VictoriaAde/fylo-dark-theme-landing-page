
document.querySelector('.navMenu-icons').addEventListener('click', function mobileMenu(){
    var el = document.querySelector(".navList-con");

     if (el.classList.contains('responsive')) {
        el.classList.remove('responsive');
        document.querySelector('.menuIcon').style.display = 'block';
        document.querySelector('.menuClose').style.display = 'none';
    } else {
        el.classList.add('responsive');
        document.querySelector('.menuIcon').style.display = 'none';
        document.querySelector('.menuClose').style.display = 'block';
    }
});


// function mobileMenu() {
//     var toggler = document.querySelector(".navList-con");
//     if (toggler.classList.contains('responsive')) {
//         toggler.classList.remove('responsive');
//         document.querySelector('.menuIcon').style.display = 'none';
//         document.querySelector('.menuClose').style.display = 'block';
//     } else {
//         toggler.classList.add('responsive');
//         document.querySelector('.menuIcon').style.display = 'block';
//         document.querySelector('.menuClose').style.display = 'none';
//     }
// }
