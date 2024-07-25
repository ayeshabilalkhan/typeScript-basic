// 1. Variables aur Type Annotations
// Number variable
var num = 5;
// String variable
var message = "Hello, TypeScript!";
// Boolean variable
var isDone = false;
// Array of numbers
var numbers = [1, 2, 3, 4, 5];
// Tuple (fixed size array with defined types)
var person = ["John", 25];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var chosenColor = Color.Blue;
