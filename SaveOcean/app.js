const travel = '--travel';
const travelCont = '--travelCont';

window.addEventListener("scroll", () => {
    const value = window.scrollY;
    if(value>570){
        document.documentElement.style.setProperty(travel, (-value+570)*1.2 + 'px');
    }else{
        document.documentElement.style.setProperty(travel, 0 + 'px');
    }

    if(value>650 && value<750){
        document.documentElement.style.setProperty(travelCont, value-650 + 'px');
    }else if(value>750){
        document.documentElement.style.setProperty(travelCont, 100 + 'px');
    }else{
        document.documentElement.style.setProperty(travelCont, 0 + 'px');
    }
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const dropdowns = document.querySelectorAll(".navbar_item_top");
const dropMenus = document.querySelectorAll(".drop_menu");

dropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener("mouseover", () => {
        dropMenus[index].classList.add("show");
    });
    dropdown.addEventListener("mouseleave", () => {
        dropMenus[index].classList.remove("show");
    });
});


const circles = document.querySelectorAll('.circle');
const slides = document.querySelector('.intro_cont');
let value = 0;
const slide = '--slide';

circles[0].classList.add("active")

function circleNumber(element, index){
    for(i=0; i < element.length; i++){
        if(i!=index){
            element[i].classList.remove("active")
        }else{
            element[i].classList.add("active")
        }
    }
}

circles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
        value = index * -100;
        document.documentElement.style.setProperty(slide, value + '%');
        circleNumber(circles, index);
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    const loginLink = document.getElementById("login-page");
    const loginDiv = document.getElementById("login");
  
    loginLink.addEventListener("click", function(e) {
      e.preventDefault();
      const targetOffset = loginDiv.offsetTop - 200;
  
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth"
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const donateLink = document.getElementById("donate-page");
    const donateDiv = document.getElementById("donate");
  
    donateLink.addEventListener("click", function(e) {
      e.preventDefault();
      const targetOffset = donateDiv.offsetTop + 60;
  
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth"
      });
    });
  });

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const donateWind = document.querySelector(".donate_wind")

window.addEventListener("scroll", () => {
    const value = window.scrollY;
    if(value > 1800){
        donateWind.classList.add("active");
    }else{
        donateWind.classList.remove("active");
    }
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function redirect(){
    window.location.assign("redirect.html");
}

function home(){
    window.location.assign("index.html");
}