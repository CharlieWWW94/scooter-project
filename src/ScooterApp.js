const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  constructor() {
    this.stations = {
      manhattan: [],
      brooklyn: [],
      queens: [],
      bronx: [],
      statenIsland: [],
    };
    this.registeredUsers = {};
  }

  register(user) {
    if (user.age < 18) {
      console.log("too young to register!");
    } else if (Object.keys(this.registeredUsers).includes(user.username)) {
      console.log("already registered!");
    } else {
      this.registeredUsers[user.username] = {
        password: user.password,
        age: user.age,
        loggedIn: false,
        accountChange: 0,
      };
      console.log("User has been registered");
    }
  }

  logIn(username, password) {
    if (
      Object.keys(this.registeredUsers).includes(username) &&
      this.registeredUsers[username].password === password
    ) {
      this.registeredUsers[username].loggedIn = true;
    }
  }

  addScooter(location, scooter) {
    scooter.location = location;
    this.stations[location].push(scooter);
  }

  removeScooter(scooterToRemove) {
    let removalIndex = Number;
    let focalStation = scooterToRemove.station;

    for (let i = 0; i < focalStation.length; i++) {
      if (focalStation[i].serial === scooterToRemove.serial) {
        removalIndex = i;
      }
    }

    focalStation.splice(removalIndex, 1);
  }
}
module.exports = ScooterApp;
