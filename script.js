const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
// Function #1 Array SLice

function modifiedFood()
{
console.log(foods.slice(1,4));
}
console.log(modifiedFood());

// Function #2: Array Splice
const foods1 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
    foods1.splice(2,0,'noodles','icecream');
    console.log(foods1);


//Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234];

function isEven(){
  let evenNum=numberArray.filter(
      function(num){
         return num%2==0;
      }
    );
    return evenNum;
}

console.log(isEven());

function isPrime(numberArray){
    let prime=numberArray.filter(
    function(number){ var count=0;
    for (var i = 1; i <=number; i++) {
            if(number%i===0)
             count++;
     } 
     if(count===2)
      return number;  
   }
  );
  return prime;
}
console.log(isPrime(numberArray));

//Function #4: Reject

function nonPrime(numberArray){
    let nonprime=numberArray.filter(
       function(number){
        var count=0;
        for (var i = 1; i <=number; i++) {
            if(number%i===0)
             count++;
     } 
     if(count!==2)
      return number;  
       } 
    );
    return nonprime;
}

console.log(nonPrime(numberArray));

//Function #5: Lambda
 
 function isEven1(){
    let evenNum=numberArray.filter(number=>number%2==0);
    return evenNum;
 }
 console.log(isEven1());

 //Function #6 : Map
 const myArray = [11, 34, 20, 5, 53, 16];

 function findSquareOfNumbers(){

    let squareNum=myArray.map(num=>num*num);
    return squareNum;
 }

 console.log(findSquareOfNumbers());

 //Function #7: Reduce
 const myArray1=[2, 3, 5, 10];

 function multiply(){

    let multiValues=myArray1.reduce((num1,num2)=>{
        return num1*num2;
    });
    return multiValues;
 }

 console.log(multiply());