#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const greetings = () => {
    const hello = (`${'Hello'}, ${name}${'!'}`);
    return hello;
  };
const name = readlineSync.question('May I have your name? ');

console.log(greetings());
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNum = (min = 1, max = 20) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomNumToUser = () => {
    const randomNum = getRandomNum();
    const rigthResult = (randomNum % 2 === 0) ? 'yes' : 'no';
    const question = ('Question: ' + randomNum);
    return [rigthResult, question];
};

const game = (b = 3) => {
  for (let i = 0; i < b; i += 1) {
  const massive = randomNumToUser();
  const [x, y] = massive;
  console.log(y)
  const userAnswer = readlineSync.question('Your answer: '); 
  if (userAnswer !== x) {
    console.log(`'${userAnswer}' ${"is wrong answer ;(. Correct answer was"} '${x}'.`)
    console.log(`${"Let's try again, "}${name}${'!'}`)
    return;
  } console.log('Correct!')
 } console.log(`${'Congratulations'}, ${name}${'!'}`)
};

game()