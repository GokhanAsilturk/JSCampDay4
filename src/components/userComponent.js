import { BaseLogger, ElasticLogger, MongocLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userServices.js"
//(id, firstName, lastName, city,age,creditCardNumber) 
console.log("User component yüklendi! ")

let logger1 = new MongocLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Gökhan","Asiltürk","Kahramanmaraş")
let user2 = new User(2,"Ahmet","Serttaş","İstanbul")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log (userService.getById(2))


//prototyping = değişkeni olmayan bir veriyi eklemek
let customer = { id: 1, firstName: "Gökhan" }
customer.lastName = "Asiltürk"
console.log(customer.lastName)

console.log("------------------------------")



userService.load()
userService.add(new Customer(5,"Celil","Akarsu","Muş",26))
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
