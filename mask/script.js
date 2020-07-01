window.addEventListener("DOMContentLoaded",()=>{
const inputPhone = document.querySelectorAll(".popup__call-phone"),
    wrapper = document.querySelector(".popup__call-phoneblock"),
    triggerOpen = document.querySelectorAll(".popup__call-wrap");
    triggerOpen.forEach((button)=>{
        button.addEventListener('click',()=>{
            let nextElement = button.parentElement.nextElementSibling,
                arrow = button.querySelector(".popup__call-svg");
            arrow.classList.add("popup__call-svg-active");
            nextElement.style.visibility = "visible";
       });
    });
    inputPhone.forEach((phone)=>{
        phone.addEventListener('click',(e)=>{
            console.log(e.target);
            if(e.target.classList.contains('popup__call-phone-hidden')){
                e.target.classList.remove('popup__call-phone-hidden');
            }
        });
    });

});