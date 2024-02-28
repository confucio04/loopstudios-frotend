document.addEventListener('DOMContentLoaded', function(){

    let menu = document.getElementById('menu');
    let openMenu = document.getElementById('open-menu');
    let closeMenu = document.getElementById('close-menu');
    let navMenu = document.querySelector('.loopstudios-navigation___desktop');
    let overlayNav =  document.querySelector('.overlay__mobile');

    menu.addEventListener('change', function(){

         navMenu.classList.toggle('nav-open');
         overlayNav.classList.toggle('overlay-open');

       if(menu.checked){
            openMenu.style.display = "none";
            closeMenu.style.display = "block";
        }
        else{
            openMenu.style.display = "block";
            closeMenu.style.display = "none";
        }
    });

    


})