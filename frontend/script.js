/*function addNumbers(num1, num2, num3) {
  return num1 + num2 - num3;
}
console.log(addNumbers(1,2,10));*/

function mySquare(num) {
  return num * num;
}
console.log(mySquare(2));

function myParam(param) {
  return("param");
}
console.log(myParam("param"));

let x = 5;
let y = 4;

function myNum(x, y) {
  return x + y;
}

console.log(myNum);

function myFunction(name) {
  return "Hello" + name;
}
console.log(myFunction("Benő"));

function Osszead(szam1, szam2, szam3) {
  return szam1 + szam2 + szam3;
}
console.log(Osszead(10, 15, 20));

function myString(szo) {
  return "Szia";
}
console.log(myString("Szia"));

function osszeAd(num1, num2) {
  //console.log( num1 + num2); 
  //return num1 + num2;
  //return 'Hello'
  if(typeof num1 === "number" && typeof num2 === "number"){
    return num1 + num2
  } else {
    return "valamelyik argumentum nem szám, ezért a művelet nem elvégezhető"
  }
}
console.log( osszeAd (10, "15") );
console.log( osszeAd (100, 150) );
console.log( osszeAd (1000, 1500) );


console.log(0 === "0")



function nev(name1, name2) {
  return "Benő" + "Annamária";
}
console.log(nev("Benő", "Annamária"));

function myDog(name) {
  return 'Pannika';
}
console.log( myDog ('Pannika') );

function Osszehas(num1, num2) {
  if(typeof num1 === "number" && typeof num2 === "number") {
    return num1 * num2 
  } else { return "nem szám"
}
}
console.log(Osszehas (2, 100));
