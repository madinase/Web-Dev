alert(null || 2 || undefined); // 2


alert(alert(1) || 2 || alert(3));
// Alerts: 1, then 2

alert(1 && null && 2); // null

alert(alert(1) && alert(2));
// Alerts: 1
// Result: undefined


alert(null || 2 && 3 || 4); // 3


if (age >= 14 && age <= 90) {
  // inside range
}


if (!(age >= 14 && age <= 90)) {
  // outside range
}
if (age < 14 || age > 90) {
  // outside range
}


if (-1 || 0) alert('first');      // runs
if (-1 && 0) alert('second');     // does NOT run
if (null || -1 && 1) alert('third'); // runs


let userName = prompt("Who's there?", "");

if (userName === "Admin") {
  let password = prompt("Password?", "");

  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === "" || password === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }

} else if (userName === "" || userName === null) {
  alert("Canceled");
} else {
  alert("I don’t know you");
}
