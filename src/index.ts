class User {
  @require
  @range(3, 5)
  @description("账号")
  loginid: string; //必须是3-5个字符
  loginpwd: string; //必须是6-12个字符
  age: number; //必须是0-100之间的数字
  gender: "男" | "女";

}

class Article{
  title: string; //成都必须是4-20个字符串
}

/**
 * 统一的验证函数
 * @param obj
 */
function validate(obj: object) {
  for (const key in obj) {
    const val = (obj as any)[key];
    //缺少该属性的验证规则
    
  }
}
