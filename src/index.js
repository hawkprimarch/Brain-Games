/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const hello = (`${'Hello'}, ${name}${'!'}`);
  console.log(hello);
  return name;
};

export const generalLogic = (gameRules, gameLogic) => {
  const name = greetings();
  gameRules();
  for (let i = 0; i < 3; i += 1) {
    const questionAndAnswer = gameLogic();
    const [gameQuestion, correctAnswer] = questionAndAnswer;
    console.log(gameQuestion);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' ${'is wrong answer ;(. Correct answer was'} '${correctAnswer}'.`);
      console.log(`${"Let's try again, "}${name}${'!'}`);
      return;
    } console.log('Correct!');
  } console.log(`${'Congratulations'}, ${name}${'!'}`);
};
