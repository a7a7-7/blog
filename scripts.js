const progress = document.getElementById("progress");
const docElement = document.documentElement;
const possibleScrollHeight = docElement.scrollHeight - docElement.clientHeight;
const paragraph = document.querySelectorAll(".paragraph");
const articleImageWrapper = document.querySelectorAll(".image-wrapper");
const articleImage = document.querySelectorAll(".article-img");
const imageOverlay = document.querySelectorAll(".img-overlay");

window.addEventListener('scroll', function(){
    let scrolledHeight = docElement.scrollTop;
    let percent = (scrolledHeight / possibleScrollHeight) * 100
    progress.style.width = `${percent}%`
    
})

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    } else if(!entry.target.classList.contains('visible')) {
    entry.target.classList.remove('visible');
    }
});
}, {
    threshold: 0.2
});

articleImageWrapper.forEach((image, index) => {
    image.addEventListener("click", () => {
        image.scrollIntoView({behavior: "smooth", block: "center"});
        imageOverlay[index].classList.add("visible");
        document.body.style.overflow = 'hidden';
        image.classList.add("ontop");
        image.classList.add("hover-disabled");
        image.classList.add("move-x");
    })
})

imageOverlay.forEach((overlay, index) => {
    overlay.addEventListener("click", ()=> {
        overlay.classList.remove("visible")
        document.body.style.overflow = 'scroll';
        articleImageWrapper[index].classList.remove("hover-disabled");
        articleImageWrapper[index].classList.remove("move-x");
        articleImageWrapper[index].classList.remove("ontop");
    })
})
  
paragraph.forEach(para => {
    observer.observe(para);
});