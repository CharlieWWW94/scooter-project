const User = require("../src/User");

// User tests here
describe("Tests user class for key properties", () => {
  beforeEach(() => {
    newUser = new User("user123", "password", 17);
  });

  test("Object created is instance of user.", () => {
    expect(newUser).toBeInstanceOf(User);
  });
  // test username
  test("Test username has been set correctly", () => {
    expect(newUser.username).toBe("user123");
  });
  // test password
  test("Test password has been set correctly", () => {
    expect(newUser.password).toBe("password");
  });
  // test age
  test("Test age has been set correctly", () => {
    expect(newUser.age).toBe(17);
  });
});
