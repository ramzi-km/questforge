import { Character } from "./character";

export class Warrior extends Character {
  constructor(name: string) {
    super(name, 120, 18);
  }

  public specialAbility(target: Character): void {
    const bonus = Math.floor(this.attackPower * 1.5);
    target.takeDamage(bonus);
    console.log(`${this.name} uses Cleave! ${bonus} damage to ${target.name}`);
  }
}

export class Mage extends Character {
  private _mana: number;
  constructor(name: string) {
    super(name, 80, 10);
    this._mana = 50;
  }

  public specialAbility(target: Character): void {
    const cost = 20;
    if (this._mana < cost) {
      console.log(`${this.name} doesn't have enough mana!`);
      return;
    }
    this._mana -= cost;
    const damage = this.attackPower * 3;
    target.takeDamage(damage);
    console.log(
      `${this.name} casts Fireball! ${damage} damage to ${target.name}`,
    );
  }
}

export class Rogue extends Character {
  constructor(name: string) {
    super(name, 90, 14);
  }
  public specialAbility(target: Character): void {
    const crit = this.attackPower * 2;
    target.takeDamage(crit);
    console.log(
      `${this.name} lands a Backstab! ${crit} critical damage to ${target.name}`,
    );
  }
}

export class Cleric extends Character {
  private _mana: number;
  constructor(name: string) {
    super(name, 100, 8);
    this._mana = 60;
  }

  public specialAbility(target: Character): void {
    const cost = 15;
    if (this._mana < cost) {
      console.log(`${this.name} doesn't have enough mana!`);
      return;
    }
    this._mana -= cost;
    const healAmount = this.attackPower * 3;
    target.heal(healAmount);
    console.log(
      `${this.name} casts Holy Light! Heals ${target.name} for ${healAmount} HP.`,
    );
  }
}
