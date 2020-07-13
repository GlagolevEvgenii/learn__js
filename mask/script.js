window.addEventListener("DOMContentLoaded", () => {
    let wrapperInputs = document.querySelector(".popup__call-phoneblock");
    wrapperInputs.addEventListener('click', (e) => {
        let inputPhone = document.querySelectorAll(".popup__call-phone"),
            arrow = document.querySelectorAll(".popup__call-svg"),
            changeCountry = document.querySelectorAll('.popup__call-country');
        if (e.target == arrow[0] || e.target == changeCountry[0] || e.target.tagName == "path") {
            if (inputPhone[1].style.visibility == 'visible') {
                inputPhone[1].style.visibility = 'hidden';
            } else {
                inputPhone[1].style.visibility = 'visible';
            }

            if (arrow[0].classList.contains('popup__call-svg-active')) {
                arrow[0].classList.remove('popup__call-svg-active');
            } else {
                arrow[0].classList.add('popup__call-svg-active');
            }
        }

        if (e.target == inputPhone[1] || e.target == arrow[1] || e.target == changeCountry[1] || e.target.classList.contains('secondCountry')) {
            let clonePhone = inputPhone[0].cloneNode(true);
            inputPhone[1].classList.remove('popup__call-phone-hidden');
            inputPhone[1].style.borderBottom = '1px solid black';
            inputPhone[1].getElementsByTagName('input')[0].classList.remove('secondCountry');
            inputPhone[1].getElementsByTagName('input')[0].setAttribute('required', 'true');
            wrapperInputs.removeChild(inputPhone[0]);
            clonePhone.classList.add('popup__call-phone-hidden');
            clonePhone.getElementsByTagName('input')[0].classList.add('secondCountry');
            clonePhone.getElementsByTagName('input')[0].value = '';
            clonePhone.getElementsByTagName('input')[0].removeAttribute('required');
            clonePhone.querySelector('.popup__call-svg').style.visibility = 'hidden';
            clonePhone.querySelector('.popup__call-svg').classList.remove('popup__call-svg-active');
            clonePhone.style.border = 'none';
            clonePhone.style.visibility = "hidden";

            wrapperInputs.append(clonePhone);
            arrow[0].classList.remove('popup__call-svg-active');
            arrow[1].style.visibility = 'visible';

        }
    });

 });