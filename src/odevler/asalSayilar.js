
function calculate () {
    for (let number = 1; number <= 1000; number++) {
       let sayac = 0
        for (let i = 1; i <= number; i++) {
            
            let result = number%i
            
            if (result==0) {
                sayac++
            }
        }
        if (sayac==2) {
            console.log(number)
        }
    }
}

calculate()