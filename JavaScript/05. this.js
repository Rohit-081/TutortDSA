// The “this” keyword refers to the object that the function is a property of.
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

/*   Arrow Functions:-
   What About this?
   The handling of this is also different in arrow functions compared to regular functions.
   In short, with arrow functions there are no binding of this.
   In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
   With arrow functions the this keyword always represents the object that defined the arrow function.
   Let us take a look at two examples to understand the difference.
   Both examples call a method twice, first when the page loads, and once again when the user clicks a button.
   The first example uses a regular function, and the second example uses an arrow function.
   The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice, because the window object is the "owner" of the function.
 */
