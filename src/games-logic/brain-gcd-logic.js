import getGeneralLogic from '../index.js';
import getRandomNum from '../utilities.js';

const termsOfGcdGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (a === 0) {
    return b;
  }
  return getGcd(b % a, a);
};

const getBrainGcdLogic = () => {
  const number1 = getRandomNum(1, 100);
  const number2 = getRandomNum(1, 100);

  const correctAnswer = getGcd(number1, number2);
  const randomQuestion = (`${number1} ${number2}`);
  return [randomQuestion, correctAnswer];
};

export default () => getGeneralLogic(termsOfGcdGame, getBrainGcdLogic);
