enum Permission {
  Read = 1,
  Write = 2,
  Create = 4,
  Delete = 8
}
//使用或运算
let p:Permission = Permission.Read | Permission.Write;
//判断是否拥有某个权限
function hasPermission(target: Permission, per: Permission) {
  return (target & per) === per;
}
//判断变量p是否拥有可读权限
console.log(hasPermission(p, Permission.Create))

//删除某个权限
p = p ^ Permission.Write;