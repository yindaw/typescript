// interface hasNameProperty {
//   name: string
// }
// /**
//  * 将某个对象的name属性的每个单词的首字母大小写，然后将该对象返回
//  */
// function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
//   obj.name = obj.name.split(" ").map((it) => it[0].toUpperCase() + it.substr(1)).join(" ");
//   return obj;
// }

// const obj1 = {
//   name: "kevin yuan",
//   age: 50,
//   gender: "男"
// }

// const newObj1 = nameToUpperCase(obj1);
// console.log(newObj1.name);






function mixinArray<T, K>(arr1: T[], arr2: K[]):(T | K)[] {
  if (arr1.length !== arr2.length) {
    throw new Error("两个数组的长度不等");
  }
  let result:(T | K)[] = [];
  for (let i = 0; i <arr1 .length; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);    
  }
  return result;    
}

const newMixinArray = mixinArray([1, 2, 3], ["a", "b", "c"]);
console.log(newMixinArray);
newMixinArray.forEach((r) => console.log(r))