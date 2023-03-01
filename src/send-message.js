/**
    * @description      : 
    * @author           : ellen
    * @group            : 
    * @created          : 01/03/2023 - 16:12:01
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/03/2023
    * - Author          : ellen
    * - Modification    : 
**/
// This file will be used to send messages

require('dotenv').config();

const {Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        // to read messages
        IntentsBitField.Flags.MessageContent,
    ], 
});


const roles = [
    {
        id: '1080599282471682190',
        label: 'Moon Dust',
    },
    {
        id: '1080603142271549553',
        label: 'Elixer',
    },
    {
        id: '1080606858118697144',
        label: 'Iced Water ',
    },
]


client.on('ready', (c) => {
    try{

    }catch (error){
        console.log(error);
    }
});

client.login(process.env.TOKEN);