/**
    * @description      : 
    * @author           : ellen
    * @group            : 
    * @created          : 27/02/2023 - 19:52:44
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/02/2023
    * - Author          : ellen
    * - Modification    : 
**/
// a temparay file where slash commands will be made 
// before adding slash commands you must gain access to your sever's id and bot's id

// add the env to this file
require('dotenv').config();


// IMPORT THE DISCORD LIBRARY
const { REST, Routes } = require('discord.js');

//  define the slash commands as an array and add objects
const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!',
    },

];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

// create a function for slash commands
// use async for the annon function



(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log('Slash commands were registered successfully!');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();
