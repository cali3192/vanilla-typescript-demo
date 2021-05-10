/**
 * Basic JS Types
 * - string
 * - number
 * - boolean
 * - object
 * - undefined
 * - null
 * - symbol
 *
 * Technically can include:
 * - BigInt
 * - function
 *
 *
 * JS is loosely typed and you can get away with anything
 * JS not v close to memory so types aren't very specific
 *
 * Write ts same way we write js
 * ts is js with extra features
 */
/*
  1. TS Types
  https://www.typescriptlang.org/docs/handbook/basic-types.html

  - Boolean
  - Number
  - String
  - Array
  - Tuple
  - Enum
  - Unknown
  - Any
  - Void
  - Null
  - Undefined
  - Never
  - Object
*/
console.log("1. TS Types");
console.log("\n\n -------------------------------- \n\n");
/*
  Implicit Declaration
*/
console.log("Implicit Declaration ");
var example = "string";
// example = 1
// example = 'typescript'
console.log("\n\n -------------------------------- \n\n");
/*
  Explicit Declaration
*/
console.log("Explicit Declaration");
var greeting;
greeting = "Hello, HRC";
// let numbers: number[]
var numbers;
numbers = [1, 2, 3];
numbers = ["1", 2];
var tuple = ["bb", 8];
console.log("\n\n -------------------------------- \n\n");
/*
  Running TSC
*/
console.log("Running TSC");
// 1. compile
// 2. run js
// viola!
console.log({ example: example, greeting: greeting });
console.log("\n\n -------------------------------- \n\n");
/*
  Type Declaration
  interface, Type, and Enum
*/
// info is our editor, how nice!
console.log("Type Declaration");
var Starfighter;
(function (Starfighter) {
    Starfighter["XWing"] = "XWing";
    Starfighter["TieFighter"] = "TieFighter";
    Starfighter["AWing"] = "AWing";
})(Starfighter || (Starfighter = {}));
// const chrisWebber: Athlete = {}
// const cali: Professional = {
//   industry: 'health tech',
//   name: 'cali'
// }
var rebelFighter = Starfighter.XWing;
console.log({ rebelFighter: rebelFighter, test: typeof rebelFighter });
console.log("\n\n -------------------------------- \n\n");
/*
  Unions
*/
console.log("Unions");
var unknownDataType;
unknownDataType = undefined;
unknownDataType = "hello world";
// const gamingSystem: System = {
//   franchise: "Pokemon Snap",
// };
console.log("\n\n -------------------------------- \n\n");
/*
  Intersections
*/
console.log("Intersections");
var examplePayload = {
    status: 200,
    errorLog: errorLog
};
console.log("\n\n -------------------------------- \n\n");
/*
  Optional Properties
*/
console.log("Optional Properties");
var formPayload = {
    route: "/api/v1/invite"
};
console.log("\n\n -------------------------------- \n\n");
/*
  Handling Unknown Data
*/
console.log("3. Handling Unknown Data");
var unknownObj = {
// someKey: 3,
// 3: 3
// 3: '3'
};
console.log("\n\n -------------------------------- \n\n");
/*
  Functions
*/
console.log("Functions");
// let numberFactory = ({ valOne, valTwo }: { valOne: number, valTwo: number }): number => {
//   const result = valOne + valTwo
//   return result
// }
// let numberFactory = ({
//   valOne,
//   valTwo,
// }: {
//   valOne: number[];
//   valTwo: number[];
// }): number => {
//   // const result = valOne + valTwo
//   // // my fav thing about TS
//   // const result
//   // console.log({ result })
//   // return result
// };
// const numberFactoryResult = numberFactory({ valOne: [1, 2], valTwo: [3, 4] })
/*
  Void
*/
console.log("Void");
// let numberFactory = ({ valOne, valTwo }: { valOne: number[], valTwo: number[] }): void => {
//   // const result = valOne + valTwo
//   // my fav thing about TS
//   const result = [...valOne, ...valTwo]
//   console.log({ result })
// }
// const numberFactoryResult = numberFactory({ valOne: [1, 2], valTwo: [3, 4] })
console.log("\n\n -------------------------------- \n\n");
/*
  Void
*/
console.log("Any \uD83D\uDE44");
// NOTE: good use case is when you bring in a 3rd party library that doesn't have its own TS library
//  essentially says to ignore TS
var tree = "1";
tree = 1;
tree = {
    type: "birch"
};
tree = ["spring"];
console.log("\n\n -------------------------------- \n\n");
