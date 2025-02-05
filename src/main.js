for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

let s = 0; // Initialize sum to 0
for (let i = 1; i <= 50; i++) {
  // Loop from 1 to 50
  sum += i; // Add the current value of i to sum
}
console.log(sum); // Output the total sum

for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) break; // Exit when i equals 5
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) continue; // Skip when i equals 5
  console.log(i);
}

let number;
do {
  number = Math.floor(Math.random() * 100) + 1;
  console.log(number);
} while (number !== 27);

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

for (let i = 0; i < 100; i++) {
  console.log(Math.floor(Math.random() * 100) + 1);
}

let smm = 0;
for (let i = 1; i <= 1000; i++) {
  sum += i;
}
console.log(sum);

let sm = 0;
for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);

let summ = 0;
for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);

let password = "";
for (let i = 0; i < 8; i++) {
  let charCode = Math.floor(Math.random() * 94) + 33;
  password += String.fromCharCode(charCode);
}
console.log(password);

let str = "";
for (let i = 0; i < 10; i++) {
  str += Math.random() > 0.5 ? " " : "?";
}
console.log(str);

for (let i = 0; i < str.length; i++) {
  if (str[i] === "?") {
    console.log("Position of ?: " + i);
    break;
  }
}

let roomSize = 10;
let wall = "#";
let mysteryBox = "?";
let emptySpace = " ";

let room = [];

for (let i = 0; i < roomSize; i++) {
  room[i] = [];
  for (let j = 0; j < roomSize; j++) {
    if (i === 0 || i === roomSize - 1 || j === 0 || j === roomSize - 1) {
      room[i][j] = wall; // Walls at boundaries
    } else {
      room[i][j] = emptySpace;
    }
  }
}

const randomX = Math.floor(Math.random() * (roomSize - 2)) + 1;
const randomY = Math.floor(Math.random() * (roomSize - 2)) + 1;
room[randomX][randomY] = mysteryBox;

for (let row of room) {
  console.log(row.join(""));
}

