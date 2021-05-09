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

  Boolean
Number
String
Array
Tuple
Enum
Unknown
Any
Void
Null and Undefined
Never
Object
*/ 
console.log(`1. TS Types`)


console.log(`\n\n -------------------------------- \n\n`)

/* 
  1. Implicit Declaration
*/ 
console.log(`1. Implicit Declaration `)
let example = "string"
// example = 1
// example = 'typescript'

console.log(`\n\n -------------------------------- \n\n`)


/* 
  2. Explicit Declaration
*/ 
console.log(`2. Explicit Declaration`)
let greeting: string;

greeting = "Hello, HRC"

console.log(`\n\n -------------------------------- \n\n`)



/* 
  3. Running TSC
*/ 
console.log(`3. Running TSC`)
// 1. compile
// 2. run js
// viola!

console.log({ example, greeting })

console.log(`\n\n -------------------------------- \n\n`)






/* 
  3. Type Declaration
  interface and type
*/ 
// info is our editor, how nice!
console.log(`3. Type Declaration`)
// https://blog.logrocket.com/types-vs-interfaces-in-typescript/

interface Athlete {
  name: string
  sport: string
  age: number
  professional?: boolean
}

type Professional = {
  industry: string;
  name: string;
}

// const chrisWebber: Athlete = {}

// const cali: Professional = {
//   industry: 'health tech',
//   name: 'cali'
// }

console.log(`\n\n -------------------------------- \n\n`)




/* 
  2. Explicit Declaration
*/ 
console.log(`2. Explicit Declaration`)


console.log(`\n\n -------------------------------- \n\n`)
