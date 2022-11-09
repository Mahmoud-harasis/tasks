//1

function tellFortune (job_title,
    geographic_location, partners_name,number_of_children){
    console.log(`You will be a ${job_title} ${geographic_location}${partners_name}${number_of_children}`)
    }
  tellFortune('software engineer ', 'Jordan ', 'Alice ', `3` );

//2

function calculateDogAge (age){
  let result = (age * 7);
  return result;
  // console.log(`yers dog ${result}`)
  }
console.log(calculateDogAge (3));
  // calculateDogAge (3);

//3


 function calculateSupply(o,x){
let y=100-o;

let z=(x*365)*y;
console.log( `You will need ${z} cups of tea to last you until the ripe old age of 100`);

 }
 calculateSupply (29,10)

 //4


 name1 = prompt("enter your name ")
 greet (name1)
 function greet(x){
  document.write("hello  "+ x)
 }

 //5

 function double(cat) {
  return 2 * cat;
}

function double() {
  return 2 * 7;
}

function double() {
  return 2 * x ;
}

//6

function double1(x) {
  return 2 * x ;
}

function double2 (x){
return 2 * x;
}

function double3 (x) {
  return 2 * x;
}

//7

function cube(j){
  let y;
  y=j*j*j;
  console.log(`cube(${j})=${y}`)
}
cube(5);
//8

function multiply(num1,num2){
  let mul=num1*num2;
  console.log(mul);
}

multiply(3,4);
multiply(5,4);
//9

function canIGetADrivingLicense(age){
  let x=20-age;
  if(age>=20){
  console.log(`Yes you can`);
  }
  else{
  console.log(`please come back after ${x} years to get one`)
  }
}

canIGetADrivingLicense(21);
canIGetADrivingLicense(6);

//10

function sameLength( word1,word2){
  length1=word1.length;
  length2=word2.length;
  if(length1==length2){
      console.log(`true`);
  }
  else{
      console.log(`false`);
  }
}

sameLength("tree","clue");
sameLength("tree","car")