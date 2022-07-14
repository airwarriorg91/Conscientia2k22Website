window.addEventListener('scroll', function(){
        var header = document.querySelector("nav");
        header.classList.toggle("sticky", window.scrollY>0);
    });

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });

let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.remove()
      }, 100);
    });
  }