import { directionary } from "./dictionary";

const dic = new directionary<string, number>();

dic.set("a", 1);
dic.set("b", 2);
dic.set("a", 11);
dic.set("c", 55);
// console.log(dic.has("c"));
console.log("当前键值对数量：" + dic.size);
console.log("删除键b");
dic.delete("b");

dic.forEach((k, v) => {
  console.log(`${k}:${v}`);
})
