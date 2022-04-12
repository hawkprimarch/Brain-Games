import getGeneralLogic from '../src/index.js';

export const brainGcdRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

export const brainGcdLogic = () => {
  const randomNum1GameThree = Math.floor(Math.random() * 100);
  const randomNum2GameThree = Math.floor(Math.random() * 100);
  const NOD = (a, b) => {
    if (a === 0) {
      return b;
    }
    return NOD(b % a, a);
  };

  const correctAnswer = NOD(randomNum1GameThree, randomNum2GameThree);
  const gameQuestion = (`Question: ${randomNum1GameThree} ${randomNum2GameThree}`);
  return [gameQuestion, correctAnswer];
};

export default () => getGeneralLogic(brainGcdRules, brainGcdLogic);
