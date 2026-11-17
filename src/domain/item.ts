import { Character } from "./character";

export interface Item {
  apply(character: Character): string;
}
