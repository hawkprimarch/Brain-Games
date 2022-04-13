import getRandomNum from '../utilities.js';
import getGeneralLogic from '../index.js';

const getBrainEvenRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const getBrainEvenLogic = () => {
  const randomNum = getRandomNum();
  const correctAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';
  return [randomNum, correctAnswer];
};

export default () => getGeneralLogic(getBrainEvenRules, getBrainEvenLogic);
