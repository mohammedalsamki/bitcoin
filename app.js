
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


