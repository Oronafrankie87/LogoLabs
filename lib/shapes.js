//Class declaration to provide a blueprint for creating shapes objects, which can then be used to render SVG shapes with the chosen colors and text
class Shapes {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }  
}

//Child triangle class/inheriting properties

class Triangle extends Shapes {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  //Code to create a triangle shape, relied on google, MDN web docs and chat gpt for reference and understanding how this code works
   createShape() {
    return `<polygon points="150, 18 244, 182 56,  182" fill="${this.shapeColor}"/>`
  }
}

//Child circle class/inheriting properties

class Circle extends Shapes {
  constructor(shapeColor) {
    super(shapeColor);
  }
  //Code to create a circle shape, relied on google, MDN web docs and chat gpt for reference and understanding how this code works
  createShape() {
    return `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}"/>`;
  }
}
//Child square class/inheriting properties
class Square extends Shapes {
  constructor(shapeColor) {
    super(shapeColor);
  }
  //Code to create a square shape, relied on google, MDN web docs and chat gpt for reference and understanding how this code works
  createShape() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>`;
  }
}



module.exports = {Triangle, Circle, Square}