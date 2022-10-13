// const variables
const regex=/^[0-9]{1,14}$/  
const smallLetter='abcdefghijklmnopqrstuvwxyz'
const capitalLetter='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const number = "0123456789"
const symbol='!@#$%&*{}[]'
// password generator

// generic prompt

const promptWindow=(title)=>prompt(title)

// pattern checker

const patternChecker=(inputValue)=>{
  return regex.test(inputValue)
}


const passwordGenerator=()=>{
   
let password = [];
let randomLength = Math.floor(Math.random()*(4,2))+2;
for(let i=0;i<randomLength;i++){
 password.push(subPassword(smallLetter,25) + subPassword(capitalLetter,25)+
 subPassword(number,10)+subPassword(symbol,11));
}
console.log(`The random password with length ${password.join('').length} is: ${password.join('')}`);
}

const subPassword=(input,num)=>{
return input.charAt(Math.floor(Math.random()*num))
}


// The fibonacci calculator 

const fibonacci=()=>{
   let inputNum = promptWindow('Please enter the fibonacci')
   if(!patternChecker(inputNum))console.log('please inter the right Input');
   else{
       let fib=[0,1]
       for(let i=0;i<parseInt(inputNum)-1;i++){
       fib.push((fib[i]+fib[i+1]))
       console.log(fib[i]);
    }}
}



// factorial calculator

const factorial = ()=> {
let input = promptWindow("Factorial of ");
 if(!patternChecker(input)){
    alert('Please enter the right input')
 }else{
 let ans=1
 for (let i = 1; i <= parseInt(input); i++) ans*= i;
 console.log(`factorial of ${parseInt(input)} is : ${ans}`);
}
}

// palindrome checker

const isPalindrome=()=>{
    let input = promptWindow('Please Enter any word')
    let reverseWord=input.split('').reverse().join('')
    if(input===reverseWord){
       console.log(`${input} is palindrome`); 
    }else  console.log(`${input} isn't palindrome`);
}




