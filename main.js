
const Discord = require("discord.js");
require('dotenv').config();

const  {
    Client,
    Intents
} = Discord;



const client = new Client({intents: [Intents.FLAGS.GUILDS]});

client.once("ready", () => {
    console.log("BlitzBot is ready !");
});


client.login(process.env["LOGIN_TOKEN"]);