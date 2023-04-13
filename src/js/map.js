export class Game {
  constructor(gameName) {
    this.gameName = gameName;
    this.characters = [];
    this.dungeon = new Map(
      [
        [1, "The room is dark and has no windows."],
        [2, "There are spiderwebs everywhere."],
        [3, "There is a book on a stone pedestal. The book appears to be glowing."],
        [4, "This is room 4"],
        [5, "This is room 5"],
        [6, "This is room 6"]
      ]
    );
    this.characterLocationId = 1;
  }

  addCharacter(newCharacter)  {
    this.characters.push(newCharacter);
  }

  displayRoomDescription() {
    // const currentRoom = this.characterLocationId;
    return this.dungeon.get(this.characterLocationId);
  }

  enterPath(pathChoice)  {
    if (this.characterLocationId === 1) {
      if (pathChoice === 1) {
        this.characterLocationId = 2;
      } else {
        this.characterLocationId = 3;
      }
    } else if (this.characterLocationId === 2) {
      if (pathChoice === 1) {
        this.characterLocationId = 4;
      } else {
        this.characterLocationId = 5;
      }
    } else {
      if (pathChoice === 1) {
        this.characterLocationId = 5;
      } else {
        this.characterLocationId = 6;
      }
    }
  }

}



// let dungeon = new Map(
//   [
//     [1, "The room is dark and has no windows."],
//     [2, "There are spiderwebs everywhere."],
//     [3, "There is a book on a stone pedestal. The book appears to be glowing."],
//     [4, "This is room 4"],
//     [5, "This is room 5"]
//   ]
// );

// function moveInDungeon(argument){
// document.getElementById("output").innerText = dungeon.get(argument);
// }

// function doorChooser(){
//   let currentRoom = document.querySelector("div.output");
// }

// enterPath(pathChoice)  {
//   if (pathChoice = 1) {
//     this.characterLocationId = 2;
//   } else if (pathChoice = 2)  {
//     this.characterLocationId = 3;
//   } else  {
//     this.characterLocationId = 3;
//   }
// }