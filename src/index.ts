import "reflect-metadata";
// import { IsNotEmpty, Max, MaxLength, Min, MinLength, validate } from "class-validator";

// class RegUser {
//   @IsNotEmpty({message: "账号不可以为空"})
//   @MinLength(5, {message: "账号必须有5个字符"})
//   @MaxLength(12, {message: "账号最多12个字符"})
//   loginId: string
//   loginPwd: string  
//   @Min(0, {message: "年龄的最小值是0"})
//   @Max(100, {message: "年龄的最大值是100"})
//   age: number
//   gender: "男" | "女"
// } 

// const post = new RegUser();
// post.loginId = "22";
// post.age = -1

// validate(post).then(errors => {
//   console.log(errors)
// })




import axios from "axios"
import { plainToClass, Type } from "class-transformer"
class User{
  id: number
  firstName: string
  lastName: string
  
  @Type(() => Number)
  age: number

  getName() {
    return this.firstName + " " + this.lastName;
  }

  isAdult() {
   return this.age > 36 && this.age < 60; 
  }
}
axios.get("https://api.myjson.com/bins/rwr9w").then((resp) => resp.data)
  .then(users => {
   const us = plainToClass(User, users)
   for (const u of us) {
     console.log(typeof u.age, u.age);
   }
  })