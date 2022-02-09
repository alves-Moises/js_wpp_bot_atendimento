const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

const  SESSION_FILE_PATH = './session.json'

//generating qrcode..
client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

// Save session values to the file upon successful auth
client.on('authenticated', (session) => {
    sessionData = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
        if (err) {
            console.error(err);
        }
    });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();
