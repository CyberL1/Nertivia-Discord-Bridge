module.exports = async Bridge => {
  for (const b of Bridge) {
    if (Bridge.ready) {
      // Log that both bots are online
      Bridge.logger.log(`${b.type} bot ready.`, "ready");
      
      // Set the bridge status
      b.user.setActivity(Bridge.config.global.activity);
    };
  };
};