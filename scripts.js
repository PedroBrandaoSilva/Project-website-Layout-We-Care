
const sideBar = document.querySelector('.sidebar')
const menuIcon = document.querySelector('.all-menus')
const menuMobile = document.querySelector('.mobile-menu')
const buttonMobile = document.querySelector('.button-mobile')

 function showMenu(){
    sideBar.classList.toggle('active')
    menuIcon.classList.toggle('active')
    buttonMobile.classList.toggle('active')
    menuMobile.classList.toggle('active')
    
    if(menuMobile.classList.contains('active')){
        menuMobile.style.transitionDelay = '0.2s'
    }else{
      menuMobile.style.transitionDelay = '0s'  
    }

    
 }   










