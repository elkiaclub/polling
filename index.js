import Discord from 'discord.js'
import dotenv from 'dotenv'
import { defaultSections, morePolls, evenMorePolls, clarifyingDuping, seedPolls } from './sections.js'
import quotes from './quotes.js'
import fs from 'fs'
const client = new Discord.Client()
dotenv.config()

// log in the bot
client.login(process.env.DISCORD_TOKEN)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', async (msg) => {
  // initial message
  if (msg.content === 'defaultPolling' || msg.content === 'morePolls' || msg.content === 'evenMorePolls' || msg.content === 'clarifyingDuping' || msg.content === 'seedPolls') {
    const polls = msg.content === 'defaultPolling' ? defaultSections
      : msg.content === 'morePolls' ? morePolls
        : msg.content === 'evenMorePolls' ? evenMorePolls
          : msg.content === 'clarifyingDuping' ? clarifyingDuping
            : msg.content === 'seedPolls' ? seedPolls
              : null
    if (!polls) { return }
    await msg.delete()
    for (const category of polls) {
      await msg.channel.send(category.categoryPreface)
      for (const section of category.sections) {
        // set up message
        const embed = new Discord.MessageEmbed()
          .setTitle(section.title)

        if (section.description) {
          embed.setDescription(section.description)
        }
        if (section.image) {
          embed.setImage(section.image)
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

  if (msg.content.startsWith('jsonify-member')) {
    const data = msg.mentions.members.map((member) => {
      return {
        id: member.id,
        avatarURL: member.user.avatarURL({ dynamic: true, size: 64 }),
        displayName: member.displayName,
        joinedAt: member.joinedAt,
        color: member.displayHexColor
      }
    })
    msg.channel.send('```json\n' + JSON.stringify(data) + '```')
  }

  if (msg.content.startsWith('getmemberdata')) {
    const quotesData = quotes.quotes
    const members = []
    let users = 0
    const rejects = []
    for (const quote of quotesData) {
      console.log(quote)
      try {
        const member = await msg.guild.members.fetch(quote.author)
        if (!members.find(m => { return member.id === m.id })) {
          members.push({
            id: member.id,
            avatarURL: member.user.displayAvatarURL({ dynamic: true, size: 64 }),
            displayName: member.displayName,
            joinedAt: member.joinedAt,
            color: member.displayHexColor
          })
        }
      } catch (e) {
        try {
          const user = await client.users.fetch(quote.author)
          const data = {
            id: user.id,
            avatarURL: user.displayAvatarURL({ dynamic: true, size: 64 }),
            displayName: user.username
          }
          users++
          members.push(data)
        } catch (e) {
          console.log(e)
          rejects.push(quote.author)
        }
        console.log(e)
      }
    }

    fs.writeFileSync('members.json', JSON.stringify(members))

    msg.channel.send(`got ${members.length - users} members and ${users} past members for ${quotesData.length} quotes; ${rejects.length} rejected ${rejects.length > 0 ? `\`\`\`json\n${JSON.stringify(rejects)}\`\`\`` : ''}`)
  }

  if (msg.content === 'welcome-proposal') {
    try {
      //! welcome-proposal
      const message = msg
      // delete gen command
      await msg.delete()

      /* Banner gif */
      const w0 = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/247684180895465472/681583492043505673/giphy.gif', 'welcome.gif')
      /* Welcome header */
      const w1 = new Discord.MessageEmbed()
        .setColor('7299FF')
        .setAuthor('Welcome to Elkia!', 'https://i.imgur.com/1CebiPA.png')
        .setDescription('*A gaming club with its own vanilla survival Minecraft server!\n' +
          'est. June 27th, 2016*')
        .addField('We strive to make a tight-knit community.',
          'Elkia is a group of gamers and friends tied by a fondness for Minecraft and the slogan “Slightly above average!”. We run a whitelisted Minecraft Java Edition vanilla survival server, feel free to have a look at our past in <#451803777893269504>. ' +
          'Besides Minecraft, we are an active community who enjoy lots of other games, like Terraria, CS:GO, [Chess](https://www.twitch.tv/cerxme/clip/ClearLovelyWolfTBTacoLeft), etc. Check out <#451803995103821834> to see what the server has been doing lately, and have a peak at <#269488336568057856> to see our memes, or us complaining about how bad our memes have become.')

      await message.channel.send({ embed: w1, files: [w0] })

      /* Minecraft */
      const w21 = new Discord.MessageAttachment('https://i.imgur.com/FUhl2TA.png')

      /* Minecraft server */
      const w2 = new Discord.MessageEmbed()
        .setColor('E14E65')
        .setAuthor('Minecraft server', 'https://i.imgur.com/0ABgjFp.png')
        .setDescription(
          '**Server IP:** `elkia.club`\n' +
          '**Server Version:** `1.16`\n' +
          '**Server Location:** North America - Montreal, Canada\n' +
          'Ping <@&247684931248062464> if anything breaks.')
        .addField('Hard Difficulty', 'We\'re mostly seasoned players looking for a challenge. This also lets us make faster farms.')
        .addField('MindCrack/Hermitcraft-esque', 'True to vanilla with minor custom features. Server runs the official version, so your redstone contraptions will work fine.')
        .addField('Seasons',
          'We\'re currently on our fifth season, launched with the release of 1.16 on **June 24th 2020**. Seasons end upon a majority vote. ' +
          'Server gets reset with world files made available. ' +
          '*Every season of Elkia moving from season 4 onwards concludes with a server tour, which is to be recorded.*')
        .addField('The map seed is public', 'Our current seed `66966175304215` was chosen via a public vote. Explore the seed on [MineAtlas!](http://mineatlas.com/?levelName=ElkiaClubSeason5&seed=66966175304215) We also maintain a sporadically updated [online render of our world](https://olympus.elkia.club/r/Map/).')

      await message.channel.send({ embed: w2, files: [w21] })

      /* Custom Features */
      const w3 = new Discord.MessageEmbed()
        .setColor('F98D52')
        .setAuthor('Custom features', 'https://i.imgur.com/OSVWhhw.png')
        .setDescription('Our server uses a homebrew [datapack](https://github.com/elkiaclub/ElkiaDatapack) to enhance vanilla gameplay with Elkia flavour. For the full experience, our custom [resourcepack](https://github.com/elkiaclub/Apollo) is recommended.')
        .addField('No endermen griefing and no firespread', 'Less things to worry about... Explore more building options!')
        .addField('One-player sleeping', 'Only one player has to sleep to skip the night. Includes randomized custom chat messages!')
        .addField('Modified loot tables', 'The Ender Dragon drops Elytra and a Dragon Egg upon death. We\'ve also rescaled drop rates for shulker shells - each shulker should drop 2.')
        .addField('Decorative player heads',
          'All mobs have a small chance to drop their heads \n...when killed by a player. Every single mob, and almost every variation. Drop rates are loosely based on farmability. *Gotta catch them all!*\n' +
          'Players drop their head on a PVP death \n These heads have the player\'s skin baked-in to cut down on lag. *Get a trophy when you behead your prey.*\n' +
          'Wandering Traders sell miniature blocks \n Using a [modified version](https://github.com/elkiaclub/wandering-trades-miniblocks) of Vanilla Tweak\'s [Wandering Trades](https://www.youtube.com/watch?v=L3En7cuOdHY) datapack, all wandering traders will have additional trades for playerheads with texures of vanilla blocks. *Miniblocks!*'
        )
        .addField('Optional custom models!', 'Available with our [resourcepack](https://github.com/elkiaclub/Apollo). Special models for tools (30+ are for swords) that are easily obtained.')
        .addField('Fully customizable armour stands!', 'Yes we\'re using, the [Hermitcraft book!](https://www.youtube.com/watch?v=A25hSBnM7dM) Go wild.')
        .addField('Silence mobs', 'Nametagging any mob `Silent` will make them shut up, permanently.')
        .addField('Quality-of-life recipes',
          ' - Cheaper recipe for crafting chains\n' +
          ' - Blackstone can be gilded by surrounding it with 8 golden nuggets\n' +
          ' - Stripped logs can be converted back to logs\n' +
          ' - Fence gates can be converted to fences and vice versa\n' +
          ' - Cobwebs can be crafted using 8 string and a spider eye\n' +
          ' - Dispensers are less pain to craft\n' +
          ' - Recipes for crafting chests and hoppers in bulk\n' +
          ' - 4 flint can be crafted into a block of gravel\n' +
          ' - Blue and packed ice can be unpacked\n'
        )
        .addField('Universal Dyeing', 'Any colored block can be re-dyed. Wool, Glass, Terracotta, Concrete... if it can be colored, it can be re-colored. \\**beds not included*')
        .addField('Coordinates Heads Up Display', 'You can show your ingame coordinates with a special [Heads Up Display](https://www.youtube.com/watch?v=LSJNVuKMVrY). Simply run command \'/trigger ch_toggle\' to show or hide this feature.')
        .addField('Item description for Beehives and Bee Nests', 'You can see the number of bees in the hive/nest as well as the honey level once they are in your inventory.')
        .setFooter('We hope you like our special setups and are always open to suggestions and feedback!')

      await message.channel.send({ embed: w3 })

      /* Minecraft Footnotes */
      // @ts-ignore
      const w4 = new Discord.MessageEmbed()
        .setColor('EBE051')
        .setAuthor('Gameplay recommendations', 'https://i.imgur.com/2fY9gcZ.png')
        .setDescription('To keep the server from chugging, we recommend employing a number of advanced techniques.')
        .addField('Space demanding areas out',
          'Our server runs with the default of 10 view distance. Meaning, 10 chunks in a radius around a player are being loaded. ' +
          'Putting demanding farms out of areas that are likely to be loaded by players helps reduce lag.')
        .addField('Keep spawn chunks empty',
          '[Spawn chunks](https://www.youtube.com/watch?v=wQrmAps0Udo) are an area of 12x12 chunks where players are initially spawned - which are always loaded. ' +
          'This area is reserved for community farms which require it. Blocking mob spawning within spawn chunks will also improve spawning rates for the rest of the server.')
        .addField('Don\'t forget the off switch', 'Implement a way to disable your farms while they are not required to be in use.')
        .addField('Avoid too many entities', 'Thousands of entities can bring the server to its knees. Make sure your farms implement overflow protection.')
        .addField('Generating new chunks takes a lot of power', 'Performance might be limited while other players are exploring. Beginning of a season is likely to be unstable.')
        .addField('Keep your Discord username recognizable', 'We allow for changing nicknames. If your username on Discord doesn\'t match your Minecraft username, kindly put it in parentheses so other players can tell who you are.')

      await message.channel.send({ embed: w4 })

      /* Useful co-ords */

      /* Membership */
      const w51 = new Discord.MessageAttachment('https://i.imgur.com/d0KpsFL.png')

      /* Membership Benefits */
      // @ts-ignore
      const w5 = new Discord.MessageEmbed()
        .setColor('6DBB5B')
        .setAuthor('About Membership', 'https://i.imgur.com/6cBS0SX.png') // todo: add icon
        .addField('Minecraft server',
          'Get whitelisted on our Minecraft server.')
        .addField('Participate',
          'Our <#451803995103821834> are open, so don\'t be afraid to throw a party. ')
        .addField('Join clubs',
          'Clubs are separate, topic-specific channels locked behind a role. You can join clubs via our bulletin board. soon:tm:')
        .addField('Trophies',
          'Earn a commemorative `🏆 role` by participating in special community events or tournaments. ')
        .addField('Community-driven',
          'We value each member\'s opinion and solve issues with the community involved. There is no clear leadership structure ruling the server, everyone is free to work on whichever project they desire. ' +
          'You have the power to make stuff happen. Gather a few folks around to base together or grab a friend for a round of chess. \n' +
          'If you need directions, just ask in <#247684832425934849>.')
        .addField('Admin is a friend',
          'We are purposely not differentiating <@&247684931248062464> apart in the member list.\n' +
          'Administrators make sure things are running smoothly. *You can summon one with an <@&247684931248062464> ping!* ' +
          ' They\'ll mediate arguments, maintain and restart the server when called, but are otherwise just regular members, like you.')
        .addField('Meetups',
          'Every wednesday at [8PM GMT](https://google.com/search?q=8pm+gmt) is meetup time, aka the *[Cense-day](https://soundcloud.com/cernokneznikutoci/censeday/s-249Ju)[[text](https://www.rappad.co/rap/708756)]*, when all available members are encouraged to meet. ' +
          'It\'s the time to get organized and play together. If nobody has done it already, go ping @everyone and jump into a voice channel.')

      await message.channel.send({ embed: w5, files: [w51] })

      /* Membership Rules */
      // @ts-ignore
      const w6 = new Discord.MessageEmbed()
        .setColor('5286DA')
        .setAuthor('Membership rules', 'https://i.imgur.com/TdqTMMx.png') // todo: add icon
        .addField('Absolutely no griefing or stealing',
          'Respect other members, and try to make friends! The people of our community are very friendly, so don\'t be an ass.')
        .addField('Be mature',
          'Keep arguments civil. Hate speech is not tolerated. Swearing is fine, just don\'t be Gordon Ramsey.')
        .addField('Sign your stuff',
          'Put up signs or original banners to mark your builds and belongings. Unsigned stuff is considered free real estate.')
        .addField('Killing players without an agreement is not allowed',
          'All items must be returned to dead players when PvP is involved unless bet.')
        .addField('Official stance on duping items',
          'We\'re fine with [duping tnt](https://www.youtube.com/watch?v=CJAbnB4p52g) and [rails and carpets](https://www.youtube.com/watch?v=zNTjij5xyno). Any other form of duping is not allowed. Duped items should not be traded. If your stuff gets duped, dispose of illegal items.')
        .addField('No hacked clients, x-ray, freecam, flyhacks, forcefield, etc.',
          'Client side mods that do not provide unfair advantage are allowed. (i.e. Optifine, InventoryTweaks, minimaps, etc., ask <@&247684931248062464> if unsure)')
        .addField('Pranking is allowed',
          'As long as it doesn’t interfere with the rules listed above. Try not to go too overboard, pranks should be fun for both parties involved. Please avoid the use of lava, TNT, and other destructive elements.')
        .addField('Include a codeword somewhere in your application',
          'This is so we know you\'ve read the rules. Use code penguin.')
        .addField('Be mindful',
          'Please patch up creeper holes, cut down trees all the way and avoid leaving random junk around.')
        .addField('Recording and streaming',
          'Sure, go ahead. We\'d love to see your work, show off in <#296289660265562112>. Just mention you\'re rolling when you\'re in voice chat with other members.')
        .addField('Channels etiquette',
          'Keep discord channels on topic. Use <#247684832425934849> or <#251698034784731137> for discussion about other channels. Misuse of the <#451803995103821834> channel will result in the loss of posting privileges in that channel.')

      await message.channel.send({ embed: w6 })

      /* Apply */
      // @ts-ignore
      const w7 = new Discord.MessageEmbed()
        .setColor('714EB3')
        .setAuthor('Become a Member', 'https://i.imgur.com/C1HXAlr.png')
        .addField('Apply for membership',
          '**This community leans towards applicants that are 18+**, but it isn\'t a hard rule. ' +
          'Blow us away with a stunning application. All we ask is that you be a mature, open-minded person.'
        )
        .addField('Application process',
          ':one: Visit <#247808364896190464> and leave your application there.\n' +
          '*Make sure you\'ve read the Membership Rules. Preferably, use the application template.*\n' +
          ':two: Wait for <@&247684931248062464> to review your application.\n' +
          '*This usually happens within 24 hours. <@&247684931248062464> might have additional questions for you, make sure you reply them.*\n' +
          ':three: Welcome to Elkia!\n' +
          '*Once you\'re a member, you\'ll gain access to additional channels. Ask someone to give you a tour of the server! We\'re happy to show you around.*')
        .addField('Application template',
          'Please take time to consider each question carefully before answering - it will greatly improve your chances if you make an effort...\n' +
          '```' +
          'Minecraft Username:\n' +
          'Age:\n' +
          'Timezone:\n' +
          'Availability:\n\n' +
          'Do you have any friends on Elkia already? If not, how did you find out about us?\n' +
          '\n' +
          'Would you be able to join us in voice chat - immediately and/or after you get to know people here? This is not required, but it\'s a plus.\n' +
          '\n' +
          'What do you want out of Elkia?\n' +
          '\n' +
          'Have you played on any survival SMP before? Got any cool stories?\n' +
          '\n' +
          'How would you describe your Minecraft playstyle? What do you do in-game?\n' +
          '\n' +
          'What is your proudest moment in Minecraft?\n' +
          '\n' +
          'What do you like to do outside of Minecraft? This is not limited to other video games.\n' +
          '\n' +
          'Is there something else you\'d like to tell us? This is your chance to obtain some easy points!\n' +
          '\n' +
          'Fun bonus question: Where would you place yourself on a DnD alignment chart?\n' +
          '\n' +
          '```')
        .setFooter('If you\'re here as someone\'s +1, let us know you\'re just tagging along in your application.')

      await message.channel.send({ embed: w7 })

      /* Donate */
      // @ts-ignore
      const w8 = new Discord.MessageEmbed()
        .setColor('7299FF')
        .setAuthor('Support the efforts', 'https://i.imgur.com/HhDJEWe.png')
        .setDescription('The best option to donate is [to directly PayPal](https://www.paypal.me/IamCerx/10EUR) <@81408444879339520> to help support the server costs. Contact each <@&247684931248062464> individually regarding any other form of donations, they all deserve love.')
        .addField('Custom role', 'If you contribute any amount over $5 towards Elkia, you may choose to receive a permanent complimentary custom role on Discord with a `$` prefix and your own color. One per member, just let <@&247684931248062464> know after sending the cash.')

      await message.channel.send({ embed: w8 })
    } catch (e) {
      console.log(e)
      await msg.channel.send(`error: \`\`\`${e}\`\`\``)
    }
  }
})
