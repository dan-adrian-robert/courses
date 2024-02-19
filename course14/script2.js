class Vehicul {
    constructor(numarRoti, caiPutere, marca, semnalizare) {
        this.numarRoti = numarRoti;
        this.caiPutere = caiPutere; 
        this.marca = marca; 
        this.semnalizare = semnalizare;
    }

    drive() {
        console.log(`conduc cu ${this.caiPutere}`);
    }
}

class BMW extends Vehicul {
    constructor(plugins, caiPutere ) {
        super(4, caiPutere, 'BMW', null);
        this.plugins = plugins;
    }

    drive() {
        console.log(`conduc cu ${this.caiPutere} ca sunt smecher fara semnalizare!`);
    }
}

const bmwCar = new BMW({aerConditionat: true}, 530);

console.log(bmwCar);

bmwCar.drive();
