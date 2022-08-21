const pointer = document.querySelector(".cursor");
const hamburger = document.querySelector(".hamburger");
const headerLinks = document.querySelector(".header-links");
const prank = document.querySelector(".prank");
const img = document.querySelectorAll(".image");
const links = document.querySelectorAll(".links");
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
prank.addEventListener('mouseover', () => {
    pointer.classList.add('cursor-over-prank')
})
prank.addEventListener('mouseleave', () => {
    pointer.classList.remove('cursor-over-prank')
})