interface hasNameProperty {
  name: string
}
/**
 * 将某个对象的name属性的每个单词的首字母大小写，然后将该对象返回
 */
function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
  obj.name = obj.name.split(" ").map((it) => it[0].toUpperCase() + it.substr(1)).join(" ");
  return obj;
}

const obj1 = {
  name: "kevin yuan",
  age: 50,
  gender: "男"
}

const newObj1 = nameToUpperCase(obj1);
console.log(newObj1.name);