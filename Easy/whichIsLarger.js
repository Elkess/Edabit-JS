
function ForEdaWhichIsLarger(f, g) {
  if (f() === g())
      return("neither");
  else if (f() > g())
      return("f");
  else
      return("g");
}

function MyWhichIsLarger(f, g) {
  if (f().toString().length === g().toString().length)
      console.log("neither");
  else if (f().toString().length > g().toString().length)
      console.log("f");
  else
      console.log("g");
}
const f =()=>{return 10};
const g =()=>{return "59"};
MyWhichIsLarger(f, g);