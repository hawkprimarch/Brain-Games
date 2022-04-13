import getGeneralLogic from '../index.js';
import getRandomNum from '../utilities.js';

const getBrainPrimeRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const getBrainPrimeLogic = () => {
  const randomNum = getRandomNum(0, 100);
  let correctAnswer = '';
  const isPrime = () => {
    if (randomNum <= 1) {
      correctAnswer = 'no';
      return correctAnswer;
    }

    for (let counter = 2; counter < randomNum; counter += 1) {
      if (randomNum % counter === 0) {
        correctAnswer = 'no';
        return correctAnswer;
      }
    } correctAnswer = 'yes';
    return correctAnswer;
  };
  isPrime();
  const randomQuestion = (randomNum);
  return [randomQuestion, correctAnswer];
};

export default () => getGeneralLogic(getBrainPrimeRules, getBrainPrimeLogic);
