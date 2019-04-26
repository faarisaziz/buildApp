var urlAyombati = "http://api.ayombati.co.id";

var userId = '';

function checkSession() {
	if(window.localStorage.getItem("userId") === null) {
		$.mobile.changePage("#login");
	} else {
		$.mobile.changePage("#one");
		window.localStorage.getItem("userId");
		getUserDetail(window.localStorage.getItem("userId"));
	}
}

function login() {
  var user  = $("#txt-email").val();
  var pass  = $("#txt-password").val();
  var parameter = {username: user, password: pass};

  $.post( urlAyombati + "/auth.json", parameter )
    .done(function( data ) {
    	if(data.id) {
    		window.localStorage.setItem("userId", data.id);
    		getUserDetail(data.id);
	    	$.mobile.changePage("#one");
    	} else {
    		console.log(data.message);
    	}
  	});
}

function getUserDetail(userId) {
	$.get( urlAyombati + "/users/" + userId + ".json" )
		.done(function( data ) {
			var balance = '';
			balance += data.account_balance;
			$('.balance-field').html(balance);

			var point = '';
			point += data.account_point;
			$('.point-field').html(point);
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

	$.post( urlAyombati + "/users.json", parameter )
    .done(function( data ) {
    	if (data.id === null) {
    		console.log("gagal");
    	} else {
    		$.mobile.changePage("#login");
    		$(".signup-form-control").val('');
    	}
  	});
}

function topup(userId) {
	var userId = window.localStorage.getItem("userId");
	var topup_amount = $("#topup-balance").val();
	var parameter = {amount: topup_amount}

	$.post( urlAyombati + "/transactions/" + userId + "/topup.json", parameter )
		.done(function( data ) {
			getUserDetail(userId);
			$("#topup-balance").val('');
		});
}

function riwayat(id) {
	userId = window.localStorage.getItem("userId");
	$.get( urlAyombati + "/users/" + userId + "/mutation.json" )
		.done(function( data ) {
			var riwayat = '';

			data.forEach(element => {
				riwayat += '<div class="ui-bar ui-bar-a">';
				riwayat += '<div class="riwayat">Tipe : <span class="text-riwayat">'+ element.transaction_type +'<span></div>';
				riwayat += '<div class="riwayat">Jumlah : <span class="text-riwayat"> '+ element.amount +'</span></div>';
				riwayat += '<div class="riwayat">Detail : <span class="text-riwayat">'+ element.transaction_detail +'</span></div>';
				riwayat += '<div class="riwayat">Tanggal : <span class="text-riwayat">'+ element.created_at +'</span></div>';
				riwayat += '</div><br>';
			});

			$('#riwayat-list').html(riwayat);
		});
}

function transfer() {
	var nominal = $("#transfer-amount").val();
	var penerima = $("#transfer-receiver").val();
	var parameter = {user_to: penerima, amount: nominal}
	userId = window.localStorage.getItem("userId");
	
	$.post( urlAyombati + "/transactions/" + userId + "/transfer.json", parameter )
		.done(function( data ) {
			getUserDetail(userId);
		});
}

function point(userId) {
	var userId = window.localStorage.getItem("userId");
	var e = document.getElementById("coin-balance");
	var poin = e.options[e.selectedIndex].value;
	var parameter = {point: poin}

	$.post( urlAyombati + "/transactions/" + userId + "/point.json", parameter )
		.done(function( data ) {
			getUserDetail(userId);
		});
}