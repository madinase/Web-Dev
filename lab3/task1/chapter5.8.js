let messages = [
  {text: "Hello", from: "Joel"},
  {text: "How goes on life?", from: "Evan"},
  {text: "See you soon", from: "Alic"}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);


readMessages.add(messages[0]);

alert("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();


let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
