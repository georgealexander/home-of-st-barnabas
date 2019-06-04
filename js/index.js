$("#carousel").owlCarousel({
  autoplay: true,
  lazyLoad: false,
  loop: true,
  margin: 50,


  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
});
