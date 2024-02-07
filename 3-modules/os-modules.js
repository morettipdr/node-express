const os = require('os');

//info about user
const user = os.userInfo()
console.log(user);

//system uptime in seconds
setInterval(() => {
        console.log(`The system uptime is ${os.uptime()} seconds`);
}, 5000);

//info about operating system
const currentOS = {
    name: os.type(),
    release: os.release(),
    total: os.totalmem(),
    free: os.freemem()
}
console.log(currentOS);