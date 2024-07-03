class Chordate{
    name
    health
    isFlying
    isSwiming
    foodPreferings

    constructor(name, health, isFlying, isSwiming, foodPreferings) {
        this.name = name
        this.health = health
        this.isFlying = isFlying
        this.isSwiming = isSwiming
        this.foodPreferings = foodPreferings

       // console.log('Chordate', name, health, isFlying, isSwiming, foodPreferings)
    }

    eat(target){
        console.log(`${this.name} съел ${target.name}`)
    }
}
    const upir = new Chordate('Упырь', 'good', true, false, 'meat')
    const monster = new Chordate('Монстр', 'good', false, true, 'meat')

    monster.eat(upir)


