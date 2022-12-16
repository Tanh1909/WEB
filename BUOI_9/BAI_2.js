
const obj = {
    name: "Hưng",
    age: 20,
    email: "dth27902@gamil.com"
}
var a=[];
function run(obj){
    for (const key in obj) {
        a.push(key+": "+obj[key]);
    }
}
run(obj);
console.log(a);
// Output:
// [
//      "name: Hưng",
//      "age: 20",
//      "emai: dth27902@gmail.com"
// ]