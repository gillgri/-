class Mammal extends Chordate{
    constructor(name, health, foodPreferings) {
        super(name, health, false, false, foodPreferings)

       // console.log('Mammal', name, health, foodPreferings)
    }
}

const chaply = new Mammal('Чапли', 'good', ['plant'])
const lion = new Mammal('Лев', 'good', ['meat'])

lion.eat(chaply)

monster.eat(lion)