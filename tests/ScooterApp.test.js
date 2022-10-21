const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

// ScooterApp tests here
describe("Testing for ScooterApp object", () => {
  beforeEach(() => {
    newApp = new ScooterApp();
  });
  test("ScooterApp instantiates as expected", () => {
    expect(newApp).toBeInstanceOf(ScooterApp);
  });

  test("ScooterApp has stations", () => {
    expect(typeof newApp.stations).toBe("object");
  });

  test("ScooterApp has registeredUsers", () => {
    expect(typeof newApp.registeredUsers).toBe("object");
  });
});

describe("Testing ScooterApp methods", () => {
  beforeEach(() => {
    anotherApp = new ScooterApp();
    const charlie = new User("charlie", "1234", 28);
    anotherApp.register(charlie);
  });

  test("Can register new user", () => {
    expect(anotherApp.registeredUsers["charlie"]).toEqual({
      accountChange: 0,
      age: 28,
      loggedIn: false,
      password: "1234",
    });
  });

  test("Can log in", () => {
    anotherApp.logIn("charlie", "1234");
    expect(anotherApp.registeredUsers["charlie"].loggedIn).toBe(true);
  });

  test("Can add scooter", () => {
    const aminah = new User("Aminah", "7590", 24);
    const testScoot = new Scooter(aminah, "manhattan");
    anotherApp.addScooter(testScoot, "manhattan");
  });

  test("Can remove scooter", () => {
    const aminah = new User("Aminah", "7590", 24);
    const testScoot = new Scooter(aminah, "manhattan");
    anotherApp.addScooter(testScoot, "manhattan");
    anotherApp.removeScooter(testScoot);
    expect(anotherApp.stations.manhattan.length).toBe(0);
  });
});
// register user

// log in

// add scooter

// remove scooter
