import {Character} from "../src/js/character";

describe ('Character', () => {

  test('should create a Character object with properties for name, health, strength, intelligence, and agility', () => {
    const newCharacter = new Character("character one", 1, 2, 3, 4);
    expect(newCharacter.name).toEqual("character one");
    expect(newCharacter.health).toEqual(1);
    expect(newCharacter.strength).toEqual(2);
    expect(newCharacter.intelligence).toEqual(3);
    expect(newCharacter.agility).toEqual(4);
  });

  test('should successfully increase the properties of a Character object when running the levelUp method', () => {
    const newCharacter = new Character("character one");
    newCharacter.characterGenerator(1,2,3,4);
    newCharacter.levelUp();
    expect(newCharacter.health).toBeGreaterThan(1);
    expect(newCharacter.strength).toBeGreaterThan(2);
    expect(newCharacter.intelligence).toBeGreaterThan(3);
    expect(newCharacter.agility).toBeGreaterThan(4);
    expect(newCharacter.health).toBeLessThan(5);
    expect(newCharacter.strength).toBeLessThan(6);
    expect(newCharacter.intelligence).toBeLessThan(7);
    expect(newCharacter.agility).toBeLessThan(8);
  });
})