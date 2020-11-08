exports.run = async (Bridge, message, args) => {
    let t1 = Date.now();
    const msg = await message.channel.send("Ping?");
    msg.edit(`Pong! Latency is ${Date.now() - t1}ms.`);
};
  
exports.options = {
    name: "ping",
    description: "Shows bot ping",
};