
if (confirm("IS that ur first time here!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}
var person = prompt("Please enter your name", "Your name");
var text;
if (person == null || person == "") {
  alert("User cancelled the prompt.");
} else {
  alert("Hellow  how are you today!" + person);

}


var favcrypto = prompt("what is ur favcrybto", "ETHER , cardano , BNB");
function cryptofun (){


while (favcrypto != "ETHER" && favcrypto != "cardano" && favcrypto != "BNB") {


  favcrypto = prompt("what is ur favcrybto", "ETHER , cardano , BNB");
}





if (favcrypto == "ETHER") {
  var text = prompt("how many coin u want to see ");
  while (text > 10) {
    text = prompt(" please write num less than 10 ");
  }
  for (var i = 0; i < text; i++)

    document.write("<div>" + "<h4>" + favcrypto + "</h4>" + "<img src = 'https://www.crypto-light.com/wp-content/uploads/2018/08/eth-ether-ethereum-infomations.jpg' alt = 'ETHER'>" + "</div>")

}
else if (favcrypto == "cardano") {
  var text = prompt("how many coin u want to see ");
  while (text > 10) {
    text = prompt(" please write num less than 10 ");
  }
  for (var i = 0; i < text; i++)

    document.write("<div>" + "<h4>" + favcrypto + "</h4>" + "<img src = 'https://payspacemagazine.com/wp-content/uploads/2018/10/cardano-1024x536.jpg' alt = 'ETHER'>" + "</div>")



}
else if (favcrypto == "BNB") {
  var text = prompt("how many coin u want to see ");
  while (text > 10) {
    text = prompt(" please write num less than 10 ");
  }
  for (var i = 0; i < text; i++)

    document.write("<div>" + "<h4>" + favcrypto + "</h4>" + "<img src = 'https://mk0genesisblockal487.kinstacdn.com/wp-content/uploads/2020/04/Binance-Coin-BNB-Uptrend-Continues-To-Trade-Over-25-Following-Strong-Gain-of-15-Percent-960x480-1.png' alt = 'ETHER'>" + "</div>")
}

}
cryptofun ();



var intrest = prompt ("how much do u intrest in crypto");

function intrestfun (text){

  for (var i = 0; i < text; i++)

    document.write( "<img src = 'http://premierinvestmentsofiowa.com/wp-content/uploads/2016/02/interest-rates.jpg' alt = 'intrest'>" )
    return text;
}
intrestfun (intrest);
