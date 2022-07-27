const menuIcon = document.getElementById('menu-icon')
const closeIcon = document.getElementById('close-icon')
const navbarList = document.getElementById('navbar-list')

navbarList.classList.add('hide-navbar-list') 
closeIcon.style.display = 'none'


menuIcon.addEventListener('click',()=>{
    
    if ( navbarList.classList.contains('hide-navbar-list')){
        menuIcon.style.display = 'none'
        closeIcon.style.display = 'inline'

        navbarList.classList.remove('hide-navbar-list') 
        navbarList.classList.add('show-navbar-list')
    }

})
closeIcon.addEventListener('click',()=>{

    closeIcon.style.display = 'none'
    menuIcon.style.display = 'inline'

    navbarList.classList.remove('show-navbar-list') 
    navbarList.classList.add('hide-navbar-list')   
})
