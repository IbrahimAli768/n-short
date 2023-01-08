const { Client, EmbedBuilder } = require ('discord.js')
const { token , prefix } = require('./config.json')
const client = new Client({
	intents: 131071,
     partials: [
		1, 2, 5, 3,
		4, 6, 0
	  ],
   });

/**
 * @pagesembed 
 * @install_package [npm i n-short]
 */


const shortnumber = require("n-short") // npm i n-short


client.on('ready', async () => {
	console.log("Clien On")
})

client.on('messageCreate', async pkgPage => {
	if(pkgPage.content.includes("?test")){
		let args = pkgPage.content.split(" ")
		return pkgPage.reply({content : `${shortnumber(args[1])}`})
	}
})

client.login(token)