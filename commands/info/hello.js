module.exports = {
    name: "hi",
    category: "info",
    permissions: [],
    run: async ({client, message, args}) => {
        message.reply("Hello World")
    }
}