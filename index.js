 const inquirer = require("inquirer");
 const fs = require("fs");


const questions = [
    {
      type: 'list',
      name: 'shape',
      message: `Let's build a logo! What type of shape do you want as the base?`,
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'list',
      name: 'color',
      message: 'What color do you want the shape to be?',
      choices: ['Red', 'Green', 'Blue', 'Yellow'],
    },
    {
      type: 'input',
      name: 'Text',
      message: 'What words do you want within the shape? (Just press enter if none.)',
      validate: (input) => {
        const maxLength = 15
        if (input.length > maxLength) {
          return `Text must be ${maxLength} characters or less (so it can easily fit within the shape).`;
        }
        return true;
      },
    },