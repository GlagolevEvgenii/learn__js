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
    const deadline = '2020-06-27 07:31:50';
    function getTimeRenaining(endtime) {
        const  t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t /(1000*60*60*24)),
            hours = Math.floor((t / (1000*60*60) % 24)),
            discountHours = Math.floor((t / (1000*60*60))),
            minutes = Math.floor((t /1000/60 ) % 60),
            seconds = Math.floor((t /1000 ) % 60);
        return {
            'total':t,
            'days':days,
            'hours':hours,
            'discountHours':discountHours,
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
            discount = document.querySelector(".promotion__descr span"),
            timeInterval = setInterval(updateClock,1000);
        updateClock();
        function updateClock() {
            const t = getTimeRenaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML =  getZero(t.hours);
            minutes.innerHTML =  getZero(t.minutes);
            seconds.innerHTML =  getZero(t.seconds);
            let discountPercent = 20;
            discount.innerHTML = discountPercent +"%";
            if(t.discountHours <= 72 && t.discountHours % 5 === 0 && t.discountHours > 24){
                let discountPercentMinus = Math.floor((t.discountHours - 24 - t.discountHours % 5)/5);
                discount.innerHTML = 10 + discountPercentMinus +"%";
            }
            if(t.discountHours <= 24){
                discount.innerHTML ="10%";
            }
            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }
    setCLock(".timer", deadline);
    //modal

    const modal = document.querySelector(".modal"),
        openModal = document.querySelectorAll("[data-modal]"),
        closeModal = document.querySelector("[data-close]");
    function openModalCall(){
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow ="hidden";
        clearInterval(modalTimerID);
    }
    function closeModalCall(){
        modal.classList.remove("show");
        document.body.style.overflow ="";
    }
    openModal.forEach(item => {
        item.addEventListener("click",openModalCall );
    });

    closeModal.addEventListener('click',closeModalCall );
    modal.addEventListener('click',(e)=>{
        if(e.target === modal){
            closeModalCall();
        }
    });
    document.addEventListener('keydown',(e)=>{
        if(e.code ==="Escape" && modal.classList.contains("show")){
            closeModalCall();
        }
    });
    const modalTimerID = setTimeout(openModalCall,5000);
    function showModalByScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModalCall();
            window.removeEventListener("scroll",showModalByScroll);
        }
    }
    window.addEventListener("scroll",showModalByScroll);





    const cartMenu = document.querySelectorAll(".menu__item"),
        imgUrl = document.querySelectorAll('img'),
        title = document.querySelectorAll('.menu__item-subtitle'),
        description =document.querySelectorAll('.menu__item-descr'),
        price =document.querySelectorAll('.menu__item-total span');
    class Item{
        constructor(url,title,description,price) {
            this.url = url;
            this.title = title;
            this.description = description;
            this.price = price;
        }
        showMyProps(){
            if(this.url === ""){
                this.url = "https://cdnmyslo.ru/CityImage/3e/e8/3ee82d94-d1b7-4d0f-90db-5e1ef185a360_1.jpg";
            }
            if(this.price === undefined){
                this.price = 300;
            }
            if(this.description.length > 225){
                this.description = `${this.description.substring(0,225)}...`;
            }
            const wrapCarts = document.querySelector(".menu__field .container"),
            wrapItem = document.createElement("div");
            wrapItem.innerHTML = `
             <div class="menu__item">
                    <img src=${this.url} alt="vegy">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
            wrapCarts.append(wrapItem);

        }
    }
    const item = new Item("","Меню \"Фитнес\"","Меню \"Фитнес\" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!");
    const item1= new Item("img/tabs/elite.jpg","Меню “Премиум”","В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",550);
    const item2= new Item("img/tabs/post.jpg","Меню \"Постное\"","Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",430);
    item.showMyProps();
    item1.showMyProps();
    item2.showMyProps();
});

