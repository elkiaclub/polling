import Discord from 'discord.js'
import dotenv from 'dotenv'
import { defaultSections } from './sections.js'
const client = new Discord.Client()
dotenv.config()

// log in the bot
client.login(process.env.DISCORD_TOKEN)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', async (msg) => {
  // initial message
  if (msg.content === 'defaultPolling') {
    for (const category of defaultSections) {
      await msg.channel.send(category.categoryPreface)
      for (const section of category.sections) {
        // set up message
        const embed = new Discord.MessageEmbed()
          .setTitle(section.title)

        if (section.description) {
          embed.setDescription(section.description)
        }
        embed.addField('\u200b', '__**Options:**__') // empty line
        for (const option of section.options) {
          embed.addField(option.emoji, `${option.title}`)
        }
        // send message
        const pollMessage = await msg.channel.send(embed)
        // add default reactions
        for (const option of section.options) {
          await pollMessage.react(option.emoji)
        }
      }
    }
  }
})
