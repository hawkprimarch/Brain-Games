import getGeneralLogic from '../index.js';

const getBrainProgressionRules = () => {
  console.log('What number is missing in the progression?');
};

const getRandomNumfour = (min = 1, max = 100) => {
  let minn = 0;
  let maxx = 0;
  minn = Math.ceil(min);
  maxx = Math.floor(max);
  return Math.floor(Math.random() * (maxx - minn + 1)) + minn;
};

const getBrainProgressionLogic = () => {
  const collection = [];
  const randomStart = getRandomNumfour();
  let result = randomStart;
  const randomLength = getRandomNumfour(5, 10);
  const randomProgression = getRandomNumfour(3, 12);
  for (let l = 0; l < randomLength; l += 1) {
    result += randomProgression;
    collection.push(result);
  }
  const randomIndex = getRandomNumfour(0, randomLength - 1);
  const correctAnswer = collection[randomIndex];
  collection[randomIndex] = '..';
  const randomQuestion = (`${collection.join(' ')}`);
  return [randomQuestion, correctAnswer];
};

export default () => getGeneralLogic(getBrainProgressionRules, getBrainProgressionLogic);
