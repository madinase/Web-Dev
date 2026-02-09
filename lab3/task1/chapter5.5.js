let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)


function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]

arr.sort((a, b) => b - a);

alert( arr );

function copySorted(arr) {
  return arr.slice().sort();
}

let array = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(array);

alert( sorted );
alert( array );


function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}


let john = { name: "joel", age: 25 };
let pete = { name: "ellie", age: 30 };
let mary = { name: "Marya", age: 28 };

let users = [ joel, ellie, mary ];

let names = users.map(item => item.name);

alert( names ); 


let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));



alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); 

sortByAge(arr);


alert(arr[0].name); 
alert(arr[1].name); 
alert(arr[2].name); 

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let azim = [1, 2, 3];
shuffle(azim);
alert(azim);

alert( getAverageAge(arr) );

alert( unique(strings) )

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}