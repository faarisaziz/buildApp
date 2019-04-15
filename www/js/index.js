var app = {
  initialize: function() {
    this.bindEvents();
  },

  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  onDeviceReady: function() {
    setTimeout(function () {
      var devicebody = document.getElementById("devicebody");

      devicebody.classList.remove("hidden");
      navigator.splashscreen.hide();
      app.receivedEvent('deviceready');
    }, 3000);
  },

  receivedEvent: function(id) {
    // pengecekan sudah login atau belum disini
    $(".banner-item").slick({ 
      slidesToShow: 1, slidesToScroll: 1, autoplay: true,
      autoplaySpeed: 5000, centerMode: true
    });

    $(".banner-item-2").slick({ 
      slidesToShow: 2, slidesToScroll: 1, autoplay: true,
      autoplaySpeed: 3000, centerMode: true
    });
  }
};