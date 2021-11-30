import { usersData } from "../data/usersData.js"
import DataErrors from "../models/dataErrors.js"

export default class UserService {

    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load() {//gelen datayı müşteri ve çalışana ayıran, hataları ayıran fonksiyon

        for (const user of usersData) //for of döngüsü = elimizdeki bir arrayi dönmemizi sağlar
        {
            switch (user.type) {//kullanıcı tipi

                case "customer"://müşteri olursa
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }
                    break;

                case "employee"://çalışan olursa
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break

                // case "employee":
                //this.employees.push(user)
                //break;

                default:
                    this.errors.push(new DataErrors("Wrong user type!", user))
                    break;
            }
        }
    }

    //formik-yup
    checkCustomerValidityForErrors(user) //hata var mı yokmu kontrol (müşteriler için)
    {
        let requiredFields = "id firstName lastName city age".split(" ")  //.split ile bir stringin elemanlarını bölüp array yapabiliriz.
        let hasErrors = false //eğer hata yoksa false
        
        for (const field of requiredFields) //requiredFields arrayindeki her bir field ı dolaş.
        {
            if (!user[field])  //userdaki requiredFieldları tek tek dolaşırken verdiğimiz fieldlar yoksa...
            {
                hasErrors = true //eğer hata varsa true
                this.errors.push(new DataErrors(`Validation problem!. ${field} is required`, user))//altgr+virgül ile açılan tırnak içide ${} yazılan kod ile js kodlarını yazdırabiliriz.
            }
        }

        if (Number.isNaN(Number.parseInt(user.age)))  // isNaN = "is not a number". Number.parseInt(...) = sayıya dönüştürmek
        {    hasErrors = true
            this.errors.push(new DataErrors(`Validation problem. ${user.age} is not a number!`))
        }
        return hasErrors
    }

    checkEmployeeValidityForErrors(user) //hata var mı yokmu kontrol (çalışanlar için)
    {
        let requiredFields = "id firstName lastName city age salary".split(" ")  //.split ile bir stringin elemanlarını bölüp array yapabiliriz.
        let hasErrors = false //eğer hata yoksa false
        for (const field of requiredFields) //requiredFields arrayindeki her bir field ı dolaş.
        {
            if (!user[field])  //userdaki requiredFieldları tek tek dolaşırken verdiğimiz fieldlar yoksa...
            {
                hasErrors = true //eğer hata varsa true
                this.errors.push(new DataErrors(`Validation problem!. ${field} is required`, user))//altgr+virgül ile açılan tırnak içide ${} yazılan kod ile js kodlarını yazdırabiliriz.
            }
        }
        
        return hasErrors
    }

    add(userAdd) {
        switch (userAdd.type) {
            case "customer":
               this.customers.push(userAdd) 
               if (!this.checkCustomerValidityForErrors(userAdd)) {
                this.customers.push(userAdd)
            }
                break;
 
                case "employee":
                 this.employees.push(userAdd) 
                 if (!this.checkEmployeeValidityForErrors(userAdd)) {
                    this.employees.push(userAdd)
                }
                break;
        
            default:
                this.errors.push(new DataErrors(`This user can not be added. ${userAdd.type} is Wrong user type`,userAdd))
                break;
        }
    }

    list() {
        //return this.users
    }

    getById(id) {
        //return this.users.find(u => u.id === id)
    }
}