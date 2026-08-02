
const timeLine = gsap.timeline();

const loaderValue = document.querySelector('.loader h1');
let count = 0;

const interval = setInterval(() => {
  count++;
  loaderValue.innerHTML = `${count}%`
  if (count === 100) {
    clearInterval(interval);
    landingAnimation();
  }
}, 20)

function landingAnimation() {
  timeLine.to('.loader', {
    yPercent: -100,
    duration: 1.2,
    ease: "power2.inOut"
  }, "-=0.9").to(".app img", {
    scale: 0.9,
    duration: 0.6
  },"-=0.97").from(".content h1", {
    y: 20,
    opacity: 0,
    duration: 0.3
  }).from(".content h2", {
    y: 20,
    opacity: 0,
    duration: 0.3
  })
}