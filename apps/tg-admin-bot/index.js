require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TG_TOKEN;
const adminId = Number(process.env.TG_ADMIN_ID);

const bot = new TelegramBot(token, { polling: true });

const { pool } = require('./db-pool');

const userStages = {};

bot.onText(/get by id \d+/, async (msg) => {

    const chatId = msg.from.id;

    if (chatId !== adminId) {
        return;
    }

    const shopId = msg.text.match(/\d+/)[0];

    const { rows } = await pool.query(`
        select *
        from shops
        where cast(bodyjson ->> 'id' as int) = ${ shopId };
    `);

    const answer = rows.length
        ? JSON.stringify(rows[0].bodyjson, undefined, 4)
        : 'Нет магазина с таким ид';

    bot.sendMessage(chatId, answer);
});
