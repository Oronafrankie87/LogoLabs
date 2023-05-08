const { Triangle, Circle, Square } = require("./shapes");


// shape testing 
describe("shape testing", () => {
  describe("triangle", () => {
    it("should take in shape and color inputs and generate expected result", () => {
      const shape = new Triangle("red");
      expect(shape.createShape()).toEqual(
        '<polygon points="150 15 15 185 285 185" fill="pink"/>'
      );
    });
  });
});

// testing circle shape
describe("shape testing", () => {
  describe("circle", () => {
    it("should take in shape and color inputs and generate expected result", () => {
      const shape = new Circle("blue");
      expect(shape.createShape()).toEqual(
        '<circle cx="150" cy="100" r="75" fill="blue"/>'
      );
    });
  });
});

// testing square shape functionality
describe("shape testing", () => {
  describe("square", () => {
    it("should take in shape and color inputs and generate expected result", () => {
      const shape = new Square("green");
      expect(shape.createShape()).toEqual(
        '<rect x="75" y="25" width="150" height="150" fill="green"/>'
      );
    });
  });
});
