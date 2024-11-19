const menu = document.querySelector('.nav_open')
const menuBtn = document.querySelector('.m_nav')
const header = document.querySelector('header')
const logo = document.querySelector('.header_t h1 a')
const album = document.querySelector('#album')
let boolean = true


header.style.transition = 'all 0.3s linear'
window.addEventListener('scroll',function(){
// console.log(window.pageYOffset)
    if(window.pageYOffset > album.offsetTop-100){
        // for(let i of header){i.style.backgroundColor = 'rgba(255,255,255,0.85)'}
        // for(let i of logo){i.style.backgroundImage = 'url(../images/logo/logo_jg1.svg)'}
        header.style.backgroundColor = 'rgba(255,255,255,1)'
        logo.style.backgroundImage = 'url(../images/logo/logo_jg1.svg)'
        menuBtn.children[0].style.backgroundColor = 'rgba(159, 193, 228,1)'
        menuBtn.children[1].style.backgroundColor = 'rgba(159, 193, 228,1)'
        menuBtn.children[2].style.backgroundColor = 'rgba(159, 193, 228,1)'
    }else{
        // for(let i of header){i.style.backgroundColor = 'none'}
        // for(let i of logo){i.style.backgroundImage = 'url(../images/logo/logo_jw1.svg)'}
        header.style.backgroundColor = 'rgba(255,255,255,0)'
        logo.style.backgroundImage = 'url(../images/logo/logo_jw1.svg)'
        menuBtn.children[0].style.backgroundColor = 'rgba(255, 255, 255,1)'
        menuBtn.children[1].style.backgroundColor = 'rgba(255, 255, 255,1)'
        menuBtn.children[2].style.backgroundColor = 'rgba(255, 255, 255,1)'
    }
})

menu.style.transition = 'all 1s ease';
menuBtn.addEventListener('click',function(e){
    e.preventDefault()
    if(boolean == true){
        this.firstElementChild.style.transform = 'translateY(11px) rotate(45deg)'
        this.lastElementChild.style.transform = 'translateY(-11px) rotate(-45deg)'
        this.lastElementChild.previousElementSibling.style.display = 'none'
        menuBtn.children[0].style.backgroundColor = 'rgba(255, 255, 255,1)'
        menuBtn.children[2].style.backgroundColor = 'rgba(255, 255, 255,1)'
        logo.style.display = 'none'
        menu.style.transform = 'translateX(0)';
        
        
        boolean = false
    }else{
        this.firstElementChild.style.transform = 'none'
        this.lastElementChild.style.transform = 'none'
        this.lastElementChild.previousElementSibling.style.display = 'flex'
        menuBtn.children[0].style.backgroundColor = 'rgba(159, 193, 228,1)'
        menuBtn.children[2].style.backgroundColor = 'rgba(159, 193, 228,1)'
        logo.style.display = 'inline-block'
        menu.style.transform = 'translateX(100%)';

        boolean = true
    }
})