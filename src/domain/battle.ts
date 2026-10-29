import { Character } from "./character";

export function runSpecialRound(
  attacker: Character,
  defender: Character,
): void {
  attacker.specialAbility(defender);
}
