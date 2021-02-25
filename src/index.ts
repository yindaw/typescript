//  interface IUser {
//    name: string,
//    age: number,
//    sayHello(this: IUser): void
//  } 

// const u: IUser = {
//   name: "sada",
//   age: 33,
//   sayHello() {
//     console.log(this.name, this.age);
//   }
// }



class User{
  constructor(
    public name: string,
    public age: number
    ) {}

    sayHello(this: User) {
      console.log(this, this.name, this.age);
    }
}

const u = new User("sda", 23);
const say = u.sayHello;
say();