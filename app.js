
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

    document.write("<div>" + "<h4>" + favcrypto + "</h4>" + "<img src = 'data:image/jpeg;base64,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' alt = 'ETHER'>" + "</div>")



}
else if (favcrypto == "BNB") {
  var text = prompt("how many coin u want to see ");
  while (text > 10) {
    text = prompt(" please write num less than 10 ");
  }
  for (var i = 0; i < text; i++)

    document.write("<div>" + "<h4>" + favcrypto + "</h4>" + "<img src = 'https://mk0genesisblockal487.kinstacdn.com/wp-content/uploads/2020/04/Binance-Coin-BNB-Uptrend-Continues-To-Trade-Over-25-Following-Strong-Gain-of-15-Percent-960x480-1.png' alt = 'ETHER'>" + "</div>")
}
