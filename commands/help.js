exports.run = async (Bridge, message, args) => {
    const content = Bridge.commands.map(c => `${c.options.name} - ${c.options.description}`).join("\n");
    await message.channel.send(content);
};

exports.options = {
    name: "help",
    description: "Get all commands"
};