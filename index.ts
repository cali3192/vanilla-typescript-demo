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

// let numbers: number[] 
let numbers: Array<number>
numbers = [1, 2, 3]
numbers = ['1', 2]


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
  3. Unions
*/ 
console.log(`3. Unions`)

let unknownDataType: string | undefined
type CaliforniaTeams = 'Sacremento Kings' | 'Golden State Warriors' | 'LA Lakers' | 'San Francisco 49ers' | 'San Francisco Giants'
// const favoriteTeam: CaliforniaTeams 



console.log(`\n\n -------------------------------- \n\n`)



/* 
  3. Intersections
*/ 
console.log(`3. Intersections`)
type UserResponse = {
  uuid: number,
  email: string
}

type ErrorResponse = {
  status: 200 | 400 | 500
  errorLog: string | undefined
}

type APIResponse = UserResponse & ErrorResponse


console.log(`\n\n -------------------------------- \n\n`)

/* 
  3. Optional Properties
*/ 
console.log(`3. Optional Properties`)

// {
//   payload?: string
// }

// vs

// {
//   payload: string | undefined
// }

type PostPayload = {
  route: string
  message?: string
  // message: string | undefined
}

const formPayload: PostPayload = {
  route: '/api/v1/invite'
}





console.log(`\n\n -------------------------------- \n\n`)


/* 
  3. Handling Unknown Data
*/ 
console.log(`3. Handling Unknown Data`)

type MiscObj = {
  [key: string]: number
  // [key: number]: string
}

const unknownObj: MiscObj = {
  // someKey: 3,
  // 3: 3
  // 3: '3'
}

console.log(`\n\n -------------------------------- \n\n`)

/* 
  Functions
*/ 
console.log(`Functions`)

// let numberFactory = ({ valOne, valTwo }: { valOne: number, valTwo: number }): number => {
//   const result = valOne + valTwo

//   return result
// }


let numberFactory = ({ valOne, valTwo }: { valOne: number[], valTwo: number[] }): number => {
  // const result = valOne + valTwo

  // // my fav thing about TS 
  // const result 
  // console.log({ result })
  // return result
}

// const numberFactoryResult = numberFactory({ valOne: [1, 2], valTwo: [3, 4] })

/* 
  Void
*/ 
console.log(`Void`)

// let numberFactory = ({ valOne, valTwo }: { valOne: number[], valTwo: number[] }): void => {
//   // const result = valOne + valTwo

//   // my fav thing about TS 
//   const result = [...valOne, ...valTwo]

//   console.log({ result })
// }
// const numberFactoryResult = numberFactory({ valOne: [1, 2], valTwo: [3, 4] })

console.log(`\n\n -------------------------------- \n\n`)


/* 
  Void 
*/ 
console.log(`Any 🙄`)
// NOTE: good use case is when you bring in a 3rd party library that doesn't have its own TS library
//  essentially says to ignore TS
let tree: any = '1'
tree = 1
tree = {
  type: 'birch'
}
tree = ['spring']


console.log(`\n\n -------------------------------- \n\n`)
