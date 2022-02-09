const fs = require('fs');   // to save file json
const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');

// const client = new Client();   //comentar se já existir usuário
const  SESSION_FILE_PATH = './session.json'

// ******************************** 
if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}
const client = new Client({  //comentar se for criar novo usuario
    session: sessionData
});
//************************************ 

//generating qrcode..
// client.on('qr', (qr) => {
//     qrcode.generate(qr, {small: true});
// });

// Save session values to the file upon successful auth
// client.on('authenticated', (session) => {
//     sessionData = session;
//     fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
//         if (err) {
//             console.error(err);
//         }
//     });
// });


client.on('ready', () => {
    console.log('Client is ready!');
});


client.initialize();

client.on('message', message => {
	if(message.body === '!ping') {
		message.reply('pong');
	}
    if(message.body.startsWith('meu nome')){
        message.reply('roberta')
    }
});