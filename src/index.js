import readlineSync from 'readline-sync';

const getGeneralLogic = (gameTerms, gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const hello = (`${'Hello'}, ${name}${'!'}`);
  console.log(hello);

  console.log(gameTerms);
  const numberOfGameRounds = 3;

  for (let i = 0; i < numberOfGameRounds; i += 1) {
    const [randomQuestion, correctAnswer] = gameLogic();
    const gameQuestion = (`${'Question: '}${randomQuestion}`);

    console.log(gameQuestion);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' ${'is wrong answer ;(. Correct answer was'} '${correctAnswer}'.`);
      console.log(`${"Let's try again, "}${name}${'!'}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`${'Congratulations'}, ${name}${'!'}`);
};

export default getGeneralLogic;
