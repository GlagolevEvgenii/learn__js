window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent"),
        tabsParent = document.querySelector(".tabheader__items");

    function hiddenTabContent() {
        tabsContent.forEach(item => {
            item.style.display = "none";
        });
        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active");
        });
    }

    function showTAbContent(i = 0) {
        tabsContent[i].style.display = "block";
        tabs[i].classList.add("tabheader__item_active");
    }

    hiddenTabContent();
    showTAbContent();
    tabsParent.addEventListener("click", (event) => {
        const target = event.target;
        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hiddenTabContent();
                    showTAbContent(i);
                }
            });
        }
    });
    const deadline = '2020-06-30';
    function getTimeRenaining(endtime) {
        const  t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t /(1000*60*60*24)),
            hours = Math.floor((t / (1000*60*60) % 24)),
            minutes = Math.floor((t /1000/60 ) % 60),
            seconds = Math.floor((t /1000 ) % 60);
        return {
            'total':t,
            'days':days,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds
        };
    }
    function getZero(num) {
        if(num >= 0 && num < 10){
            return `0${num}`;
        }else{
            return  num;
        }
    }
    function setCLock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = document.querySelector("#days"),
            hours = document.querySelector("#hours"),
            minutes = document.querySelector("#minutes"),
            seconds = document.querySelector("#seconds"),
            timeInterval = setInterval(updateClock,1000);
        updateClock();
        function updateClock() {
            const t = getTimeRenaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML =  getZero(t.hours);
            minutes.innerHTML =  getZero(t.minutes);
            seconds.innerHTML =  getZero(t.seconds);
            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }
    setCLock(".timer", deadline);

});

