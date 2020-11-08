const Discord = require('discord.js');
const Nertivia = require('nertivia.js');
const { readdirSync } = require('fs');

const Bridge = [ new Discord.Client(), new Nertivia.Client() ];

Bridge.config = require('./config');
Bridge.logger = require('./utils/Logger');
Bridge.commands = new Discord.Collection();
Bridge[0].type = "Discord"
Bridge[1].type = "Nertivia";

const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    const commandName = file.split('.')[0];
    Bridge.logger.log(`Loading command: ${commandName}`, "log");
    Bridge.commands.set(commandName, command);
};

const eventFiles = readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    const eventName = file.split('.')[0];
    Bridge.logger.log(`Loading event: ${eventName}`, "log");
    Bridge.forEach(b => b.on(eventName, event.bind(null, Bridge)));
};

if (Bridge.config.discord.token == "[DISCORD BOT TOKEN]" || Bridge.config.nertivia.token == "[NERTIVIA BOT TOKEN]") {
    Bridge.logger.log("Bridge is not configured properly. Exiting...", "error");
    process.exit(1);
};

Bridge[0].login(Bridge.config.discord.token);
Bridge[1].login(Bridge.config.nertivia.token).then(Bridge.ready = true);