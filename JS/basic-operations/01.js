let myNum1 = 1297;
let myNum2 = 45;


/* addition */

let additionResult = myNum1 + myNum2;

console.log(additionResult);
/* substraction */


let substractionResult = myNum1 - myNum2;

console.log(substractionResult);


//multiplication

let multiplicationResult = myNum1 * myNum2;

console.log(multiplicationResult);


//division

let divisionResult = myNum1 / myNum2;

console.log(divisionResult);



//remainder (modulus) bolme isleminden kalan

let evenNum = 24; //ciftsayi
let oddNum= 23; //teksayi


let remainder1= evenNum % 2;
let remainder2= oddNum % 2;

console.log(remainder1, remainder2);







//string operations

let userFirstName="Burak";
let lastName ="Kuyucakli";


let greeting = userFirstName + " " + lastName + " " + "guzel haberlerimiz var";


console.log(greeting);

let basketItem1= 1200;
let basketItem2 = 2300;
let basketItem3 = 400;

let basketTotal = basketItem1 + basketItem2 + basketItem3;

// KDV rate 
let kdvRate = 0.18;  

// Calculate KDV amount
let kdvAmount = basketTotal * kdvRate;

// Round to 2 decimals
kdvAmount = kdvAmount.toFixed(2);

console.log("Basket Total: " + basketTotal);
console.log("KDV Amount: " + kdvAmount);