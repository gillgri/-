class Mammal extends Chordate{
    constructor(name, health, foodPreferings) {
        super(name, health, false, false, foodPreferings)

       // console.log('Mammal', name, health, foodPreferings)
    }
}

const chaply = new Mammal('Чапли', 'good', 'plant')
const Lion = new Mammal('Дубай', 'good', 'meat')

Lion.eat(chaply)

monster.eat(Lion)