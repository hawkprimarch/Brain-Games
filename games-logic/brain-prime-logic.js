export const brainPrimeRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

export const getRandomNumFive = (min = 0, max = 100) => {
  let minn = 0;
  let maxx = 0;
  minn = Math.ceil(min);
  maxx = Math.floor(max);
  return Math.floor(Math.random() * (maxx - minn + 1)) + minn;
};

export const brainPrimeLogic = () => {
  const randomNumFive = getRandomNumFive();
  let correctAnswer = '';
  const isPrime = (num = randomNumFive) => {
    if (num <= 1) {
      correctAnswer = 'no';
      return correctAnswer;
    }

    for (let counter = 2; counter < num; counter += 1) {
      if (num % counter === 0) {
        correctAnswer = 'no';
        return correctAnswer;
      }
    } correctAnswer = 'yes';
    return correctAnswer;
  };
  isPrime();
  const gameQuestion = (`Question: ${randomNumFive}`);
  return [gameQuestion, correctAnswer];
};
