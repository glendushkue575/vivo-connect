/* 
Filename: complex_program.js

Description: 

This JavaScript code implements a complex program that simulates a virtual pet game. The user can interact with the virtual pet by feeding, playing, and taking care of it. The pet's mood, energy, and hunger levels will change based on the user's actions. The code includes various functions, classes, and game mechanics to provide an immersive and engaging experience.

Note: This is a simplified version of the code, and there might be additional features and enhancements that can be added.

*/

// Class representing the Virtual Pet
class VirtualPet {
  constructor(name) {
    this.name = name;
    this.mood = 50;     // Ranges from 0 to 100, 0 being the lowest
    this.energy = 50;   // Ranges from 0 to 100, 0 being the lowest
    this.hunger = 50;   // Ranges from 0 to 100, 0 being the lowest
  }

  feed() {
    this.hunger += 10;
    this.mood += 5;
    this.energy -= 5;
    console.log(`${this.name} has been fed.`);
    this.checkLevels();
  }

  play() {
    this.mood += 10;
    this.energy -= 10;
    this.hunger -= 5;
    console.log(`${this.name} played with you.`);
    this.checkLevels();
  }

  sleep() {
    if (this.energy <= 80) {
      this.energy += 20;
      this.mood += 5;
      console.log(`${this.name} slept and feels refreshed.`);
    } else {
      console.log(`${this.name} is not tired right now.`);
    }
    this.checkLevels();
  }

  checkLevels() {
    if (this.mood <= 0) {
      console.log(`${this.name} is feeling sad.`);
    } else if (this.hunger >= 90) {
      console.log(`${this.name} is very hungry.`);
    } else if (this.energy <= 10) {
      console.log(`${this.name} is feeling exhausted.`);
    }
  }
}

// Main game loop
function gameLoop() {
  const petName = prompt("Enter the name for your virtual pet:");
  const pet = new VirtualPet(petName);

  while (true) {
    const action = prompt(`What do you want to do with ${petName}? (feed, play, sleep, exit)`);

    switch (action.toLowerCase()) {
      case "feed":
        pet.feed();
        break;
      case "play":
        pet.play();
        break;
      case "sleep":
        pet.sleep();
        break;
      case "exit":
        console.log("Exiting the game.");
        return;
      default:
        console.log("Invalid action. Please try again.");
    }
  }
}

// Start the game
gameLoop();