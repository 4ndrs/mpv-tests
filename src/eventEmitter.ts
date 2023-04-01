import EventEmitter from "events"; // doesn't work

const hello = () => print("Hello, World");

const Emitter = new EventEmitter();

setTimeout(() => Emitter.emit("hello"), 2000);

Emitter.on("hello", hello);
