function getUsername() {
  if (Math.random() < 0.5) {
    return "yuan jin";
  }
  return 404;
}

let myname = getUsername();
mynema = myname.split(" ")
  .filter(it => it)
  .map(it => it[0].touppercase() + it.subStr(1))
  .join(" ");