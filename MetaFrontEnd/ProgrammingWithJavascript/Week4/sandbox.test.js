
const addFive = require('./sandbox')

test("returns the number plus 5", () => {
  expect(addFive(1)).toBe(6);
});
