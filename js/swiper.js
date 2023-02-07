//Initialize Swiper

const progressCircle = document.querySelector('.autoplay-progress svg');
const progressContent = document.querySelector('.autoplay-progress span');
var swiper = new Swiper('.swiper', {
  loop: true,
  slidePreview: 3,
  speed: 6000,
  autoplay: {
    delay: 0,
  },
});
