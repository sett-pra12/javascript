let score = "33xyz"

// console.log(typeof (score));

let valInNumber = Number(score)
// console.log(typeof valInNumber); --> it will convert any string to number, point to be noted if it is only 33 it would be converted to a number 33 but here is 33xyz, it converted though but stored as a NaN. 
// console.log(valInNumber);

// 33 => 33
// 33xyz => NaN
//true = 1 and false =0 

let isLoggedIn = 1

let boolInLoggedIn = Boolean(isLoggedIn)
console.log(typeof boolInLoggedIn);
console.log(boolInLoggedIn);

// in Boolean 1 will be converted to true and 0 will be false
// "" => false
//"pranjal/(any string)" => true