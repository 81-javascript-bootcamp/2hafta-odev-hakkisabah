const odev = require("./odev");
const testFigures = [
  { name: "Ahmet", expected: true },
  { name: false, expected: false },
  { name: null, expected: false },
  { name: undefined, expected: false },
  { name: "", expected: false },
  { name: "  \t\n", expected: false },
  { name: "X", expected: false },
  { name: "Ha", expected: true },
  { name: "Ha Sa", expected: true },
  { name: "Ha Sa Ba", expected: true },
  { name: "Ha Sa Ba", expected: true },
  { name: "Hakki Sabah Sabah \t\n", expected: true },
  { name: "Hakki Sabah Sabah ", expected: true },
  { name: "Hakki Sabah Sabah Sa", expected: false },
  { name: "Hakki Sabah Sabah S", expected: false },
  { name: "Hakki Sabah S", expected: false },
  { name: "H S S", expected: false },
  { name: "H S", expected: false },
  { name: "H ", expected: false },
];
describe("Hafta 2 Odev", () => {
  it("Should non parameter to be false", () => {
    expect(odev()).toBe(false);
  });
  for (let i = 0; i < testFigures.length; i++) {
    it(`Should ${testFigures[i].name} to be ${testFigures[i].expected}`, () => {
      expect(odev(testFigures[i].name)).toBe(testFigures[i].expected);
    });
  }
});
