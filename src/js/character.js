export class Character  {
  constructor(name, startingHealth, startingStrength, startingIntelligence, startingAgility) {
    this.name = name;
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