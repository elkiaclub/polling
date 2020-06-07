export const defaultSections =
[
  {
    categoryPreface: '__**World Generation**__\n I think it\'s pretty much set that we\'d like to continue with Vanilla on Hard difficulty, however there\'s still ways to spice things up.',
    sections: [
      {
        title: 'Seed',
        description: 'Seed is literally the part that makes a Minecraft world what it is. While we could just pick a random one as we did with Season 4 (elkia is kinda random, right?), there\'s room to improve. With many factors to consider, my belief is that we should focus on efficiency.\n' +
          'How far away is the nearest jungle? Ice spikes? Multiple mesas and desserts for acquiring resources?',
        options: [{
          emoji: '🖥️',
          title: 'Setting up a seed hunting script to generate a seed with optimal composition of biomes around spawn area.'
        }, {
          emoji: '🔍',
          title: 'Manual seed hunting (*future vote for seeds*)'
        }, {
          emoji: '❓',
          title: 'Leaving it to chance and picking a random seed'
        }]
      },
      {
        title: 'Alternate world generation',
        description: 'Let\'s face it, default Minecraft can be a bit boring. Amplified is not happening, while interesting, it brings more hurdles (such as low fps due to lighting updates, difficulty getting around pre-elytra, massive lag generating new chunks). However multiple admins are interested in Large Biomes. With the right seed, major drawbacks (like distance between biomes) could be overcome, but some things are still a hit or miss. It\'s sick for building tho.',
        options: [{
          emoji: '🌎',
          title: 'Yes, let\'s do Large Biomes'
        }, {
          emoji: '🌐',
          title: 'I\'m down for alternate world generation but let\'s not do Large Biomes'
        }, {
          emoji: '🌳',
          title: 'Just keep it organic'
        }]
      },
      {
        title: 'Spawn chunks',
        description: 'As mentioned in #welcome under gameplay recommendations, it would be preferable if we can keep spawn chunks empty (spawn town doesn\'t necessarily have to be at spawn). They allow for interesting farms, and reducing what\'s going on in spawn chunks will help server performance.',
        options: [{
          emoji: '🌊',
          title: 'Pick a seed with spawn chunks over an ocean with minimal landmass (*this is the best option to help minimize lag*)'
        }, {
          emoji: '🧹',
          title: 'Don\'t limit seed options but keep the area clean for cool farms'
        }, {
          emoji: '🗃️',
          title: 'Cram everything into spawn chunks and complain about lag later'
        }]
      }
    ]
  },
  {
    categoryPreface: '__**Community Organization**__\n' +
      `While we admins want to interfere with organisation as little as possible and leave it up to the community, since I'm stewarding the S5 launch I'd like to at least get an outline, and possibly influence you all with my vision. <@&247684931248062464> will not actively manage any of this.
*Personally, I'll be shooting for more community farms and group builds. How you play is up to you, but I'm here to BRING DOWN CAPITALISM.*`,
    sections: [
      {
        title: 'Writing off landmarks',
        description: 'Nobody is using the <#573597453803192360> channel. While I think the idea is neat, it has now been repurposed for the season 4 server tour needs. Would you be too sad to see it go for season 5?',
        options: [{
          emoji: '🚑',
          title: 'pls don\'t remove it I promise I\'ll be actively using it for season 5, the concept is worth reviving'
        }, {
          emoji: '🔫',
          title: 'press \'f\' to pay respects'
        }]
      }, {
        title: 'Extra #spawn-town channel',
        description: 'We\'re considering adding a #spawn-town channel for easier server get-up. If we have a mayor (more on this later), they could hold special powers over the channel.',
        options: [{
          emoji: '👌',
          title: 'Sounds neat'
        }, {
          emoji: '🙅',
          title: 'no more useless channels pls'
        }]
      }, {
        title: 'Nether hub',
        description: 'This is pretty clearcut. Each has some pros and cons, but in 1.16 we have the option to build portals above the nether roof. Let\'s consider it.\n' +
          '*Whoever wants to be in charge of the nether hub this season may veto this poll.*',
        options: [{
          emoji: '🐦',
          title: 'Above nether ceiling'
        }, {
          emoji: '🐟',
          title: 'Bellow nether ceiling'
        }]
      }, {
        title: 'World Border',
        description: 'In the past, we\'ve experimented with world borders. We\'ve tried an expanding one to keep exploration fresh and settlements close-by, yet it was pretty limiting. Nowadays, we keep a world border to limit excess exploration so our world files don\'t get out of control (current size of season 4 is ~10GB). yet this can be limiting as well.',
        options: [{
          emoji: '🗺️',
          title: 'No borders, lift all restrictions'
        }, {
          emoji: '🛫',
          title: 'Increase current world border size'
        }, {
          emoji: '🎯',
          title: 'Keep it as it is'
        }, {
          emoji: '🏝️',
          title: 'Smaller border'
        }]
      }, {
        title: 'Spawn town',
        description: 'Every server needs a spawn town. While you might base someplace remote, the town is where it\'s at. We\'ve toyed around with the idea of having a mayor back in February, however it needs more fleshing out. In abstract, mayors would be in charge of the town. Based on this poll, we might do some more later.',
        options: [{
          emoji: '👑',
          title: 'Periodic mayoral elections (*we came up with this before hermitcraft*)'
        }, {
          emoji: '↔',
          title: 'Go with <@221346641129504768>\'s idea (*shops on one side, houses on the other*)'
        }, {
          emoji: '🌳',
          title: 'Just keep it organic'
        }]
      }, {
        title: 'Districts',
        description: 'So far we\'ve had a shopping district and a minigames district every season. I\'ve read some cool ideas floating around, so this poll is empty for now and accepts submissions.',
        options: [{
          emoji: '🎡',
          title: '"Theme" districts as in Hermitcraft 5 (Fantasy, Sci-fi, Pirate etc.)'
        }, {
          emoji: '🌳',
          title: 'Just keep it organic'
        }]
      }, {
        title: 'Land purchase in the shopping district',
        description: 'I don\'t think this needs our immediate attention, however I\'ve seen people suggesting we do this - so have a poll.',
        options: [{
          emoji: '💠',
          title: 'Pay for land and receive some back if you work on the shopping district'
        }, {
          emoji: '💎',
          title: 'Pay for land and store the diamonds in a large pile'
        }, {
          emoji: '🌳',
          title: 'Claim land for free / Just keep it organic'
        }]
      }, {
        title: 'Advertising',
        description: 'It\'s time to get to see some new faces. However it\'s disappointing when you watch them go. We have revamped the application process and increased our acceptance standards. <@&247684931248062464> is ready for a wave of new members. We\'ve been holding off doing much advertising, our current community is pretty lively. More people, more fun?',
        options: [{
          emoji: '⏰',
          title: 'Advertise right now! New members get to decide season 5 things with us.'
        }, {
          emoji: '📢',
          title: 'Advertise with release.'
        }, {
          emoji: '⏳',
          title: 'Advertise after server launches. However not immediately after, in order to avoid people that are hype for release and would only stick for a short time. On the other hand, new members will be behind in progress and might lose motivation.'
        }, {
          emoji: '📬',
          title: 'Continue to hold off on advertising and encourage invite-based system.'
        }]
      }
    ]
  },
  {
    categoryPreface: '__**Datapack features**__\n' +
    '<@&247684931248062464> already took charge and these are now implemented in a development version of our data pack. We do have some more work to get done, however we\'re still open to suggestions.\n\n' +
      '**Most of our season 4 features stay**, including:\n' +
      'Mob Heads (*already added new 1.16 mobs*)\n' +
      'One Player Sleep\n' +
      'AFK Alert and Name Change\n' +
      'PVP Heads\n' +
      'No enderman Griefing and no Firespread\n' +
      'Custom armor stands\n' +
      'Coordinate HUD (*external datapack, might be removed if we find it to cause any troubles.*)\n' +
      'Dragon drops Elytra and Shulkers drop more shells\n' +
      'Universal Dyeing (*might need updating.*)\n' +
      '**No Custom advancements** - they are pain to do. (unless someone wants to make some/find well done premade ones)\n' +
      '**Custom resourcepack will stay** and may be expanded.',
    sections: [
      {
        title: 'Miniblock decorative playerheads',
        description: 'Would we be interested in more decorative player heads? Simmilar to the system from Hermitcraft 7, where a mini version of a block can be obtained from the wandering trader as a playerhead.',
        options: [{
          emoji: '👷',
          title: 'Yay'
        }, {
          emoji: '🚧',
          title: 'Nay'
        }]
      },
      {
        title: 'Custom tool models implementation',
        description: 'Models from the Elkia resourcepack [(Apollo)](https://github.com/elkiaclub/Apollo). Weapon and tool models from our previous build worlds will be coming back to season 5.  We\'ve used to have a central trading villager where one could exchange tools to receive the custom model, however Hermitcraft S7 introduced us to the idea of using wandering traders. \n' +
          'There\'s also many other different approaches which we could explore (for example using the smithing table).',
        options: [{
          emoji: '👨‍💼',
          title: 'Keep a single trading villager'
        }, {
          emoji: '💰',
          title: 'Port custom models over to use wandering traders'
        }, {
          emoji: '⚒',
          title: 'Port custom models to be obtained via smithing'
        }]
      }
    ]
  },
  {
    categoryPreface: '__**Quality-of-life Recipes**__\n' +
      'Netherwart Block and Dark Prismarine special recipes will be removed because of easier crafting in new version\n' +
      '\n' +
      '**Currently Included are the following recipies:**\n' +
      'Ice (Packed Ice to Ice)\n' +
      'Bricks (4 bricks = 4 brick blocks)\n' +
      '2 for Dispensers\n' +
      'Dropper to Dispenser\n' +
      'Packed Ice (Blue Ice to Packed Ice)\n' +
      'Quartz (4 quartz = 4 quartz blocks)\n\n' +
      '**More \'quality of life\' recipes to be added:**\n' +
      'We\'re a bit unsure whether some of these aren\'t too much, therefore every one of them is up for vote bellow. As always, more could be considered as well.',
    sections: [
      {
        title: '4x flint -> gravel',
        options: [{
          emoji: '👽',
          title: 'Doesn\'t feel vanilla'
        }, {
          emoji: '⚖',
          title: 'Too overpowered'
        }, {
          emoji: '👍',
          title: 'Sounds cool'
        }]
      },
      {
        title: '8 logs = 4 chests',
        options: [{
          emoji: '👽',
          title: 'Doesn\'t feel vanilla'
        }, {
          emoji: '⚖',
          title: 'Too overpowered'
        }, {
          emoji: '👍',
          title: 'Sounds cool'
        }]
      },
      {
        title: '5 iron + 2 logs -> hopper',
        options: [{
          emoji: '👽',
          title: 'Doesn\'t feel vanilla'
        }, {
          emoji: '⚖',
          title: 'Too overpowered'
        }, {
          emoji: '👍',
          title: 'Sounds cool'
        }]
      },
      {
        title: '2x half slab -> full block - 6 wood types, stone, cobble, both andesite, both granite, both diorite',
        options: [{
          emoji: '👽',
          title: 'Doesn\'t feel vanilla'
        }, {
          emoji: '⚖',
          title: 'Too overpowered'
        }, {
          emoji: '👍',
          title: 'Sounds cool'
        }]
      },
      {
        title: '1 gate = 2 fences and the reverse',
        options: [{
          emoji: '👽',
          title: 'Doesn\'t feel vanilla'
        }, {
          emoji: '⚖',
          title: 'Too overpowered'
        }, {
          emoji: '👍',
          title: 'Sounds cool'
        }]
      },
      {
        title: 'stripped logs -> log 2 to 2',
        options: [{
          emoji: '👽',
          title: 'Doesn\'t feel vanilla'
        }, {
          emoji: '⚖',
          title: 'Too overpowered'
        }, {
          emoji: '👍',
          title: 'Sounds cool'
        }]
      }
    ]
  }, {
    categoryPreface: '__**Footnotes on sunsetting season 4**__:\n' +
      'World download will be made available. We could keep it up for a bit on penguin as well. Server tour is to be recorded during the last meetup of season 4 - We don\'t have anything prepared - If you can help out, <#573597453803192360> awaits you.',
    sections: [
      {
        title: 'Are you ready?',
        options: [{
          emoji: '🚂',
          title: 'Season 5 hype!'
        }, {
          emoji: '👎',
          title: 'I don\'t want a reset.'
        }]
      }
    ]
  }
]
