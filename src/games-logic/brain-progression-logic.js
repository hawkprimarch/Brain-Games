import getRandomNum from '../utilities.js';
import getGeneralLogic from '../index.js';

const termsOfProgressionGame = 'What number is missing in the progression?';

const getBrainProgressionLogic = () => {
  const collection = [];
  const randomStart = getRandomNum();
  let result = randomStart;
  const randomLength = getRandomNum(5, 10);
  const randomProgression = getRandomNum(3, 12);

  for (let l = 0; l < randomLength; l += 1) {
    result += randomProgression;
    collection.push(result);
  }
  const randomIndex = getRandomNum(0, randomLength - 1);
  const correctAnswer = collection[randomIndex];
  collection[randomIndex] = '..';
  const randomQuestion = (`${collection.join(' ')}`);
  return [randomQuestion, correctAnswer];
};

export default () => getGeneralLogic(termsOfProgressionGame, getBrainProgressionLogic);
