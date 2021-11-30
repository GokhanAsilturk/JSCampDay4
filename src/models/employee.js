import User from "./user.js"

 export default class Employee extends User{
    
    constructor(id, firstName, lastName, city,age,salary) {
        super(id,firstName,lastName,city,age)//extend edilen classın constructırını çalıştırır.
        this.salary = salary
    }
 }