var urlAyombati = "http://127.0.0.1:8000";

function checkSession() {
	if(window.localStorage.getItem("userId") === null) {
		$.mobile.changePage("#login");
	} else {
		$.mobile.changePage("#one");
		// $(".balance-field").val() = window.localStorage.getItem("balance");
	}
}

function login() {
  var user  = $("#txt-email").val();
  var pass  = $("#txt-password").val();
  var parameter = {username: user, password: pass};
	$.mobile.changePage("#one");
  // $.post( urlAyombati + "/auth.json", parameter )
  //   .done(function( data ) {
  //   	if(data.id) {
  //   		window.localStorage.setItem("userId", data.id);
	 //    	// window.localStorage.setItem("balance", data.balance);
	 //    	$.mobile.changePage("#one");
  //   	} else {
  //   		console.log(data.message);
  //   	}
  // 	});
}

function getUserDetail(userId) {
	$.get( urlAyombati + "/users/" + userId + ".json")
		.done(function( data ) {
			console.log(data);
			window.localStorage.setItem("accBalance", data.account_balance);
		});
}

function logout() {
	window.localStorage.removeItem("userId");
	window.localStorage.removeItem("username");
	$.mobile.changePage("#login");
	$(".ui-input-text input").val('');
}

function signup() {
	var user = $("#signup-username").val();
	var mail = $("#signup-email").val();
	var pone = $("#signup-phone").val();
	var pass_1 = $("#signup-password1").val();
	var pass_2 = $("#signup-password2").val();
	var parameter = {username: user, email: mail, phone: pone, password: pass_1, password_confirmation: pass_2};
	$.mobile.changePage("#login");
	// $.post( urlAyombati + "/users.json", parameter )
 //    .done(function( data ) {
 //    	console.log(data);
 //  	});
}

function topup() {
	var user = window.localStorage.getItem("userId");
	var topup_amount = $("#topup-balance").val();
	var parameter = {userId: user, amount: topup_amount}

	$.post( urlAyombati + "/topup.json", parameter )
		.done(function( data	) {
			console.log(data);
		});
}

function pulsa() {

}