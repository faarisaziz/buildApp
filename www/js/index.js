var app = {
  initialize: function() {
    this.bindEvents();
  },

  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  onDeviceReady: function() {
    app.receivedEvent('deviceready');
  },

  receivedEvent: function(id) {
    if(checkAuthenticationToken() == undefined) {
      // window.location.href = 'sign.html';
    } else {
      $(".banner-item").slick({ 
        slidesToShow: 1, slidesToScroll: 1, 
        autoplay: true, autoplaySpeed: 5000,
        centerMode: true
      });

      $(".banner-item-2").slick({ 
        slidesToShow: 2, slidesToScroll: 1, 
        autoplay: true, autoplaySpeed: 3000,
        centerMode: true
      });
    }
  }
};

function checkAuthenticationToken() {
  var auth_token = localStorage.getItem("auth_token");
}