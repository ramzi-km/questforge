import { Character } from "./character";

export function runSpecialRound(
  attacker: Character,
  defender: Character,
): void {
  attacker.specialAbility(defender);
}

export function totalPartyDamage(party: Character[], target: Character) {
  console.log(`\n--- Total Party Attack initiated on ${target.name}! ---`);

  for (const member of party) {
    member.attack(target);
  }
}
