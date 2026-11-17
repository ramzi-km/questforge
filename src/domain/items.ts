import { Item } from "./item";
import { Character } from "./character";

export class HealthPotion implements Item {
  constructor(private healAmount: number = 25) {}

  public apply(character: Character): string {
    character.heal(this.healAmount);
    return `${character.name} drinks a potion and heals ${this.healAmount} HP!`;
  }
}

export class Weapon implements Item {
  constructor(
    public name: string,
    private bonusAttack: number,
  ) {}

  public apply(character: Character): string {
    character.attackPower += this.bonusAttack;
    return `${character.name} equips ${this.name} (+${this.bonusAttack} ATK)`;
  }
}

export class Armor implements Item {
  constructor(
    public name: string,
    private bonusDefense: number,
  ) {}

  public apply(character: Character): string {
    character.defense += this.bonusDefense;
    return `${character.name} equips ${this.name} (+${this.bonusDefense} DEF)`;
  }
}
