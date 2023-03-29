"""app.py"""
from telegram import Update, KeyboardButton, ReplyKeyboardMarkup, WebAppInfo
from telegram.ext import ApplicationBuilder, CallbackContext, CommandHandler, MessageHandler, filters
from credentials import BOT_TOKEN, BOT_USERNAME


async def launch_web_ui(update: Update, callback: CallbackContext):
    # For now, we just display google.com...
    kb = [
        [KeyboardButton("Create Ticket", web_app=WebAppInfo("https://w0rld3x.github.io/realfood/index.html"))]
    ]
    await update.message.reply_text("Appuie sur Créer ticket, et renseigne les informations en ajoutant un screen de ta commande ! Bon appétit :)", reply_markup=ReplyKeyboardMarkup(kb))


if __name__ == '__main__':
    # when we run the script we want to first create the bot from the token:
    application = ApplicationBuilder().token(BOT_TOKEN).build()

    # and let's set a command listener for /start to trigger our Web UI
    application.add_handler(CommandHandler('start', launch_web_ui))

    # and send the bot on its way!
    print(f"Your bot is listening! Navigate to http://t.me/{BOT_USERNAME} to interact with it!")
    application.run_polling()