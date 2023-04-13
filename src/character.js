export class Character  {
  constructor(name) {
    this.name = name;
    this.health = 0;
    this.strength = 0;
    this.intelligence = 0;
    this.agility = 0;
  }

  characterGenerator(startingHealth, startingStrength, startingIntelligence, startingAgility) {
    this.health = startingHealth;
    this.strength = startingStrength;
    this.intelligence = startingIntelligence;
    this.agility = startingAgility;
  }

  levelUp() {
    this.health += Math.ceil(Math.random()*3);
    this.strength += Math.ceil(Math.random()*3);
    this.intelligence += Math.ceil(Math.random()*3);
    this.agility += Math.ceil(Math.random()*3);
  }
}