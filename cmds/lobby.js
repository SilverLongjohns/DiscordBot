module.exports.run = async (client, message, args) => {
    console.log("lfg works!");

        message.channel.send(`${message.author} is looking for a group! Reply with 'JOIN' below to lend your aid!`)
      const msgs = await message.channel.awaitMessages(msg => msg.content === "JOIN", {time: 30000});

      message.channel.send(`LFG complete! ${msgs.map(msg => msg.content).length} players found.`)
   }

module.exports.help = {
    name: "lfg"
}