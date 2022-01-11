import { gsap } from "gsap";
import { Bounce } from "gsap/gsap-core";
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swip7er and modules styles
import "swiper/swiper-bundle";
import "swiper/swiper-bundle.min.css";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

document.querySelector(".hader-text");

//GSAP

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

gsap.from(".header-text", {
  filter: "blur(20px)",
  duration: 2,
  opacity: 0,
});

gsap.to(".header-text", {
  scrollTrigger: {
    trigger: ".header-text",
    start: "500 ",

    scrub: 1,
  },
  immediateRender: false,
  opacity: 0,
  duration: 0.3,
});

gsap.to(".right", {
  scrollTrigger: {
    trigger: ".right",
    scrub: true,
  },
  x: 1200,
  y: 250,
  opacity: 1,
  duration: 2,
});

gsap.to(".right", {
  scrollTrigger: {
    trigger: ".right",
    pin: true,
    end: 4330,
  },
  duration: 3,
});

gsap.to(".left", {
  scrollTrigger: {
    trigger: ".left",
    scrub: true,
  },
  x: -700,
  y: 250,
  opacity: 1,
});

gsap.to(".left", {
  scrollTrigger: {
    trigger: ".left",
    pin: true,
    end: 4330,
  },
});

gsap.from(".my-image", {
  scrollTrigger: {
    trigger: ".my-image",
    scrub: 0.2,
    start: "center 300",
  },
  y: -200,
  opacity: 0,
  duration: 0.2,
  ease: "Circ.easeOut",
});

gsap.from(".my-name", {
  scrollTrigger: {
    trigger: ".my-name",
    scrub: true,
    start: "-500 300",
    end: "-300",
  },
  y: 100,
  opacity: 0,
  duration: 0.2,
  ease: "Circ.easeOut",
});

gsap.from(".my-doing", {
  scrollTrigger: {
    trigger: ".my-image",
    start: "top center",
    scrub: true,
  },
  y: 50,
  opacity: 0,
  duration: 0.2,
  ease: " Power3.easeIn",
});

gsap.from(".glowy-container", {
  scrollTrigger: {
    trigger: ".glowy-container",
    start: "top bottom",
  },
  y: 500,
  opacity: 0,
  duration: 1.3,
  ease: "back",
});

gsap.from(".glowy-container2", {
  scrollTrigger: {
    trigger: ".glowy-container2",
    start: "top bottom",
  },
  y: 500,
  opacity: 0,
  duration: 1.3,
  ease: "back",
});

gsap.from(".projects-animation", {
  scrollTrigger: {
    trigger: ".projects-animation",
    start: "top bottom",
    end: "bottom 800",
    scrub: true,
  },

  opacity: 0,
  duration: 2,
  ease: " Power3.easeIn",
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: "1000",
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
});
