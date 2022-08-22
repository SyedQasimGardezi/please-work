const pointer = document.querySelector(".cursor");
const headerLinks = document.querySelector(".header-links");
const hamburger = document.querySelector(".hamburger");
const logoSvg = document.querySelector(".logo-svg");
const links = document.querySelectorAll(".links");
const pp = document.querySelector('#pp');
const ppsvg = document.querySelector('.pp-svg');

ppsvg.addEventListener('click',()=>{
    pp.classList.toggle('fuck');
})
logoSvg.addEventListener('mouseleave',()=>{
    gsap.fromTo('.logo-svg',0.1,{scaleY:2},{scaleY:1})
})
window.addEventListener('mousemove', cursor);
function cursor(e) {
    pointer.style.top = e.pageY + "px";
    pointer.style.left = e.pageX + "px";
}
hamburger.addEventListener('click',()=>{
    headerLinks.classList.toggle("header-links-x");
})
links.forEach(x => {
    x.addEventListener('mouseover', () => {
        pointer.classList.add('cursor-over-nav')
    })
    x.addEventListener('mouseleave', () => {
        pointer.classList.remove('cursor-over-nav')
    })
})