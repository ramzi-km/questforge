import { Inventory } from "./inventory";
export abstract class Character {
  public name: string;
  private _health: number;
  public attackPower: number;
  private readonly _maxHealth: number;
  public inventory: Inventory;
  private _defense: number = 0;

  constructor(
    characterName: string,
    startingHealth: number,
    startingAttack: number,
  ) {
    this.name = characterName;
    this._health = startingHealth;
    this._maxHealth = startingHealth;
    this.attackPower = startingAttack;

    this.inventory = new Inventory();
  }

  public get health(): number {
    return this._health;
  }

  public get isAlive(): boolean {
    return this._health > 0;
  }

  public takeDamage(amount: number): void {
    if (amount < 0) {
      throw new Error("Damage cannot be negative");
    }

    // Armor mitigates damage, but it cannot heal the character (Math.max to prevent negative damage)
    const actualDamage = Math.max(0, amount - this.defense);
    // never allow negative HP
    this._health = Math.max(0, this._health - actualDamage);
  }

  public describe(): string {
    return `${this.name} has ${this._health} HP and ${this.attackPower} ATK`;
  }

  public attack(target: Character): void {
    if (!this.isAlive) {
      return;
    }
    target.takeDamage(this.attackPower);
    console.log(
      `${this.name} attacks ${target.name} for ${this.attackPower} damage!`,
    );
  }

  public heal(amount: number): void {
    if (amount < 0) {
      throw new Error("Heal amount cannot be negative");
    }

    // Health should not exceed max health
    this._health = Math.min(this._maxHealth, this._health + amount);
  }

  public abstract specialAbility(target: Character): void;

  public get defense(): number {
    return this._defense;
  }

  public set defense(value: number) {
    if (value < 0) {
      throw new Error("Defense cannot be negative.");
    }
    this._defense = value;
  }
}
