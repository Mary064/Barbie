  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        perPage: 4,
        arrows: false,
        pagination: false,
        autoplay: true,
        easingFunc: true,
        interval: 3000,
        breakpoints: {
          500: {
            perPage: 2,
          }
        }
    } );
    splide.mount();
  } );