
// magazin online de haine si mancare
class Product {
    constructor(price, discount, name) {
        this.price = price;
        this.discount = discount;
        this.name = name;
    }
}

class Food {
    constructor(category, expirationTS, producer, calories) {
        this.category = category;
        this.expirationTS = expirationTS;
        this.producer = producer;
        this.calories = calories;
    }
}

class Clothes {
    constructor(size, materialType, brand, color, type) {
        this.type = type;
        this.size = size;
        this.color = color;
        this.materialType = materialType;
        this.brand = brand;
    }
}

//Modelarea comenzii
class Order {
    constructor(product, amount) {
        this.product = product
        this.amount = amount;
    }
}

class User {
    constructor(firstName, lastName, email, phoneNumber, dateOfBirth, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;        
    }
}