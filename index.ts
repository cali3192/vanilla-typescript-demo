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

/* 
  Running TSC
*/
console.log(`Running TSC`);
// 1. compile
// 2. run js
// viola!

console.log(`\n\n -------------------------------- \n\n`);

/* 
  Implicit Declaration
*/
console.log(`Implicit Declaration `);
let example = "string";
// example = 1
// example = 'typescript'

// console.log({ example })

console.log(`\n\n -------------------------------- \n\n`);

/* 
  Explicit Declaration
*/
console.log(`Explicit Declaration`);
let greeting: string;

greeting = "Hello, HRC";

// let numbers: number[]
let numbers: Array<number>;
numbers = [1, 2, 3];
// numbers = ["1", 2];

const tuple: [string, number] = ["bb", 8];

// console.log({ numbers, tuple })

console.log(`\n\n -------------------------------- \n\n`);

/* 
  Type Declaration
  interface, Type, and Enum
*/
// info is our editor, how nice!
console.log(`Type Declaration`);
// https://blog.logrocket.com/types-vs-interfaces-in-typescript/

interface Athlete {
  name: string;
  sport: string;
  age: number;
  professional?: boolean;
}

// const chrisWebber: Athlete = {}

type Pokemon = {
  type: string[];
  number: number;
  evolvesTo?: string;
};

const spheal: Pokemon = {
  type: ["ice", "water"],
  number: 363,
  evolvesTo: "Seeleo",
};

// way better than find/replace!
enum StarFighter {
  XWing = "XWing",
  TieFighter = "TieFighter",
  AWing = "AWing",
}

const rebelFighter: StarFighter = StarFighter.XWing;

// console.log({ chrisWebber, spheal, rebelFighter });

console.log(`\n\n -------------------------------- \n\n`);

/* 
  Unions
*/
console.log(`Unions`);

let unknownDataType: string | undefined;

unknownDataType = undefined;
unknownDataType = "hello world";

type CaliforniaTeams =
  | "Sacremento Kings"
  | "Golden State Warriors"
  | "LA Lakers"
  | "San Francisco 49ers"
  | "San Francisco Giants";

// const favoriteTeam: CaliforniaTeams
// const favoriteTeams: CaliforniaTeams[];

type NintendoSwitch = {
  franchise: "Pokemon Snap";
  handheld: boolean;
};

type XBox = {
  franchise: "Halo";
  xboxliveUsername: string;
};

type System = NintendoSwitch | XBox;

// const mySystem: System = {
//   franchise: "Pokemon Snap",
// };

// console.log({ unknownDataType, favoriteTeam, favoriteTeams, mySystem });

console.log(`\n\n -------------------------------- \n\n`);

/* 
  Intersections
*/
console.log(`Intersections`);
type UserResponse = {
  uuid: string;
  age: number;
};

type ErrorResponse = {
  status: 200 | 400 | 500;
  errorLog: string | undefined;
};

type APIResponse = UserResponse & ErrorResponse;

const examplePayload: APIResponse = {
  status: 200,
  errorLog: undefined,
  uuid: "some-long-uuid",
  age: 29,
};

// console.log({ examplePayload });

console.log(`\n\n -------------------------------- \n\n`);

/* 
  Optional Properties
*/
console.log(`Optional Properties`);

// {
//   payload?: string
// }

// vs

// {
//   payload: string | undefined
// }

type PostPayload = {
  route: string;
  message?: string;
  // message: string | undefined
};

const formPayload: PostPayload = {
  route: "/api/v1/invite",
};

// console.log({ formPayload })

console.log(`\n\n -------------------------------- \n\n`);

/* 
  Handling Unknown Data
*/

console.log(`Handling Unknown Data`);

type MiscObj = {
  [key: string]: number;
  // [key: number]: string
};

const unknownObj: MiscObj = {
  // someKey: 3,
  // 3: 3
  // 3: '3'
};

console.log(`\n\n -------------------------------- \n\n`);

/* 
  Functions
*/
console.log(`Functions`);

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
console.log(`Void`);

// let numberFactory = ({ valOne, valTwo }: { valOne: number[], valTwo: number[] }): void => {
//   // const result = valOne + valTwo

//   // my fav thing about TS
//   const result = [...valOne, ...valTwo]

//   console.log({ result })
// }
// const numberFactoryResult = numberFactory({ valOne: [1, 2], valTwo: [3, 4] })

console.log(`\n\n -------------------------------- \n\n`);

/* 
  Void 
*/
console.log(`Any 🙄`);
// NOTE: good use case is when you bring in a 3rd party library that doesn't have its own TS library
//  essentially says to ignore TS
let tree: any = "1";
tree = 1;
tree = {
  type: "birch",
};
tree = ["spring"];

console.log(`\n\n -------------------------------- \n\n`);
