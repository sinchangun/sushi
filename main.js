//header 영역
let scrollHeader = () => {
  let header = document.querySelector("#header");
  pageYOffset >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

//배경테마 변경
let themeButton = document.getElementById("theme-button");
let iconTheme = "ri-sun-line";
let darkTheme = "dark-theme";

let getCurrentTheme = () => {
  let result = document.body.classList.contains(darkTheme) ? "dark" : "light";
  return result;
};

let getCurrentIcon = () => {
  let result = themeButton.classList.contains(iconTheme)
    ? "ri-moon-line"
    : "ri-sun-line";

  return result;
};


//로컬스토리지 - 다크테마
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");
//console.log(selectedTeme);

if (selectedTheme) {
  if (selectedTheme == "dark") {
    document.body.classList.add(darkTheme);
  } else {
    document.body.classList.remove(darkTheme);
  }

  if (selectedIcon == "ri-moon-line") {
    themeButton.classList.add(iconTheme);
  } else {
    themeButton.classList.remove(iconTheme);
  }
}



//모바일 메뉴 
let navToggle=document.getElementById("nav_toggle");
let navMenu=document.getElementById("nav_menu");
let navClose=document.getElementById("nav_close");

navToggle.addEventListener("click",()=>{
  navMenu.classList.add('show-menu')
})

navClose.addEventListener("click",()=>{
  navMenu.classList.remove('show-menu')
})




// 전체화면 애니메이션(scrollreveal)
ScrollReveal().reveal('.home_img,.home_data,.about_data,.about_img,.popular_card,.recently_data,.recently_img', {
    delay: 400,
    duration: 2500,
    origin: 'top',
    distance: '60px',
});

ScrollReveal().reveal('.home_data,.popular_card', {origin: 'bottom',});
ScrollReveal().reveal('.about_data,.recently_data', {origin: 'left',});
ScrollReveal().reveal('.about_img,.recently_img', {origin: 'right',});
ScrollReveal().reveal('.popular_card', {origin: 'bottom',interval: 100 });