const TelegramBot = require('node-telegram-bot-api');
const token = '6111206700:AAGcVD0y_0GiUsB_E2Tllt26_IGZPuZ95Eg';


const bot = new TelegramBot(token, {polling: true});

let username;
let userId;
let chatId;


bot.on('callback_query', (callbackQuery) => {
   chatId = callbackQuery.message.chat.id;
   userId = callbackQuery.from.id;
  bot.getChatMember(chatId, userId).then((chatMember) => {
     username = chatMember.user.username;
    console.log(`L'utilisateur ${username} a appuyé sur le bouton.`);
  });
});
