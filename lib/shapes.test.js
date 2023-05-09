const { Triangle, Circle, Square } = require("./shapes");


// shape testing, google and chat gpt was used to fill in gaps and help understand how this code works
describe("shape testing", () => {
  describe("triangle", () => {
    it("should take in shape and color inputs and generate expected result", () => {
      const shape = new Triangle("red");
      expect(shape.createShape()).toEqual(
//relied on google, MDN web docs and chat gpt for reference and understanding how this code works
        `<polygon points="150, 18 244, 182 56,  182" fill="red"/>`
      );
    });
  });
});

// testing circle shape, google and chat gpt was used to fill in gaps and help understand how this code works
describe("shape testing", () => {
  describe("circle", () => {
    it("should take in shape and color inputs and generate expected result", () => {
      const shape = new Circle("blue");
      expect(shape.createShape()).toEqual(
//relied on google, MDN web docs and chat gpt for reference and understanding how this code works
        '<circle cx="50" cy="50" r="50" fill="blue"/>'
      );
    });
  });
});

// testing square shape functionality, google and chat gpt was used to fill in gaps and help understand how this code works
describe("shape testing", () => {
  describe("square", () => {
    it("should take in shape and color inputs and generate expected result", () => {
      const shape = new Square("green");
      expect(shape.createShape()).toEqual(
//relied on google, MDN web docs and chat gpt for reference and understanding how this code works
        '<rect x="75" y="25" width="150" height="150" fill="green"/>'
      );
    });
  });
});
