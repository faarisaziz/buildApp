function initClientID() {
  var phone;
  var number = prompt("Masukan no handphone Anda", "");

  if (number == null || number == "") {
    location.reload();
  } else {
    phone = number;
  }

  localStorage.setItem("client_id", phone);
  initBalance();
}

function initBalance() {
  localStorage.setItem("balance", 0);
}

function topupBalance() {
  var amount = $("#topup-balance").val();
  var balance = localStorage.getItem("balance");

  localStorage.setItem("balance", parseInt(balance) + parseInt(amount));
  refreshBalance();
}

function buyPulsa() {
  var amount = $("#topup-balance").val();
  var balance = localStorage.getItem("balance");
  var pulsa = $("#select-pulsa").val();
  var fee = (0.1 * parseFloat(pulsa));
  var pulsa_total = (parseInt(pulsa) + parseInt(fee));

  localStorage.setItem("balance", parseInt(balance) - parseInt(pulsa_total));
  refreshBalance();
}

function refreshBalance() {
  $('.balance-field').html(localStorage.getItem("balance"));
  $("#topup-balance").val("");
}

function preparePLN() {
  if ($("#radio-pln-prabayar").prop('checked') == true){
    $("#pln-pascabayar").hide();
    $("#pln-prabayar").show();
  } else if ($("#radio-pln-pascabayar").prop('checked') == true) {
    $("#pln-prabayar").hide();
    $("#pln-pascabayar").show();
  }
}

function callPulsaDetail() {
  var pulsa = $("#select-pulsa").val();

  if (pulsa.length > 0) {
    var fee = (0.1 * parseFloat(pulsa));

    $(".voucher span").html(pulsa);
    $(".fee span").html(parseInt(fee));
    $(".total span").html(parseInt(pulsa) + parseInt(fee));
    $(".pulsa-detail").show();
  } else {
    $(".voucher span").html("0");
    $(".fee span").html("0");
    $(".total span").html("0");
    $(".pulsa-detail").hide();
  }
}