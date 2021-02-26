import { printObj, descriptor} from "./Descriptor";

@descriptor("文章")
class Article {

  @descriptor("标题")
  title: string
 
  @descriptor("内容")
  content: string

  @descriptor("日期")
  date: Date
}

const ar = new Article();
ar.title = "xxxx";
ar.content = "adasdadad";
ar.date = new Date();
printObj(ar);










// import "reflect-metadata";
// @Reflect.metadata("a1", "dasdasdsa")
// @Reflect.metadata("a2", "jjjyjf")
// @Reflect.metadata("a", "一个类")
// class A {
//   @Reflect.metadata("prop", "一个属性") 
//   prop1: string
// }

// const obj = new A();
// //Reflect.getMetadata("a", A)
// console.log(Reflect.getMetadata("prop", obj, "prop1"));