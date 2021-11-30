
function calculate(...numbers) {

    let temp = [0,0]
for (let i = 0; i < numbers.length; i++) {
    
    console.log("\n" +numbers[i]+": " )
    for (let index = 1; index < numbers[i]; index++) {
        
        let result = numbers[i]%index
        if (result==0) {
            console.log(index)
            temp[i] = temp[i]+index
        }
        
    }
    console.log( numbers[i] + "Sayısının bölenleri toplamı = "+temp[i])
    
}
if (temp[0]==numbers[1]&&temp[1]==numbers[0]) {
    
    console.log("\nSayılar Arkadaştır!")
}
}





calculate(220,284)






