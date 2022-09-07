
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    padding: '10%',
    perPage: 4,
    pauseOnFocus:false,
    autoScroll: {
      speed: 1.5,
    },
    breakpoints: {
      1200: {
        perPage: 3,
        padding: { left: 10, right: 20 }
      },
      768:{
        perPage: 2,
        padding: { left: 0, right: 0 }
      },
      576:{
        perPage: 1,
        padding:'0%'
      }

    }
  }).mount(window.splide.Extensions);
})