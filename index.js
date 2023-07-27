const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to kamss.op
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', // DONT TOUCHE
    hour12: true,
    hour: 'numeric', // DONT TOUCHE
    minute: 'numeric' // DONT TOUCHE
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('YOUR ID APP')
    .setType('STREAMING')
    .setURL('https://twitch.tv/kamss_op')  
    .setState('YOUR STATE')
    .setName('YOUR NAME')
    .setDetails(`NAME THAT THE STREAM WILL DISPLAY`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('You can put links in tenor or discord and etc.')
    .setAssetsLargeText('Text when you hover the Large image')
    .setAssetsSmallImage('You can put links in tenor or discord and etc.')
    .setAssetsSmallText('Text when you hover the Small image')
    .addButton('NAME BUTTON 2', 'YOUR LINK')
    .addButton('NAME BUTTON 2', 'YOUR LINK');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); // dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ``; // NAME THAT THE STREAM WILL DISPLAY
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
