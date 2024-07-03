class Rabbit extends Mammal{
    constructor(name, health) {
        super(name, health, ['plant']);
    }

    jump(){
        console.log(`${this.name} подпрыгнул высоко-высоко`)
    }
}

const buckbunny = new Rabbit('Банк Бани', 'good')

buckbunny.jump()