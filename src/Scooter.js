class Scooter {
  // scooter code here
  constructor(user, station) {
    this.station = station;
    this.user = user;
    this.serial = Math.floor(Math.random() * 1000);
    this.charged = Math.floor(Math.random() * 100);
    this.isBroken = false;
    this.docked = true;
  }

  rent() {
    if (this.charged < 20 && this.isBroken === false) {
      throw new Error("Scooter low on battery, please charge.");
    } else if (this.isBroken) {
      throw "Scooter is broken, please send a repair request.";
    } else {
      this.docked = false;
      console.log("Enjoy the ride!");
    }
  }

  dock(location) {
    if (location) {
      this.docked = true;
      this.location = location;
      this.user = "";
    } else {
      throw new Error("Docking station required!");
    }
  }

  async recharge() {
    await new Promise((res) => {
      setTimeout(() => {
        res("resolved");
      }, 1000);
    });
    this.charged = 100;
  }

  async requestRepair() {
    await new Promise((res) => {
      setTimeout(() => {
        res("resolved");
      }, 1000);
    });

    this.isBroken = false;
  }
}

module.exports = Scooter;
