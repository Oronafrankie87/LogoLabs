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
  // {
  //   type: "list",
  //   name: "color",
  //   message: "What color would you like for your shape?",
  //   choices: ["Red", "Green", "Blue", "Yellow"],
  // },
  //AskBCS tutor helped me locate the steps for the following code, I ran it through chat gpt to help understand what exactly it was doing.
  {
    type: "input",
    name: "color",
    message: "Enter a color keyword or hexadecimal code for your shape:",
    validate: function (value) {
      if (
        /^#[0-9A-F]{6}$/i.test(value) ||
        /^(red|green|blue|yellow)$/i.test(value)
      ) {
        return true;
      } else {
        return "Please enter a valid color keyword or hexadecimal code.";
      }
    },
  },
  {
    type: "input",
    name: "Text",
    message: "Whats the name of your brand or company?",
    validate: (input) => {
      const maxLength = 10;
      if (input.length > maxLength) {
        return `Text must be ${maxLength} characters or less to fit over the shape.`;
      }
      return true;
    },
  },
  // {
  //   type: "list",
  //   name: "textColor",
  //   message: "What color would you like the text to be?",
  //   choices: ["Red", "Green", "Blue", "Yellow", "White", "Black"],
  // },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color keyword or hexadecimal code for your shape:",
    validate: function (value) {
      if (
        /^#[0-9A-F]{6}$/i.test(value) ||
        /^(red|green|blue|yellow)$/i.test(value)
      ) {
        return true;
      } else {
        return "Please enter a valid color keyword or hexadecimal code.";
      }
    },
  },
];

//The following async/promise and await function was suggested by an askBCS tutor and looked up at websitehttps://www.w3schools.com/js/js_async.asp
//Await is used to unwrap promises by passing a promise as the expression

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
  svg.shape = shape.createShape();
  svg.text = `<text x="150" y="100" fill="${userDefinedLogoParams.textColor}" font-size="30" font-weight="bold" text-anchor="middle">${userDefinedLogoParams.Text}</text>`;
  const svgContents = svg.render();
  fs.writeFileSync("logo.svg", svgContents);

}



init();
