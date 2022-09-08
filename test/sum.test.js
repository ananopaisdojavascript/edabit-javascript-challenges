const addition = require("../return-the-sum-of-two-numbers/sum");

describe("Sum of two numbers", () => {
  test("The result of this sum should be 5", () => {
    expect(addition(2, 3)).toBe(5);
  });

  test("The result of this sum should be -9", () => {
    expect(addition(-3, -6)).toBe(-9);
  });

  test("The result of this sum should be 10", () => {
    expect(addition(7, 3)).toBe(10);
  });

  test("The result of this sum should be 90", () => {
    expect(addition(88, 2)).toBe(90);
  });
});
