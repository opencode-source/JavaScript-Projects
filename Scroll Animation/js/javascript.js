const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', showBox)

function showBox() {
    const triggerBottom = window.innerHeight / 1.08;
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
       
        if(boxTop < triggerBottom){
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
        
    });
}