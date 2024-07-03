class Dog extends Mammal{
    constructor(name, health) {
        super(name, health, ['meat', 'plant']);
    }

    byte(target) {
        console.log(`${this.name} укусил ${target.name}`)
    }
}

const boogy = new Dog('Собака', 'bad')

boogy.byte(lion)