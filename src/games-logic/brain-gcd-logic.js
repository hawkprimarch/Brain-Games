import getGeneralLogic from '../index.js';
import getRandomNum from '../utilities.js';

const getBrainGcdRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const getBrainGcdLogic = () => {
  const number1 = getRandomNum(1, 100);
  const number2 = getRandomNum(1, 100);
  const NOD = (a, b) => {
    if (a === 0) {
      return b;
    }
    return NOD(b % a, a);
  };

  const correctAnswer = NOD(number1, number2);
  const randomQuestion = (`${number1} ${number2}`);
  return [randomQuestion, correctAnswer];
};

export default () => getGeneralLogic(getBrainGcdRules, getBrainGcdLogic);
