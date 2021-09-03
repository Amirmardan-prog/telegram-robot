// /** @type {typeof import('telegraf').Telegraf} */
const Telegraf = require('telegraf').Telegraf;

const bot = new Telegraf('1979055180:AAGocGf2XDXOil7qBue_12n-wmi6fsTN2uU');

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
    })
})

//method to start get the script to pulling updates for telegram

bot.launch();
