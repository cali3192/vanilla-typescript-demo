/**
 * Running TSC
 * defualt is es3 but adding a tsconfig, you can change your target
 */
const helloWorld = (name) => {
  const message = `Hello ${name}`;
  console.log({ message });

  return message;
};

helloWorld("World");

/**
 * 1. Adding Types
 */

const helloWorldOne = (name: string): string => {
  const message = `Hello ${name}`;
  console.log({ message });

  return message;
};

helloWorldOne("World1");
// helloWorldOne(4);

/**
 * 2. Unsupported Code
 *
 */
const helloWorldTwo = async (name: string) => {
  const message = `Hello ${name}`;
  console.log({ message });

  return message;
};

helloWorldTwo("World 2");

/**
 * 3. Tooling and integrating documentation
 *    - fun way to explore what's available to you
 *    - basicallt built in docs
 */

// const url = new URL().password

/**
 * 4. Type Inferences
 *    - default inference is any
 */

let favorite = 23; // number type is infered

// favorite = '23' // vanilla JS would not catch this bug

let cohort: number | string; // explicit declaration
cohort = 33;
cohort = "33";

/**
 * 5. Any
 *    - tells compiler not to typecheck
 */
let badPracticeValue: any;

badPracticeValue = 23;

badPracticeValue = "23";

badPracticeValue = { key: false };

/**
 * 6. Defining Input and Output values
 *
 */

// const sumValue = (x: number, y: number) : number => {
//   // return x + y;
//   // try mapping through x

// return x.map
// };

// const sumValueReuslt = sumValue(5, 10)
// // const sumValueReuslt = sumValue(5, 10)

/**
 * 7. Arrays
 *    - generatics syntax: has an internal value that can be observed
 */

// const numberArray: number[] = []
const numberArray: Array<number> = [];

numberArray.push(23);
// numberArray.push('23')

// const numberAndStringArray: Array<number | string> = [];
const numberAndStringArray: (number | string)[] = [];
numberAndStringArray.push(23);
numberAndStringArray.push("23");

/**
 * 8. Defining Types - The good stuff
 *    - Pascal case
 *    - type or interface declaration
 *    - you catch more bugs when you enforce the shape of an object
 */

// type User = {
//   id: string;
//   firstName: string;
//   email: "gmail" | "proton" | "school" | "company";
//   age?: number;
//   isCool?: boolean;
// };

interface User {
  id: string;
  firstName: string;
  email: "gmail" | "proton" | "school" | "company";
  age?: number;
  isCool?: boolean;
}

const data: User[] = [
  {
    id: "384y2",
    firstName: "cali",
    email: "proton",
  },
];

/**
 * 9. Intersections and Interfaces
 *    - fun to challenge yourself and stick to pardigm if you pick one
 *    - i.e. functional programming can usually use types over interfaces
 *
 */

// type Admin = User & {
//   role: string;
//   canView: boolean;
//   canEdit: boolean;
//   isNotCool?: User["isCool"];
// };

// interface Admin {
//   role: string;
//   canView: boolean;
//   canEdit: boolean;
//   isNotCool?: User["isCool"];
// } & User

interface Admin extends User {
  isNotCool?: User["isCool"];
}

const cali: Admin = {
  id: "123",
  firstName: "cali",
  email: "company",
  isNotCool: false,
};
