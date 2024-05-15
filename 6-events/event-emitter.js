const EventEmitter = require("events");
const customEmitter = new EventEmitter();
customEmitter.on("response", (name, id) => {
    console.log(`data received, name: ${name}`);
})
customEmitter.on("response", (name, {id}) => { 
    console.log(`data received, id: ${id}`);
})


customEmitter.emit("response", "john", {"id": 34});