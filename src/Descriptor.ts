import "reflect-metadata";

const key = Symbol("descriptor");

export function descriptor(description: string) {
  return Reflect.metadata(key, description)
}

export function printObj(obj: any) {
  //输出类的名字 
  const cons = Object.getPrototypeOf(obj);
  if (Reflect.hasMetadata(key, cons)) {
    console.log(Reflect.getMetadata(key, cons));
  }
  else {
    console.log(cons.constructor.name);
  }
  //输出所有的属性描述和属性值
  for (const k in obj) {
    if (obj.hasOwnProperty(key)) {
      if (Reflect.hasMetadata(key, obj, k)) {
        console.log(`\t${Reflect.getMetadata(key, obj, k)}:${obj[key]}`);
      }
      else {
        console.log(`\t${k}:${obj[k]}`);
      }
    }
  }
}