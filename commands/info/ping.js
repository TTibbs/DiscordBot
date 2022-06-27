module.exports = {
    name: "ping",
    category: "info",
    permissions: [],
    run: async ({client, message, args}) => {
        message.reply("Pong")
    }
}