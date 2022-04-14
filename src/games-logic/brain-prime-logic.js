import getGeneralLogic from '../index.js';
import getRandomNum from '../utilities.js';

const getBrainPrimeRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const isPrime = (number) => {
  for (let h = 2; h <= number / 2; h += 1) {
    if (number < 2 || number % h === 0) {
      return false;
    }
  }
  return true;
};

const getBrainPrimeLogic = () => {
  const randomNumber = getRandomNum(0, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const randomQuestion = randomNumber;
  return [randomQuestion, correctAnswer];
};

export default () => getGeneralLogic(getBrainPrimeRules, getBrainPrimeLogic);
