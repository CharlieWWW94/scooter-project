const Scooter = require("../src/Scooter");
const User = require("../src/User");

//typeof scooter === object
describe("scooter object", () => {
  beforeEach(() => {
    newScooter = new Scooter();
  });

  test("scooter instantiates as expected", () => {
    expect(newScooter).toBeInstanceOf(Scooter);
  });

  test("new scooter has station", () => {
    expect(newScooter.station).toBeInstanceOf(String);
  });

  test("new scooter has serial", () => {
    expect(newScooter.serial).toBeInstanceOf(Number);
  });

  test("new scooter is charged", () => {
    expect(newScooter.charged).toBeInstanceOf(Number);
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
    anotherScooter = new Scooter();
  });

  afterEach(() => {
    anotherScooter = new Scooter();
  });

  test("Check rent method works with correct values", () => {
    anotherScooter.isBroken = false;
    anotherScooter.charge = 50;
    jest.spyOn(console.log());
    anotherScooter.rent();
    expect(console.log).toHaveBeenCalledWith("Enjoy the ride!");
    expect(anotherScooter.docked).toBe(false);
  });

  test("check rent method works appropriately when scooter broken", () => {
    anotherScooter.isBroken = true;
    expect(anotherScooter.rent()).toThrow(
      "Scooter is broken, please send a repair request"
    );
  });

  test("check rent method works appropriately when scooter is not charged", () => {
    anotherScooter.charged = 19;
    expect(anotherScooter.rent()).toThrow(
      "Scooter low on battery, please charge."
    );
  });

  test("Check scooter can recharge", async () => {
    anotherScooter.charged = 30;
    await anotherScooter.recharge();
    expect(anotherScooter.charged).toBe(100);
  });

  test("Check dock function sets scooter location when provided", () => {
    anotherScooter.dock("Haddock");
    expect(anotherScooter.location).toBe("Haddock");
  });

  test("Check dock function throws error when no location given", () => {
    anotherScooter.dock();
    expect(anotherScooter.location).toThrow("Docking station required!");
  });
});

//   //dock method
//   //requestRepair method
//   //charge method
// });
