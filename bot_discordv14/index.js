const {Client,GatewayIntentBits,Partials,Collection,} = require("discord.js");
const fs = require("fs");
const { cyan,greenBright } = require("cli-color");
const config = require("./config");
const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ],
  partials: [
    Partials.Channel,
    Partials.User,
    Partials.Reaction,
    Partials.Message,
    Partials.GuildMember,
    Partials.GuildScheduledEvent,
    Partials.ThreadMember,
  ]
});
console.log(greenBright.bold.underline("Lancement du bot :"));
client.commands = new Collection();
client.btn = new Collection();
client.select = new Collection();

client.config = require("./config.js");
module.exports.client = client;

["Command", "Event", "Button", "Select"].forEach(async (handler) => {
  await require(`./handlers/${handler}`)(client);
});

client.login(config.token);
