const https = require('https');
const options = {
    hostname: 'secure.runescape.com',
    port: 443,
    path: '/m=forum/sl=0/forums',
    method: 'GET'
};

const req = https.request(options,res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d);
    })
});

req.on('error', error => {
    console.error(error);
});

req.end();