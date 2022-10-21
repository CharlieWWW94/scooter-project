const Scooter = require("../src/Scooter");
const User = require("../src/User");

//typeof scooter === object
describe("scooter object", () => {
  beforeEach(() => {
    newUser = new User();
    newScooter = new Scooter(newUser, "Bermondsey");
  });

  test("scooter instantiates as expected", () => {
    expect(newScooter).toBeInstanceOf(Scooter);
  });

  test("new scooter has station", () => {
    expect(typeof newScooter.station).toBe("string");
  });

  test("new scooter has serial", () => {
    expect(typeof newScooter.serial).toBe("number");
  });

  test("new scooter is charged", () => {
    expect(typeof newScooter.charged).toBe("number");
  });

  test("new scooter is not broken", () => {
    expect(newScooter.isBroken).toBe(false);
  });

  test("new scooter is docked", () => {
    expect(newScooter.docked).toBe(true);
  });
});

//Method tests
describe("scooter methods", () => {
  beforeEach(() => {
    anotherUser = new User();
    anotherScooter = new Scooter(anotherUser, "manhattan");
  });

  test("Check rent method works with correct values", () => {
    anotherScooter.isBroken = false;
    anotherScooter.charged = 50;
    anotherScooter.rent();
    expect(anotherScooter.docked).toBe(false);
  });

  test("check rent method works appropriately when scooter broken", () => {
    anotherScooter.isBroken = true;
    expect(() => {
      anotherScooter.rent();
    }).toThrow("Scooter is broken, please send a repair request.");
  });

  test("check rent method works appropriately when scooter is not charged", () => {
    anotherScooter.charged = 19;
    expect(() => {
      anotherScooter.rent();
    }).toThrow("Scooter low on battery, please charge.");
  });

  test("Check scooter can recharge", async () => {
    anotherScooter.charged = 30;
    await anotherScooter.recharge();
    expect(anotherScooter.charged).toBe(100);
  });

  test("Check dock function sets scooter location when provided", () => {
    anotherScooter.dock("manhattan");
    expect(anotherScooter.location).toBe("manhattan");
  });

  test("Check dock function sets user to empty", () => {
    anotherScooter.dock("Haddock");
    expect(anotherScooter.user).toBe("");
  });

  test("Check dock function throws error when no location given", () => {
    expect(() => {
      anotherScooter.dock();
    }).toThrow("Docking station required!");
  });
});

// });
