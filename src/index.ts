import { classDescriptor, printObj, propDescriptor } from "./Descriptor";

@classDescriptor("文章")
class Article {

  @propDescriptor("标题")
  title: string

  @propDescriptor("内容")
  content: string

  @propDescriptor("日期")
  date: Date
}

const ar = new Article();
ar.title = "xxxx";
ar.content = "adasdadad";
ar.date = new Date();
printObj(ar);