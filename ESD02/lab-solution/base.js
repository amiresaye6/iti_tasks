// base.js
import { Rectangle, Square } from './SquaresModule.js';
import { Circle } from './CircleModule.js';

const rectangle = new Rectangle('Red', 5, 10);
console.log(`Rectangle Area: ${rectangle.getArea()}`);

const square = new Square('Blue', 4);
console.log(`Square Area: ${square.getArea()}`);

const circle = new Circle('Green', 7, 0, 0);
console.log(`Circle Area: ${circle.getArea()}`);
