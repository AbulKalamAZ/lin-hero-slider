// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get element
const navbar = document.querySelector(".header-section");
const hero = document.querySelector(".hero-section");
const stt_btn = document.querySelector(".stt-btn");
const burger_menu = document.querySelector(".burger-menu");
const off_canvas_menu = document.querySelector(".off-canvas-menu");
const close = document.querySelector(".close-off-canvas");
const navLinkOffCanvas = document.querySelectorAll(".off-canvas-menu li");
const nationality = document.querySelector(".nationality-select");
const dial_code = document.querySelector(".dial-code");



// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {

  if (window.scrollY >= 150) {
    navbar.classList.add("bg-opacity-75");
  } else {
    navbar.classList.remove("bg-opacity-75");
  }

  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    stt_btn.classList.remove('d-none');
    stt_btn.classList.add('d-flex');
    
  } else {
    stt_btn.classList.add('d-none');
    stt_btn.classList.remove('d-flex');
  }
}

stt_btn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

burger_menu.addEventListener('click', () => {
    off_canvas_menu.classList.toggle('shown')
})

close.addEventListener('click', () => {
    off_canvas_menu.classList.toggle('shown')
})

navLinkOffCanvas.forEach(item => {
    item.addEventListener('click', () => {
        off_canvas_menu.classList.toggle('shown')
    })
})

fetch('./js/country-code.json').then(res => res.json()).then(res => {
  res.forEach(item => {
    const node = document.createElement("option");

    const textnode = document.createTextNode(item.name);
    node.setAttribute("value", item.dial_code);
    node.appendChild(textnode);

    nationality.appendChild(node)
  })
})

nationality.addEventListener('change', (e) => {
  dial_code.innerHTML = e.target.value;
})