/**
    * @description      : 
    * @author           : ellen
    * @group            : 
    * @created          : 23/02/2023 - 20:58:40
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/02/2023
    * - Author          : ellen
    * - Modification    : 
**/
// adds your token to every file
require('dotenv').config();

// destructure by creating an object for my bot
// the reason for destructure is to import things inside 
// the curly braces into the discord package
// the client is our bot
const {Client, IntentsBitField} = require('discord.js');

// create a new client 
// instents is only required inside the new client object the rest are optional
// intents will be an array
// the reason for intents: is a set of permissions that your bot 
// can use in order to gain access to a set of events
// refer to discord gateway for intents
// guild is a server
// next add more guild intents
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        // to read messages
        IntentsBitField.Flags.MessageContent,
    ], 
});

// c is for client
client.on('ready', (c) => {
    // this pulls up the bots usertag
    console.log(`✨ ${c.user.tag} is aliveee...`);
});





// Create a new event listener that will create the bot's messages
// this will trigger the bot everytime a user sends out a message
// the intents above help make this event listner work
// use a call back function

client.on('messageCreate', (message) => {
    // this if statemnet helps the bot know the difference 
    // btwn the user and itself
    if (message.author.bot) {
        return;
    }

    
    
    // refer to discord.js for documentation
    // console.log(message.content);



    // getting the bot to reply to the user
    if (message.content === 'hello') {
        message.reply('Was Good!');
    }
})


// now log into the bot
// the client is the bot instance

// call the client below
// add a string inside the paraenthesis which is the token
client.login(process.env.TOKEN);

// we have to run the file automatically
// to do so npm install -g nodemon to install it globally
//  type in nodemon in terminal
// this will get our bot to go online
//  add an event listner before the client
//  securing my token with : npm install dotenv

// start bot with nodemon