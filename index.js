const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', message => {
  if (message.content === 'shit') {
   // message.reply('pong');
    message.channel.sendMessage('ah yh');
  }
});

bot.on('message', message => {
  if (message.content === 'hehe xd') {
   // message.reply('pong');
    message.channel.sendMessage('Didnt you bring me here to be the crazy one?');
  }
});

bot.on('message', message => {
  if (message.content === 'Hi') {
   // message.reply('pong');
    message.channel.sendMessage('Everyone, do you smell that? It is the smell of doom!');
  }
});



bot.on('message', message => {
  if (message.content === 'sorry') {
   // message.reply('pong');
    message.channel.sendMessage('Sorry Sorry Sorry Sorry Sorry Sorry naega naega naega meonjeo nege nege nege bbajyeo bbajyeo bbajyeo beoryeo baby!');
  }
});

bot.on('message', message => {
  if (message.content === 'shawty') {
   // message.reply('pong');
    message.channel.sendMessage('Shawty Shawty Shawty Shawty nuni busyeo busyeo busyeo sunmi makheyo makheyo makheyo naega michyeo michyeo baby!');
  }
});

bot.on('message', message => {
  if (message.content === 'damn') {
   // message.reply('pong');
    message.channel.sendMessage('ddanddan ddanddada dda ddaranddan ddanddan ddanddada dda!');
  }
});

bot.on('message', message => {
  if (message.content === 'nico nico ni') {
   // message.reply('pong');
    message.channel.sendMessage('SHA SHA SHA!!!');
  }
});

bot.on('message', message => {
  if (message.content === 'Sorry') {
   // message.reply('pong');
    message.channel.sendMessage('SORRY SORRY SORRY SORRY!!!');
  }
});


bot.on("ready", () => {
  bot.user.setPresence({game: {name:"PLAYING BLACK SUIT"}})
  console.log('I have jackoo: {SERVERNAME}')
})




bot.on('ready', ()=>{
    console.log(`Logged in as ${bot.user.tag}!`);
    voiceChannel = bot.guilds.find('name', 'DREAMENERG3T1CER').channels.find('name', 'HEECHUL');
    voiceChannel.join().then(()=>{
        console.log(`Connected to ${voiceChannel.name}!`);
    });
});


// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});


  bot.login('NDA4MDY2Njk3MDUyOTQ2NDM0.DVLRkQ.1eQ4OsRD2S9M1j-_9qtv3TzOufc');
