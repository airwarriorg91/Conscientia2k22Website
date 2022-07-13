const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
});

window.onload=function(){
    window.addEventListener('scroll', function(e){
        if(window.PageYOffset >100){
            document.querySelector("menu").classList.add('is-scrolling');
        }else{
            document.querySelector("menu").classList.remove('is-scrolling');
        }
    });

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })
};

