for (let num = 1; num <= 10; num++) {  
    if (num % 3 === 0) {  
        console.log(`${num} - This Number is divisible by 3`); // Number is divisible by 3  
    } else {  
        console.log(`${num} - This Number is not divisible by 3`); // Number is NOT divisible by 3  
    }  
}
for (let num = 1; num <= 40; num++) {
    if(num % 5===0 && num % 3 ===0) {  
        console.log("fuzzBuzz");
    }  
    else if (num % 3 === 0) {  
        console.log("fuzz"); 
    } else if(num % 5 ===0) {  
        console.log("buzz"); 
    }
    else{
        console.log(num);
        
    }
     
}
