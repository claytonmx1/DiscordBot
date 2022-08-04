const api = "https://redrumrp.com/api/v1/server.json";
const snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args) => {
    snekfetch.get(api).then(console.log);


}

module.exports.help = {
    name: "Users Online"
}