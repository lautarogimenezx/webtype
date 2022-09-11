const nav= document.querySelector('.menu')

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', this.window.scrollY>0)
})