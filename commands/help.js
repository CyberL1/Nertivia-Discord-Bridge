exports.run = async (Bridge, message, args) => {
    if (!args[0]) {
    const content = Bridge.commands.map(c => `${c.options.name} - ${c.options.description}`).join("\n");
    await message.channel.send(content);
   } else {
     message.channel.send('WIP');
 };
};

exports.options = {
    name: "help",
    description: "Get all commands"
};