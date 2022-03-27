//js não possui classes nativamente e a herança se dá por prototipos
class Person {
    constructor(power = 0){
        this.power = power
    }

    get power(){
        return this._power
    }

    set power(val){
        this._power = val
    }

    hit(){
        console.log('hitting ',this._power);
    }
}

class Warrior extends Person {
    constructor(){
        super(2)
    }

    hit(){
        super.hit()
    }
}

let b = new Warrior();
console.log(b.hit());