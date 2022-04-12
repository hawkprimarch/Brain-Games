import getRandomNum from '../src/utilies.js';

export const brainEvenRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const brainEvenLogic = () => {
  const randomNum = getRandomNum();
  const correctAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';
  const gameQuestion = (`${'Question: '}${randomNum}`);
  return [gameQuestion, correctAnswer];
};
