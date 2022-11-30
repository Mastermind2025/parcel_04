// //
// const validJSON = '{"name": "Mango", "age": 3}';

// console.log(validJSON);
// console.log(typeof(validJSON)); // This string
// const newJSON = JSON.parse(validJSON);// String to Object

// console.log(typeof(newJSON)); // Object
// // console.log(validJSON);

// const newString = JSON.stringify(newJSON);// Object to string
// console.log(typeof(newString));// string

// ===============================================================================>

// Arrow function
// const toFun = x => console.log(x);
// toFun(2);

// ==================================================================================>

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'boobs',
    body: 'boobs',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

 fetch('https://jsonplaceholder.typicode.com/posts/101')
      .then(response => response.json())
      .then(json => console.log(json))
