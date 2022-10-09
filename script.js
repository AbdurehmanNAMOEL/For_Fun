
function pass_Genereator(){
   
let password = [];
let randomLength = Math.floor(Math.random()*(11-8)) + 8;
const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*{}[]"
for(let i=0; i < randomLength; i++){

    password.push(charSet.charAt(Math.floor(Math.random()*charSet.length-1)));
}
console.log("The random password with length ",randomLength," is: ",password.join(''));
}


// the factorial is nice one


// it best to use let rather than var, do u know about the difference between var and let



function febo_Generator(){
    let febo_seq = [0,1];
    let check = true;
    var num = prompt("Generating febonacci up to?");
    while(check){
    if(febo_seq[febo_seq.length - 1] <= num){
        febo_seq.push(febo_seq[febo_seq.length - 1] + febo_seq[febo_seq.length -2]);
    }
    else{
        febo_seq.pop();
        check = false;
    }  
    }
    console.log("Febonacci:",febo_seq.toString());
}



const promptWindow=(title)=>prompt(title)
// check something called regex(regular expressions)
const regex=/^[0-9]{1,14}$/

// you have to
const patternChecker=(inputValue)=>{
  return regex.test(inputValue)
}


// factorial calculator

const factorial_Of = ()=>{
let input = promptWindow("Factorial of ");
 if(!patternChecker(input)){
    alert('Please enter the right input')
 }else{
 let ans=1
 for (let i = 1; i <= parseInt(input); i++) ans*= i;
 console.log(`factorial of ${parseInt(input)} is : ${ans}`);
}
}


const isPalindrome=()=>{
    let input = promptWindow('Please Enter any word')
    let inputArray=input.split('')
    let reverseWord=''
    let reversedArray=inputArray.reverse()
    for(let i=0;i<reversedArray.length;i++){
        reverseWord+=reversedArray[i]
    }

    if(input===reverseWord){
       console.log(`${input} is palindrome`); 
    }else  console.log(`${input} isn't palindrome`);

}

