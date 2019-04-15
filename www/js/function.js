var urlAyombati = "http://127.0.0.1:8000";

function checkSession() {
	
}

function login() {
  var user  = $("#txt-email").val();
  var pass  = $("#txt-password").val();
  var parameter = {username: user, password: pass};

  $.post( urlAyombati + "/auth.json", parameter )
    .done(function( data ) {
    	$.mobile.changePage("#one");
  });
}