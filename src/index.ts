

// interface User {
//   name: string,
//   age: number,
//   sayHello:() => void
// }

// type User {
//   name: string,
//   age: number
// }

// let u:User = {
//   name: "sdfg",
//   age: 33,
//   sayHello() {
//     console.log("asddsad")
//   }
// }



// type condition = (n:number) => boolean
// interface Condition {
//   (n: number): boolean
// }

// function sum(numbers:number[], callBack: Condition) {
//   let s = 0;
//   numbers.forEach(n => {
//     if (callBack(n)) {
//       s += n;
//     }
//   })
//   return s;
// }
// const result = sum([3, 4, 8, 2], n => n % 2 !== 0);
// console.log(result);



// interface A {
//   T1: string
// }

// interface B {
//   T2: number
// }

// interface C extends A, B {
//   T3: boolean
// }

// let u:C = {
//   T2: 33,
//   T1: "sdsdsdf",
//   T3: true
// }





// type A = {
//   T1:string
// }

// type B = {
//   T2: number
// }

// type C = {
//   T1: number
//   T3: boolean
// } & A & B


// let u:C = {
//   T2: 33,
//   T1: "sfafa", 
//   T3: true
// }





interface User {
  readonly id: string
  name: string
  age: number,
  readonly arr: readonly string[]
}

let u: User = {
  id: "12312",
  name: "adsad",
  age: 33,
  arr: ["sda", "sdaasdasd"]
}

u.arr.push("")


// const arr: readonly number[] = [3,4,5];

// const arr: ReadonlyArray<number> = [1,5,6];


