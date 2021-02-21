// function isOdd(n:number) {
//   return n % 2 === 0;
// }s

// let nums: number[];
// nums = [1, 5, 6, 8];

// let nums: Array<number> = [4, 9, 5];

// function printValues(obj:object) {
//   const vals = Object.values(obj)
//   vals.forEach(v => console.log(v))
// }

// printValues({
//   name: "asa",
//   age: 33
// })


// let n:string = undefined;
// n.toUpperCase();


// let name:string | undefined;


// function printMenu():void {
//   console.log("1. 登录");
//   console.log("2. 注册");
// }

// function throwError(msg: string): never {
//   throw new Error(msg);
// }


// function alwaysDoSomething():never {
//   while (true) {
//     //...
//   }
// }

// let gender: "男" | "女";
// gender = "女";
// gender = "男";



//let arr:[];//arr永远只能取值为一个空数组


// let user: {
//   name: string,
//   age: number
// }

// user = {
//   name: "sda",
//   age: 65
// }



// let tu:[string, number];
// tu = ["3", 4];



// let data:any = "sada";
// let num:number = data;




// type Gender = "男" | "女"
// type User = {
//   name:string,
//   age:number,
//   gender: Gender
// }

// let u: User

// u = {
//   name: "asd",
//   gender: "男",
//   age: 45
// }

// function getUsers(g: Gender):User[] {
//   return [];
// }


// function combine(a:number, b:number):number;
// function combine(a:string, b:string):string;
// function combine(a:number | string, b:number | string): number | string {
//   if (typeof a === "number" && typeof b === "number") {
//     return a * b;
//   } else if (typeof a === "string" && typeof b === "string") {
//     return a + b;
//   }
//   throw new Error("a和b必须是相同的类型");
// }
// const result = combine(3, 3);



function sum(a: number, b: number, c: number = 0) {
 return a = b + c;
}
sum(3, 4);
sum(3, 4, 6);








