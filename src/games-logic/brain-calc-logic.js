import getRandomNum from '../utilities.js';
import getGeneralLogic from '../index.js';

const getBrainCalcRules = () => {
  console.log('What is the result of the expression?');
};

const getRandomOperator = () => {
  const operatorsColl = ['+', '-', '*'];
  const opindex = getRandomNum(0, operatorsColl.length - 1);
  const randomOperator = operatorsColl[opindex];
  return randomOperator;
};

const getRandomExample = () => {
  const operand1 = getRandomNum();
  const operand2 = getRandomNum();
  const operator = getRandomOperator();
  let result = 0;
  let massiveResult = [];
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      massiveResult = `${operand1} ${'+'} ${operand2}`;
      break;
    case '-':
      result = operand1 - operand2;
      massiveResult = [`${operand1} ${'-'} ${operand2}`];
      break;
    case '*':
      result = operand1 * operand2;
      massiveResult = [`${operand1} ${'*'} ${operand2}`];
      break;
    default:
      throw new Error(`operation ${operator} is not supported`);
  }
  return [result, massiveResult];
};

const getBrainCalcLogic = () => {
  const massiveResult = getRandomExample();
  const [correctAnswer, randomQuestion] = massiveResult;
  return [randomQuestion, correctAnswer];
};

export default () => getGeneralLogic(getBrainCalcRules, getBrainCalcLogic);
