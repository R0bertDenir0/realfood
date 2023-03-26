

let envoyerButton = document.getElementById('envoyer');
envoyerButton.addEventListener("click", function() {

    console.log(envoyerButton);

let apiToken = "6111206700:AAGcVD0y_0GiUsB_E2Tllt26_IGZPuZ95Eg";
let chatId = "@testcanalok";

let text = "Hello world!";

let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;

let request = new XMLHttpRequest();
request.open("GET", urlString);
request.send();

alert("Merci");

let response = request.response;

});