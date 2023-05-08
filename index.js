const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle, Circle, Square } =require('./lib/shapes.js');
const {SVG} = require('./lib/svg.js')

const questions = [
  {
    type: "list",
    name: "shape",
    message: `Welcome to LogoLabs, for starters what shape do you want for your background?`,
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "list",
    name: "color",
    message: "What color would you like for your shape?",
    choices: ["Red", "Green", "Blue", "Yellow"],
  },
  {
    type: "input",
    name: "Text",
    message: "Whats the name of your brand or company?",
    validate: (input) => {
      const maxLength = 20;
      if (input.length > maxLength) {
        return `Text must be ${maxLength} characters or less to fit over the shape.`;
      }
      return true;
    },
  },
  {
    type: "list",
    name: "textColor",
    message: "What color would you like the text to be?",
    choices: ["Red", "Green", "Blue", "Yellow", "White", "Black"],
  },
];

async function init() {
  var userDefinedLogoParams = await inquirer.prompt(questions);
  var svg = new SVG();
  var shape;
  if (userDefinedLogoParams.shape == "Circle") {
    shape = new Circle(userDefinedLogoParams.color);
  }
  if (userDefinedLogoParams.shape == "Triangle") {
    shape = new Triangle(userDefinedLogoParams.color);
  }
  if (userDefinedLogoParams.shape == "Square") {
    shape = new Square(userDefinedLogoParams.color);
  }

  // Set svg.shape to be the return value of shape.createShape()
  // set svg.text to be the text that user inputed and formatted to svg standards.
  // call render method of SVG and write the value to the svg file
}



init();
