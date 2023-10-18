// The point of this assignment is not to use the functional elements that are part of your chosen language (JavScript/Python).
// But, rather, implement the functionality from scratch using pure functions and higher level functions.
// Do the implimentation in order as given.
// We have linked to info at MDN, this is just to give a sence of how the reduce,forEach,map and filter functions should work.
//
// 🛠️ Prerequisite:
// You must create an array persons that will contain the data from https://raw.githubusercontent.com/MM-203/misc/main/data/data.json
// This must be done before the first task
//
// ----------------------------------------------------------------------------------------------------------------------------------
// Bonus challenge 🎉 (a bit hard), the functions forEach, filter and map can all be created using the function reduce.
// If you feel up for a challenge, try doing so. NB! The bonus challenge is optional.
// ----------------------------------------------------------------------------------------------------------------------------------

const people = [
  { name: "Paula Key", age: 23 },
  { name: "Riya Dickerson", age: 99 },
  { name: "Layne Colon", age: 53 },
  { name: "Pranav Giles", age: 51 },
  { name: "Kamryn Davis", age: 27 },
  { name: "Taniyah Yu", age: 17 },
  { name: "Brendon Porter", age: 23 },
  { name: "Jordin Hancock", age: 86 },
  { name: "Shawn Vargas", age: 88 },
  { name: "Sawyer Copeland", age: 14 },
  { name: "Gustavo Baldwin", age: 7 },
  { name: "Renee Wilson", age: 29 },
];

function customForEach(array, callbackFn) {
  for (let i = 0; i < array.length; i++) {
    callbackFn(array[i]);
  }
}

function customMap(array, callbackFn) {
  const mapArray = [];
  for (let i = 0; i < array.length; i++) {
    mapArray.push(callbackFn(array[i]));
  }
  return mapArray;
}

function customFilter(array, callbackFn) {
  const filterArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) {
      filterArray.push(array[i]);
    }
  }
  return filterArray;
}

function customReduce(callbackFn, initialValue, array) {
  let acc = initialValue;
  const startIndex = initialValue ? 0 : 1;
  for (let i = startIndex; i < array.length; i++) {
    acc = callbackFn(acc, array[i]);
  }
  return acc;
}

// 1
// Implement your own reduce function and count the number of people above the age of 50
// You can read about a reduce function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const countAgeAbove50 = customReduce(
  (acc, person) => {
    if (person.age > 50) {
      return acc + 1;
    }
    return acc;
  },
  0,
  people
);

console.log(countAgeAbove50);

// 2
// Implement your own forEach function and print the name of each person
// You can read about a forEach function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const printName = customReduce(
  (acc, person) => {
    console.log(`Hello ${person.name}`);
    return acc + 1;
  },
  null,
  people
);

const clearid = setInterval(() => {
    customForEach 
}, 1000);



// foreach
/*
const printName = customForEach(people, (person) => {
    console.log(`Hello ${person.name}`);
});
*/

// 3
// Implement your own map function and make everyone a year older.
// You can read about what the map function should do https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// reduce

const peopleOneYearOlder = customReduce(
  (acc, person) => {
    acc.push({
      name: person.name,
      age: person.age + 1,
    });
    return acc;
  },
  [],
  people
);

// map
/*
const peopleOneYearOlder = customMap(people, (person) => {
    return {
        name: person.name,
        age: person.age + 1
    };
});

*/

console.log(peopleOneYearOlder, "one year older");

// 4
// Implement your own filter function, and use it to find evryone under the drinking age.
// Read about filter https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// reduce

const peopleUnderDrinkingAge = customReduce(
  (acc, person) => {
    if (person.age < 18) {
      acc.push(person);
    }
    return acc;
  },
  [],
  people
);

// filter
/*
const peopleUnderDrinkingAge = customFilter(people, (person) => {
    return person.age < 18;
}
);
*/

console.log(peopleUnderDrinkingAge, "under drinking age");

// 5
// Now create a function sum, that takes a list of numbers and returns the sum
// Try to use your previously created functions to make this function
// Sum the total age of persons using this new function
// NB! Do not manualy create the age listing

function sum() {
  return customReduce(
    (acc, curr) => {
      return acc + curr.age;
    },
    0,
    people
  );
}

const ages = customReduce(
  (acc, person) => {
    acc.push(person.age);
    return acc;
  },
  [],
  people
);

const totalAge = sum();
console.log(totalAge, "total age");

// 6
// Now create a function average, that returns the average of a list of numbers
// Try to use your previously created functions to make this function
// calculate the average age of the persons using this function
// NB! Do not manualy create the age listing

const ageArray = customReduce(
  (acc, person) => {
    acc.push(person.age);
    return acc;
  },
  [],
  people
);

function average(numbers) {
  const total = sum(numbers);
  return total / numbers.length;
}

const averageAge = average(ageArray);
console.log(averageAge);

// 7
// Finaly create a max and a min function that respectivly returns the maximum value and the minimum value
// Only use previously created functions to acchive this.
// Then find the min and max age of ther persons.

function max() {
  return customReduce(
    (acc, curr) => {
      if (acc > curr.age) {
        return acc;
      }
      return curr.age;
    },
    0,
    people
  );
}

function min() {
  return customReduce(
    (acc, curr) => {
      if (acc < curr.age) {
        return acc;
      }
      return curr.age;
    },
    undefined,
    people
  );
}

const maxAge = max(ages);
const minAge = min(ages);
console.log(maxAge);
console.log(minAge);
