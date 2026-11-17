import { Item } from "./item";
import { Character } from "./character";

export class Inventory {
  private _items: Item[] = [];

  public add(item: Item): void {
    this._items.push(item);
  }

  public use(index: number, target: Character): string {
    if (index < 0 || index >= this._items.length) {
      throw new Error("Invalid inventory slot.");
    }

    const item = this._items.splice(index, 1)[0]!;
    return item.apply(target);
  }

  public listItems(): string[] {
    // Returns the class names of the items currently in the inventory
    return this._items.map((item) => item.constructor.name);
  }

}
