module.exports = async Bridge => {
  // Log that the bridge is online.
  Bridge.logger.log(`${Bridge[0].user.tag}, ready.`, "ready");
  Bridge.logger.log(`${Bridge[1].user.tag}, ready.`, "ready");

   // Set the bridge status
   Bridge[0].user.setActivity(Bridge.config.global.activity);
   Bridge[1].user.setActivity(Bridge.config.global.activity);
};