class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignatire(): number {
    return this.signature;
  }
}
class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getKey().getSignatire()} enters the house`);
    } else {
      console.log("The door is closed. Cannot enter");
    }
  }
}
class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignatire() === this.key.getSignatire()) {
      this.door = true;
      console.log("Door is open");
    } else {
      console.log("invalid key. Door remains closed.");
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
