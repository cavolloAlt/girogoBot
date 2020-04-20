// Load up the discord.js library
const Discord = require("discord.js");
var schedule = require('node-schedule');  

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

var randomLines = 
[
    'No raga mi ha chiamato mariachiara devo andare',
    'Se dici serken un\'altra volta serken ti banno',
    "Ora ti banno e quitto! Kys!",
    "Ma ti credi divertente?! Ban",
    "KysKysKysKysKysKysKysKysKysKysKysKysKysKys",
    "Fra sei pesante",
    "Ja fra stasera proprio no",
    "Oh si regina calpestami pls",
    "Tranquilla chiedo ai miei amici per i tuoi compiti <3",
    "*chiamata da 5 ore*",
    "No raga scusate ma vado a parlare con mariachiara",
    "Oh discord",
    "Hey siri chiama macchinetta in vivavoce",
    "Hey siri chiama puccio merda in vivavoce",
    "Non li so fare i tuoi compiti difficilissimi della scuola privata",
    "Tranquilla chiedo ai miei amici per i tuoi compiti <3",
    "Sono difficilissimi... 3+3 quanto fa???",
    "Le scuole private sono difficili"
]

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Serving ${client.guilds.size} servers`);

  var j = schedule.scheduleJob('*/30 * * * *', function(){
    var randomIndex = Math.floor(Math.random() * randomLines.length); 
    var randomElement = randomLines[randomIndex];

    await message.channel.send(randomElement);
  });
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "flame") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    flame = [
        "Ora ti banno e quitto! Kys!",
        "Ma ti credi divertente?! Ban",
        "KysKysKysKysKysKysKysKysKysKysKysKysKysKys",
        "Fra sei pesante",
        "Ja fra stasera proprio no"
    ]

    var randomIndex = Math.floor(Math.random() * flame.length); 
    var randomElement = flame[randomIndex];

    await message.channel.send(randomElement);
  }
  
  if(command === "mariachiara") {
    flame = [
        "Oh si regina calpestami pls",
        "Tranquilla chiedo ai miei amici per i tuoi compiti <3",
        "*chiamata da 5 ore*",
        "No raga scusate ma vado a parlare con mariachiara"
    ]

    var randomIndex = Math.floor(Math.random() * flame.length); 
    var randomElement = flame[randomIndex];

    await message.channel.send(randomElement);
  }

  if(command === "compiti") {
    flame = [
        "Non li so fare i tuoi compiti difficilissimi della scuola privata",
        "Tranquilla chiedo ai miei amici per i tuoi compiti <3",
        "Sono difficilissimi... 3+3 quanto fa???",
        "Le scuole private sono difficili"
    ]

    var randomIndex = Math.floor(Math.random() * flame.length); 
    var randomElement = flame[randomIndex];

    await message.channel.send(randomElement);
  }

  if(command === "league") {
    flame = [
        "Vado 0-5 e poi afk",
        "Se mi flammi vengo a intarti la lane",
        "Gioco solo champion difficili anche se non li so usare",
        "Mi presti un account e te lo banno per flame al primo game"
    ]

    var randomIndex = Math.floor(Math.random() * flame.length); 
    var randomElement = flame[randomIndex];

    await message.channel.send(randomElement);
  }
});

client.login(process.env.BOT_TOKEN);
