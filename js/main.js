/* 
  Web developer : Youssef Abdelzaher
  Web developer website url : https://youssef-abdelzaher.netlify.app/
*/
window.onload = ()=>{
    setTimeout(() => {
      $(".startWindow").fadeOut("slow",()=>{
        if(window.innerWidth < 576){
            $("body").niceScroll({
                cursorwidth:"5px",
                cursorcolor:"#3C41DF",
                cursorborder:"none",
                zindex:997,
            });
        }else{
            $("body").niceScroll({
                cursorwidth:"11px",
                cursorcolor:"#3C41DF",
                cursorborder:"none",
                zindex:997,
            });
        }
      });
    }, 1500);
}
// Active wow.js freamwork 
new WOW().init();
// Active niceScroll.js freamwork 



// Add Contact Us Position 
window.setInterval(()=>{
    const body = document.querySelector("body");
    const bodyHeight = body.offsetHeight;
    const contactUS = document.querySelector(".contactUs");
    const contactUsHeight = contactUS.offsetHeight;
    const footer = document.querySelector(".footer");
    const footerHeight = footer.offsetHeight;
    const copyRight = document.querySelector(".copyRight");
    const copyRightHeight = copyRight.offsetHeight;
    contactUS.style.top = (bodyHeight - ((footerHeight + copyRightHeight))-(contactUsHeight/2)) + "px"
},1);
window.onresize = ()=>{
    const body = document.querySelector("body");
    const bodyHeight = body.offsetHeight;
    const contactUS = document.querySelector(".contactUs");
    const contactUsHeight = contactUS.offsetHeight;
    const footer = document.querySelector(".footer");
    const footerHeight = footer.offsetHeight;
    const copyRight = document.querySelector(".copyRight");
    const copyRightHeight = copyRight.offsetHeight;
    contactUS.style.top = (bodyHeight - ((footerHeight + copyRightHeight))-(contactUsHeight/2)) + "px"
}



/* ============= Start Head Section =============*/

const head = document.querySelector(".head");
const headLinksChildren = Array.from(document.querySelectorAll(".head .links li"));
const barsButton = document.querySelector(".button-mobile");
const headLinksMobile = document.querySelector(".head .links-mobile");
const contactUsButton = document.querySelector(".head .links .btn");
headLinksChildren.forEach((li,index) => {
    // Add brand name for list 
    if (index === 0) {
        let img = document.createElement("img");
        img.src = "img/logo.png";
        img.alt = "Brand Nmae";
        headLinksMobile.appendChild(img);
    }
    // Add li for List 
    let listLi = document.createElement("li");
    listLi.innerHTML = li.innerHTML;
    listLi.className = li.className;
    listLi.dataset.scroll = li.dataset.scroll ;
    headLinksMobile.appendChild(listLi);
    // Add contact Us button 
    let liLenght = headLinksChildren.length - 1 ;
    if(index === liLenght){
        let span = document.createElement("span");
        span.innerHTML = contactUsButton.innerHTML;
        span.className = contactUsButton.className;
        span.dataset.scroll = contactUsButton.dataset.scroll;
        headLinksMobile.appendChild(span);
    }
    // Add event for li 
    li.addEventListener("click",windowScroll);
    contactUsButton.addEventListener("click",windowScroll);
});


// Call head links mobile Li and button 
const headLinksMobileLi = Array.from(document.querySelectorAll(".head .links-mobile li"));
const contactUsMobileButton =  document.querySelector(".head .links-mobile .btn");

// Add event for mobile button 
barsButton.addEventListener("click",()=>{
    // Add overlay before mobile list 
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    // Add close button to overlay befora mobile list 
    let closeButton = document.createElement("span");
    closeButton.className = "closeButton";
    let closeIcon = document.createElement("i");
    closeIcon.className = "fa fa-times";
    closeButton.appendChild(closeIcon);
    // Append overlay and close button for head 
    overlay.appendChild(closeButton);
    head.appendChild(overlay);

    // Add close list function 
    function closeList(){
        headLinksMobile.classList.remove("list-active");
        overlay.remove(overlay);
    }
    // Add Event for close button 
    closeButton.addEventListener("click",closeList);
    headLinksMobile.classList.add("list-active");
    // Add event to links mobile Li and Button 
    headLinksMobileLi.forEach((li)=>{
        li.addEventListener("click",closeList);
        li.addEventListener("click",windowScroll);
    });
    contactUsMobileButton.addEventListener("click",closeList);
    contactUsMobileButton.addEventListener("click",windowScroll);
})


// Add window scroll function 
function windowScroll(){
    lidata = document.querySelector(this.dataset.scroll).offsetTop;
    window.scrollTo({
        top: (lidata - head.offsetHeight)+60 ,
        left:0,
        behavior:"smooth"
    });
}

// Add window scroll Events 
const header = document.querySelector(".header");
window.onscroll = function(){
    // Change style for head 
    if (window.scrollY > 5) {
        header.style.paddingTop += `${head.offsetHeight}px`;
        head.classList.add("head-active");
    }else{
        header.style.paddingTop = "0px";
        head.classList.remove("head-active");
    }
    // Add active class for links and mobile links 
    if (window.scrollY < header.offsetHeight || window.scrollY === header.offsetHeight) {
        removeActiveClassLi();
        document.querySelector(".home-l").classList.add("active");
        document.querySelector(".links-mobile .home-l").classList.add("active");
    }
    if (window.scrollY > document.querySelector(".services").offsetTop || window.scrollY === document.querySelector(".services").offsetTop) {
        removeActiveClassLi();
        document.querySelector(".links .services-l").classList.add("active");
        document.querySelector(".links-mobile .services-l").classList.add("active");
    }
    if (window.scrollY > document.querySelector(".whyUs").offsetTop || window.scrollY === document.querySelector(".whyUs").offsetTop) {
        removeActiveClassLi();
        document.querySelector(".whyUs-l").classList.add("active");
        document.querySelector(".links-mobile .whyUs-l").classList.add("active");
    }
    if (window.scrollY > document.querySelector(".statistics").offsetTop || window.scrollY === document.querySelector(".statistics").offsetTop) {
        removeActiveClassLi();
        document.querySelector(".statistics-l").classList.add("active");
        document.querySelector(".links-mobile .statistics-l").classList.add("active");
    }
    if (window.scrollY > document.querySelector(".ourPortfolio").offsetTop || window.scrollY === document.querySelector(".ourPortfolio").offsetTop) {
        removeActiveClassLi();
        document.querySelector(".ourPortfolio-l").classList.add("active");
        document.querySelector(".links-mobile .ourPortfolio-l").classList.add("active");
    }
    if (window.scrollY > document.querySelector(".feedBacks").offsetTop || window.scrollY === document.querySelector(".feedBacks").offsetTop) {
        removeActiveClassLi();
        document.querySelector(".feedBacks-l").classList.add("active");
        document.querySelector(".links-mobile .feedBacks-l").classList.add("active");
    }
    // Add event for scrollButton 
    scrollTop();

}

function removeActiveClassLi(){
    headLinksChildren.forEach(li=>{
        li.classList.remove("active");
    });
    headLinksMobileLi.forEach(li=>{
        li.classList.remove("active");
    });
    
}

/* ============= End Head Section =============*/

/* ============= Start Scroll button event  =============*/

const scrollButton = document.querySelector(".scrollTopButton");
scrollButton.onclick = ()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
}
function scrollTop(){
    if (window.scrollY < 0 || window.scrollY === 0) {
        $(scrollButton).fadeOut("slow");
    }else{
        $(scrollButton).fadeIn("slow");
    }
}
scrollTop();

/* ============= End Scroll button event  =============*/


