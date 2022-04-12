import getRandomNum from '../src/utilies.js';

export const brainCalcRules = () => {
  console.log('What is the result of the expression?');
};
export const getRandomAction = (a = ['+', '-', '*']) => a[Math.floor(Math.random() * a.length)];

export const getRandomExample = (a = getRandomNum(), b = getRandomNum(), c = getRandomAction()) => {
  let result = 0;
  let massiveResult = [];
  if (c === '+') {
    result = a + b;
    massiveResult = `${a} ${'+'} ${b}`;
  } if (c === '-') {
    result = a - b;
    massiveResult = [`${a} ${'-'} ${b}`];
  } if (c === '*') {
    result = a * b;
    massiveResult = [`${a} ${'*'} ${b}`];
  }
  return [result, massiveResult];
};

export const brainCalcLogic = () => {
  const massiveResult = getRandomExample();
  const [correctAnswer, x] = massiveResult;
  const gameQuestion = (`${'Question: '}${x}`);
  return [gameQuestion, correctAnswer];
};
