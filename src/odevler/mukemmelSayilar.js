
function calculate() {
   for (let number = 1; number <= 1000; number++) {
      
    let total = 0
    for (let i = 1; i <= number; i++) {
        
        let result = number%i

        if (result==0) {
           total = total+i 
        }

    }

    if (total==number*2) {

        console.log(number)
        
    }
       
   } 
}

calculate()