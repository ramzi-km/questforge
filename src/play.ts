import { HealthPotion, Weapon, Armor } from "./domain/items";
import { Warrior, Boss } from "./domain/classes";

const hero = new Warrior("Bram");
const boss = new Boss("Dragon Boss"); // Boss does 50 base damage

// 1. Give the character items
hero.inventory.add(new HealthPotion(30));
hero.inventory.add(new Weapon("Flaming Sword", 15));
hero.inventory.add(new Armor("Steel Plate", 20));

console.log(`\n--- Gearing Up ---`);
// 2. Use the items (Slots: 0=Potion, 1=Weapon, 2=Armor)
hero.inventory.use(2, hero); // Equips Armor
hero.inventory.use(1, hero); // Equips Weapon

console.log(
  `[Status] ${hero.name} - ATK: ${hero.attackPower} | DEF: ${hero.defense}`,
);

console.log(`\n--- Battle ---`);
// Boss attacks! Without armor: 50 dmg. With 20 DEF: should only do 30 dmg!
boss.specialAbility(hero);

console.log(`[Status] ${hero.name} HP: ${hero.health}`);

// Hero heals up using the potion left in slot 0
hero.inventory.use(0, hero);
console.log(`[Status] ${hero.name} HP: ${hero.health}`);
