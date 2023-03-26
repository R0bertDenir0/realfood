
// const TelegramBot = require('node-telegram-bot-api');


// let submitForm =  function() {
    
//     const bot = new TelegramBot('6111206700:AAGcVD0y_0GiUsB_E2Tllt26_IGZPuZ95Eg', { polling: true });
//     const chatId = '@testcanalok';

//       var livraison_addresse = document.getElementById("livraison_addresse").value;
//       var code_postal = document.getElementById("code_postal").value;
//       var prix_ttc = document.getElementById("prix_ttc").value;
//       var image = document.getElementById("image");

//       var ticketData = "Livraison " + livraison_addresse + "\codepostal: " + code_postal + "\prix_ttc: " + prix_ttc + "\image: " + image;
//        alert(ticketData);
//        bot.sendMessage(chatId, "Receive your message");
      
//       // return bot.getMe()
//       // .then(always({
//       //   send: partial(sendMessage, [bot]), // => Stream
//       //   subscribe: partial(buildFilter, [stream]), // => Stream
//       // }))
    
    
//     // alert("Merci");
//     //   bot.sendMessage(chatId, JSON.stringify(ticketData));
//     }


//     // bot.onText(/\/echo (.+)/, (msg, match) => {
//     //     // 'msg' is the received Message from Telegram
//     //     // 'match' is the result of executing the regexp above on the text content
//     //     // of the message
      
//     //     const chatId = msg.chat.id;
//     //     const resp = match[1]; // the captured "whatever"
      
//     //     // send back the matched "whatever" to the chat
//     //     bot.sendMessage(chatId, resp);
//     //   });
      
//     //   // Listen for any kind of message. There are different kinds of
//     //   // messages.
//     //   bot.on('message', (msg) => {
//     //     const chatId = msg.chat.id;
      
//     //     // send a message to the chat acknowledging receipt of their message
//     //     bot.sendMessage(chatId, 'Received your message');
//     //   });

