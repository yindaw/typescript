class User {
  readonly id: number
  gender: "男" | "女" = "男"
  pid?: string 

  private _publishNumber: number = 3;
  private _curNumber: number = 0;


  constructor (public name: string, private _age: number) {
    this.id = Math.random();
  }

  set age(value:number) {
    if (value < 0) {
      this._age = 0;
    } else if (value >= 200) {
      this._age = 200;
    } else {
      this._age = value;
    }
  }

  get age() {
    return this._age;
  }







  publish(title: string) {
    if (this._curNumber < this._publishNumber) {
      console.log("发布了一篇文章：" + title);
      this._curNumber ++;
    }
    else {
      console.log("你今日发布的文章数量已达到上限");
    }
  }
}


const u = new User("asd", 20);
u.age = 1.5;
console.log(u.age);
u.publish("文章1");
u.publish("文章2");
u.publish("文章3");
u.publish("文章4");
u.publish("文章5");
u.publish("文章6");
u.publish("文章7");
u.publish("文章8");


