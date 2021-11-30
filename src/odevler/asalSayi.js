function calculate (...numbers) {

for (let i = 0; i < numbers.length; i++) {
    
    let sayac = 0
    
    for (let i2 = 1; i2 <= numbers[i]; i2++) {
        let kalan = numbers[i]%i2
        
        if (kalan==0) {
            sayac++
        }   
    }
    if (sayac==2) {
       console.log(numbers[i]+" ")
    }   
} 
 
}

calculate(8,7,6,2,3,11,19,18,17,49)


