window.addEventListener("DOMContentLoaded",()=>{
const inputPhone = document.querySelectorAll("input[type=text]"),
    wrapper = document.querySelector(".popup__call-phoneblock"),
    triggerOpen = document.querySelectorAll(".popup__call-wrap");
    triggerOpen.forEach((button)=>{
        button.addEventListener('click',()=>{
            let nextElement = button.parentElement.nextElementSibling,
                arrow = button.querySelector(".popup__call-svg");
            arrow.classList.add("popup__call-svg-active");
            nextElement.style.visibility = "visible";
       })
    });
    inputPhone.forEach((phone)=>{
        phone.addEventListener('click',()=>{
            let parent = phone.parentElement;
            if(parent.classList.contains('popup__call-phone-hidden')){
                parent.classList.remove('popup__call-phone-hidden');
            }else{
                parent.classList.add('popup__call-phone-hidden');
            }

        })
    })


})