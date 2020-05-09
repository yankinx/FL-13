class Fighter {
    constructor(obj) {
        this._name = obj.name;
        this._damage = obj.damage;
        this._hp = obj.hp;
        this._max_hp = obj.hp;
        this._strength = obj.strength;
        this._agility = obj.agility;
        this._wins = 0;
        this._lusses = 0;
    }
    getName() {
        return this._name;
    }
    getDamage() {
        return this._damage;
    }
    getStrength() {
        return this._strength;
    }
    getAgility() {
        return this._agility;
    }
    getHealth() {
        return this._hp;
    }
    dealDamage(damage) {
        damage > this._hp ? this._hp = 0 : this._hp -= damage;
    }
    attack(defender) {
        let percent = 100;
        let rang = (defender.getAgility() + defender.getStrength()) / percent;
        if (rang < Math.random()) {
            defender.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }
    logCombatHistory() {
        console.log(`Name: ${this.getName()}, Wins: ${this._wins}, Losses: ${this._lusses}`);
    }
    heal(heal) {
        if (heal < this._max_hp - this._hp) {
            this._hp += heal;
        } else {
            this._hp = this._max_hp;
        }
    }
    addWin() {
        this._wins >= 0 ? this._wins++ : false;
    }
    addLoss() {
        this._lusses >= 0 ? this._lusses++ : false;
    }
}
function battle(Fighter1, Fighter2) {
    let battle_start = Fighter1.getHealth() > 0 && Fighter2.getHealth() > 0;
    if (battle_start) {
        do {
            Fighter1.attack(Fighter2);
            Fighter2.getHealth() > 0 ? Fighter2.attack(Fighter1) : false;
            battle_start = Fighter1.getHealth() > 0 && Fighter2.getHealth() > 0;
        } while (battle_start);
        if (Fighter1.getHealth() > 0) {
            Fighter1.addWin();
            Fighter2.addLoss();
            console.log(`${Fighter1.getName()} has won!`);
        } else {
            Fighter1.addLoss();
            Fighter2.addWin();
            console.log(`${Fighter2.getName()} has won!`);
        }
    } else {
        Fighter1.getHealth() === 0 ? console.log(`${Fighter1.getName()} is dead and can't fight.`) : false;
        Fighter2.getHealth() === 0 ? console.log(`${Fighter2.getName()} is dead and can't fight.`) : false;
    }

}
let f1 = new Fighter({ name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25 });
let f2 = new Fighter({ name: 'Combat', damage: 30, hp: 99, strength: 25, agility: 30 });
battle(f1, f2);

