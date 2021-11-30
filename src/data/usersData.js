//id, firstName, lastName, city,age,creditCardNumber
export const usersData = [
    {
        id: 1,
        firstName: "Gökhan",
        lastName: "Asiltürk",
        city: "Kahramanmaraş",
        age: 23,
        creditCardNumber: "556698",
        type: "customer"

    },
    {
        id: 2,
        firstName: "Ahmet",
        lastName: "Taşkesen",
        city: "İstanbul",
        age: 25,
        creditCardNumber: "66566",
        type: "customer"

    },
    {
        id: 3,
        firstName: "Samet",
        lastName: "Göktürk",
        city: "Adana",
        age: 22,
        salary: 6000,
        type: "employee"
    },
    {
        id: 4,
        firstName: "Mehmet",
        lastName: "Kamanca",
        city: "Kahramanmaraş",
        age: 27,
        salary: 8000,
        type: "employee"

    },
    {
        id: 5,
        firstName: "Eren",
        lastName: "Arı",
        city: "Diyarbakır",
        age: 22,
        salary: 15000,
        type: "employe"     //wrong user type hatası almak için yanlış yazıldı

    },
    {
        id: 6,
        firstName: "Veli",
        //customer validation hatası almak için soyismi girmedik
        city: "Adana",
        age: 22,
        creditCardNumber: "556698",
        type: "customer"
    },
    {
        id: 7,
        firstName: "Ali",
        lastName: "Gündoğdu",
        //customer validation hatası almak için şehiri girmedik
        age: 22,
        creditCardNumber: "665666",
        type: "customer"
    },
    {
        id: 8,
        firstName: "Cansu",
        lastName: "Tanca",
        city: "Van",
        age: 33,
        // employee validation hatası almak için maaşı girmedik
        type: "employee"

    },
    {
        id: 9,
        firstName: "kaan",
        lastName: "Düzkale",
        city: "Kahramanmaraş",
        age: "asd21", // checkCustomerValidityForErrorsun içerisindeki age error u almak için yaşı eklemedik.
        creditCardNumber: "5566698",
        type: "customer"

    }

]