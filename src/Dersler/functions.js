function addToCart (quantity,productName="Bilinmeyen") {
    
    console.log("Sepete eklendi! : " + productName 
    + "  Adet : " + quantity)

}

addToCart("Yumurta",15)
addToCart(25)
addToCart(5)


let sayHello = () => {//farklı fonksiyon tanımlama

    console.log("hello World! ")

}

sayHello()

let sayHello2 = function () { //farklı fonksiyon tanımlama

    console.log("Hello World 2")
    
}

sayHello2()

function addToCart2 (productName,quantity,unitprice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("limon",3,15)

function addToCart3(product) {
    console.log("Ürün: "+product1.productName + "  Fiyatı: " + product1.unitPrice + "  Adedi: "+ product1.quantity)
}

let product1 = {productName: "Elma", unitPrice:10,quantity:5}

addToCart3(product1)

let product2 = {productName: "Elma", unitPrice:10,quantity:5}
let product3 = {productName: "Elma", unitPrice:10,quantity:5}

product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

function addToCart4(products) {

    console.log(products)
    
}

let products = [
    {productName: "Elma", unitPrice:14,quantity:11},
    {productName: "Armut", unitPrice:5,quantity:55},
    {productName: "Karpuz", unitPrice:2,quantity:20}
]

addToCart4(products)

function add(...numbers) // rest operatörü (...) (ayrık olan indexleri arraye dönüştürür)
{

    let total=0
    for (let index = 0; index < numbers.length; index++) 
    {
        total = total + numbers[index]

   
    }
    console.log(total)
    
}

add(3,4)

let numbers= [120,500,680,140,85]
console.log(Math.max(...numbers))//spread operatörü(...) (hazır bir arrayi ayırır)

let [icAnadolu,marmara,Karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name: "İç Anadolu", populations:"20M"}, 
    {name: "Marmara", populations:"30M"}, 
    {name: "Karadeniz", populations:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Ankara","Konya"]
    ]
]

console.log(icAnadolu.populations)
console.log(marmara.name)
console.log(Karadeniz)
console.log("İç Anadolu şehirleri: "+icAnadoluSehirleri)
console.log("Marmara şehirleri: "+marmaraSehirleri)


let newproductName, newunitPrice, newquantity
({productName:newproductName, unitPrice:newunitPrice, quantity:newquantity} 
= {productName: "Elma", unitPrice:14,quantity:11})

console.log(newproductName)
console.log(newunitPrice)
console.log(newquantity)




