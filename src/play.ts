import { Warrior, Mage, Cleric, Rogue } from "./domain/classes";
import { runSpecialRound } from "./domain/battle";

const party = [
  new Warrior("Bram"),
  new Mage("Sylla"),
  new Rogue("Kade"),
  new Cleric("Elara"),
];
const dummy = new Warrior("Training Dummy");

for (const member of party) {
  // Same function call, but completely different behavior each time!
  runSpecialRound(member, dummy);
  console.log(`Dummy HP: ${dummy.health}`);
}
