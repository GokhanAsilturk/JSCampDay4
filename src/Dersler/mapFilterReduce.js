let cart = [ //sepetteki ürünler:
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:5},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:150},
    {id:5, productName:"Masa", quantity:5, unitPrice:1000},

]
// sepete ekle simülasyonu (arraye içerik ekleme operasyonu .push)
//cart.push({id:6, productName:"Mouse", quantity:2, unitPrice:1000})

// arraydeki verileri tek tek gezmek için (.map)
cart.map(product=>console.log(product.productName))

cart.map(product=>{
    console.log("<li> "+product.productName + " : " + product.quantity +" Adet "+ 
    product.unitPrice * product.quantity + " TL" + " </li>")
})

// areydeki verileri filtrelemek için (.filter)    
let quantityOver2 = cart.filter(product=>product.quantity>2)
console.log(quantityOver2)

//arreydeki verileri toplamak için (.reduce)
let total = cart.reduce((acc,product)=>acc + product.unitPrice,0)
console.log(total)

//---------------------------------------
function addToCart(sepet) {
    sepet.push({id:6, productName:"Mouse", quantity:2, unitPrice:1000})
}

addToCart(cart)
console.log(cart)

let sayi=10
function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi)

