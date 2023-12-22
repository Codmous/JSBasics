//Creating an object using funxtions
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
      console.log('Hello!');
    };
  }
  
  let person = new Person('John', 30);
  