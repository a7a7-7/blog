const progress = document.getElementById("progress");
const docElement = document.documentElement;
const possibleScrollHeight = docElement.scrollHeight - docElement.clientHeight;
const paragraph = document.querySelectorAll(".paragraph");

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
    threshold: 0.1 // 이미지가 10%라도 화면에 보이면 반응
});
  
paragraph.forEach(para => {
    observer.observe(para);
});