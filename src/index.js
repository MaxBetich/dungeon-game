import { Game } from "./js/map";
import { Character } from "./js/character";

let newGame = new Game("Dungeon Crawling");

function createCharacter() {
  const characterName = document.getElementById("name").value;
  const characterClass = document.querySelector("input[name='character']:checked").value;
  if (characterClass === "fighter") {
    let fighter = new Character(characterName, 5, 3, 1, 1);
    newGame.addCharacter(fighter);
  } else if (characterClass === "wizard") {
    let wizard = new Character(characterName, 3, 1, 3, 1);
    newGame.addCharacter(wizard);
  } else {
    let thief = new Character(characterName, 4, 2, 2, 3);
    newGame.addCharacter(thief);
  }
}

function formSubmission() {
  document.querySelector("div.your-character").innerText = null;
  createCharacter();
  let ulTag = document.createElement("ul");
  const characterName = newGame.characters[0].name;
  const characterHealth = newGame.characters[0].health;
  const characterStrength = newGame.characters[0].strength;
  const characterIntelligence = newGame.characters[0].intelligence;
  const characterAgility = newGame.characters[0].agility;
  const statArray = [characterName, characterHealth, characterStrength, characterIntelligence, characterAgility];
  statArray.forEach(element => {
    let liTag = document.createElement("li");
    liTag.append(element);
    ulTag.append(liTag);
  });
  document.querySelector("div.your-character").append(ulTag);
}

function initialRoom() {
  newGame.characterLocationId = 1;
  const description = newGame.displayRoomDescription();
  document.getElementById("roomText").innerText = description;
}

function newRoom1() {
  newGame.enterPath(1);
  const description = newGame.displayRoomDescription();
  document.getElementById("roomText").innerText = description;
}

function newRoom2() {
  newGame.enterPath(2);
  const description = newGame.displayRoomDescription();
  document.getElementById("roomText").innerText = description;
}

document.getElementById("create").addEventListener("click", formSubmission);
document.getElementById("newGame").addEventListener("click", initialRoom);
document.getElementById("choice1").addEventListener("click", newRoom1);
document.getElementById("choice2").addEventListener("click", newRoom2);