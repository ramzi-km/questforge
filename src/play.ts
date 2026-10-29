import { Character } from "./domain/character";
import { Warrior, Mage, Rogue, Cleric } from "./domain/classes";
import { totalPartyDamage } from "./domain/battle";

// Assemble the mixed party
const party = [
  new Warrior("Bram"),
  new Mage("Sylla"),
  new Rogue("Kade"),
  new Cleric("Elara"), // The Cleric is included!
];

// Spawn a Boss
const boss = new Character("Dragon Boss", 500, 50);

console.log(`[Status] ${boss.name} spawns with ${boss.health} HP.`);

// CHECKPOINT 2: Execute the loop without type checking
totalPartyDamage(party, boss);

console.log(`[Status] ${boss.name} has ${boss.health} HP remaining.`);
