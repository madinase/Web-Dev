let user = {
  name: "John Smith",
  age: 35
};

let json = JSON.stringify(user);
let user2 = JSON.parse(json);


let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
  return (value === meetup) ? undefined : value;
}));


