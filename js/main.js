// Scroll Up Btn
let scroll = document.querySelector(".showcase .scroll-btn");
window.addEventListener("scroll", () => {
  if(scrollY >= 200) {
    scroll.style.right = "20px";
  } else {
    scroll.style.right = "-60px";
  }
});
scroll.addEventListener("click", () => {
  window.scrollTo ({
    top: 0,
    behavior:"smooth"
  });
});

// About Animate
let aboutImage = document.querySelector(".about .image");
let aboutText = document.querySelector(".about .about-text");
window.addEventListener("scroll", () => {
  if(window.scrollY > document.querySelector(".about").offsetTop-550) {
    aboutImage.style.transform = "translateX(30px)";
    aboutText.style.transform = "translateX(-30px)";
  }
});

// About Overlay
let overlayText = document.querySelector(".overlay .overlay-text");
window.addEventListener("scroll", () => {
  if(window.scrollY > document.querySelector(".overlay").offsetTop-550) {
    overlayText.style.transform = "translateX(0)";
  }
});

// Progress Animate
bars = document.querySelectorAll(".skills .progress .progress-bar")
window.addEventListener("scroll", () => {
  if(scrollY >= document.querySelector(".skills").offsetTop-450) {
    bars.forEach((bar) => {
      bar.style.width = bar.dataset.prog;
    },);
  }
});

// Form Session 
let form = document.querySelector(".contact form");
let inputs = document.querySelectorAll(".contact form [name]");

window.onload = () => {
  inputs.forEach(input => {
    input.value = window.sessionStorage.getItem(input.name);
  });
};
form.onsubmit = () => {
  window.sessionStorage.clear();
};
inputs.forEach((input) => {
  input.oninput = () => {
    window.sessionStorage.setItem(input.name, input.value);
  }
})