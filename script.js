const scroll = new LocomotiveScroll({
    el: document.querySelector('#Main'),
    smooth: true
});


function loadinganimation(){
    gsap.from(".Main",{
        y:35,
        opacity:0,
        delay:0.5,
        duration : 0.8,
        stagger:0.1
    })
}

loadinganimation()

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})

function sidebar(){
    const button = document.querySelector('.part3')
    const buttonIcon = document.querySelector('.part3 i')
    const Menu = document.querySelector('.drop')

    button.onclick = function (){
        Menu.classList.toggle('open')
        const isOpen = Menu.classList.contains('open')

        buttonIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        :'fa-solid fa-bars'
    }
}

sidebar()