// Collection

// var, let  -> single

// attendance -> students

let dishes = ['Rice', 'sambar', 'Rasam', 'curd'];

let mainCourseEnd = dishes.indexOf('curd');

// accesseing array content

// adding at the end
dishes.push('pickle');
// removing the last element
//dishes.pop()
dishes.push('Poriyal');
console.log(dishes.length);
// adding at the first index
dishes.unshift('Payasam');
dishes.unshift('Icecream');
console.log(dishes);
// remove at first index

//dishes.shift()
console.log(dishes);

let mainCourse = dishes.slice(1, 5);
console.log(mainCourse);

let side = dishes.slice(5);
console.log(side);

let dessert = dishes.slice(0, 2);
console.log(dessert);

// Print all main course, sides and Deserts
console.log(dishes);

// splice -> Array modification

dishes.splice(dishes.indexOf('Rice'), 0);
console.log(dishes);

// For loop

for (let i = 0; i < dishes.length; i++) {
  console.log(dishes[i]);
}

for (let dish of dishes) {
  console.log(dish);
}

dishes.forEach(function (dish) {
  console.log(dish);
});

let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(function (number) {
  return number * number;
});
// Squares array -> [1,4,9,16,25]
console.log(squares);

for (let i = 0; i < numbers.length; i++) {
  numbers[i] *= numbers[i];
}
console.log(numbers);
// [1,9,25]
let oddNumbers = numbers.filter(function (number) {
  return number % 2 != 0;
});

console.log(oddNumbers);

let book1 = {
  title: 'Algebra',
  type: 'maths',
};

let book2 = {
  title: 'Organic Chemistry',
  type: 'chem',
  Id: 'OC',
};

let book3 = {
  title: 'Quantum Physics',
  type: 'Physics',
  Id: 'QP',
};

let book4 = {
  title: 'Quantum Physics II',
  type: 'Physics',
  Id: 'QPII',
};

let books = [book1, book2, book3, book4];
let phyBooks = books.filter(function (book) {
  return book.type == 'Physics';
});
console.log(phyBooks);

let libBooks = [];

// Add a book to the array
// Search book
// Delete
