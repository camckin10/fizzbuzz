//1:set number to 1//
var number=1;
//2:if number divisible by 3, print fizz//
do{
var output="";


if(number % 3===0){
  output="Fizz";
}
//3:if number divisible by 5, print buzz//
if(number % 5===0){
  output+="Buzz";
}
//4:if number is divisible by neither, print number//

  console.log(output || number);

//5:if number less than 100,add one to number, and go to 2//
} while(number++<100)

//1,2,fizz,4,buzz,fizz,7,8,fizz,buzz


FizzBuzz Refractor challenge
//1:ask user for number//
//2:set number as break condition//
