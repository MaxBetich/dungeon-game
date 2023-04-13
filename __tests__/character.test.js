import {Character} from "../src/character";

describe ('Character', () => {

  test('should create a Character object with properties for name, health, strength, intelligence, and agility', () => {
    const newCharacter = new Character("character one");
    expect(newCharacter.name).toEqual("character one");
    expect(newCharacter.health).toEqual(0);
    expect(newCharacter.strength).toEqual(0);
    expect(newCharacter.intelligence).toEqual(0);
    expect(newCharacter.agility).toEqual(0);
  });

  test('should create a Character object with inputted properties for name, health, strength, intelligence, and agility', () => {
    const newCharacter = new Character("character one");
    newCharacter.characterGenerator(1,2,3,4);
    expect(newCharacter.health).toEqual(1);
    expect(newCharacter.strength).toEqual(2);
    expect(newCharacter.intelligence).toEqual(3);
    expect(newCharacter.agility).toEqual(4);
  })
})