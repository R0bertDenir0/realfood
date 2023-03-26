const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('6111206700:AAGcVD0y_0GiUsB_E2Tllt26_IGZPuZ95Eg', { polling: false });
const chatId = '@testcanalok';

   function submitForm() {
      var livraison_addresse = document.getElementById("livraison_addresse").value;
      var code_postal = document.getElementById("code_postal").value;
      var prix_ttc = document.getElementById("prix_ttc").value;
      var image = document.getElementById("image");

      var ticketData = "Livraison " + livraison_addresse + "\codepostal: " + code_postal + "\prix_ttc: " + prix_ttc + "\image: " + image;
    //   alert(ticketData);
    bot.sendMessage(chatId, "test");
    alert("Merci");
    //   bot.sendMessage(chatId, JSON.stringify(ticketData));
    }

