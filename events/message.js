const fetch = require('node-fetch');

module.exports = (Bridge, message) => {
  if (message.author.bot) return;

  // Ignore messages not starting with the prefix (in config.json)
  if (!message.content.startsWith(Bridge.config.global.prefix)) return;
  
  // Our standard argument/command name definition.
  const args = message.content.slice(Bridge.config.global.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Grab the command data from the client.commands Enmap
  const cmd = Bridge.commands.get(command);
  
  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;
   
  // Run the command
  cmd.run(Bridge, message, args);
};