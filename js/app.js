const pointer = document.querySelector(".cursor");
const hamburger = document.querySelector(".hamburger");
const logoSvg = document.querySelector(".logo-svg");
const headerLinks = document.querySelector(".header-links");
const prank = document.querySelectorAll(".prank");
const img = document.querySelectorAll(".image");
const links = document.querySelectorAll(".links");
const cards = gsap.utils.toArray('.card')

logoSvg.addEventListener('mouseover',()=>{
    gsap.fromTo('.logo-svg',0.1,{scaleY:1},{scaleY:2})
})
logoSvg.addEventListener('mouseleave',()=>{
    gsap.fromTo('.logo-svg',0.1,{scaleY:2},{scaleY:1})
})
cards.forEach(test => {
    gsap.from(test,0.5,{opacity:0,y:200,scrollTrigger:{
        trigger:test
    }});
});
gsap.from('.logo-svg',1,{opacity:0,y:-50});
gsap.from('.hero-left',1,{opacity:0,y:50});

gsap.fromTo('.hero-button',1,{opacity:0},{opacity:1})
gsap.fromTo('.hero-img',0.5,{clipPath:"circle(0% at 50% 50%)"},{clipPath:"circle(70.5% at 50% 50%)"})

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
img.forEach(x => {
    x.addEventListener('mouseover', () => {
        pointer.classList.add('cursor-over-img')
    })
    x.addEventListener('mouseleave', () => {
        pointer.classList.remove('cursor-over-img')
    })
})
prank.forEach(x => {
    x.addEventListener('mouseover', () => {
        pointer.classList.add('cursor-over-prank')
    })
    x.addEventListener('mouseleave', () => {
        pointer.classList.remove('cursor-over-prank')
})
})