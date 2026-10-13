import { Character } from "./domain/character";

const hero = new Character("Aria", 100, 15);
const goblin = new Character("Goblin", 30, 5);
const orc = new Character("Orc", 80, 10);
const knight = new Character("Knight", 60, 8);

console.log(`${hero.name} starts with ${hero.health} HP.`);

// 1. Damage the hero
orc.attack(hero);
console.log(`Took 10 damage. Current HP: ${hero.health}`); // Should be 60

// 2. Try to overheal by a massive amount
hero.heal(9999);
console.log(`Drank a massive potion. Current HP: ${hero.health}`); // Should strictly be 100!

// 3. (Optional) Test the Checkpoint 3 security patch
// hero.heal(-50); // Uncommenting this should immediately crash the program with our custom Error
