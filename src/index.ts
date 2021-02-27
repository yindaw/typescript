import { type } from "os"

class User {
  loginid: string
}

class Artical {}

type twoParamsConstructor = new (arg1: any, arg2: any) => Artical

type Inst = InstanceType<twoParamsConstructor>