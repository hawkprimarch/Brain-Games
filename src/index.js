import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
const hello = (`${'Hello'}, ${name}${'!'}`);
console.log(hello);

//FIRST GAME

export const firstGameRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const getRandomNum = (min = 1, max = 20) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomNumToUser = () => {
  const randomNum = getRandomNum();
  const rigthResult = (randomNum % 2 === 0) ? 'yes' : 'no';
  const question = (`${'Question: '}${randomNum}`);
  return [rigthResult, question];
};

export const gameOne = (b = 3) => {
  for (let i = 0; i < b; i += 1) {
    const massive = randomNumToUser();
    const [x, y] = massive;
    console.log(y);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== x) {
      console.log(`'${userAnswer}' ${'is wrong answer ;(. Correct answer was'} '${x}'.`);
      console.log(`${"Let's try again, "}${name}${'!'}`);
      return;
    } console.log('Correct!');
  } console.log(`${'Congratulations'}, ${name}${'!'}`);
};

//END

//SECOND GAME

export const secondGameRules = () => {
  console.log('What is the result of the expression?');
};
export const getRandomAction = (a = ['+','-','*']) => {
return a[Math.floor(Math.random()*a.length)];
};

export const getRandomExample = (a = getRandomNum(), b = getRandomNum(), c = getRandomAction()) => {
  let result = 0
  let massiveResult = [];
  if (c === '+') {
    result = a + b;
    massiveResult = `${a} ${'+'} ${b}`;
  } if (c === '-') {
    result = a - b;
    massiveResult = [`${a} ${'-'} ${b}`];
  } if (c === '*') {
    result = a * b;
    massiveResult = [`${a} ${'*'} ${b}`];
  }
  return [result, massiveResult];
};

export const getRandomExampleToUser = () => {
  const massiveResult = getRandomExample();
  const [z, x] = massiveResult;
  const questionSecondGame = (`${'Question: '}${x}`);
  return [z, questionSecondGame];
};

export const gameTwo = (b = 3) => {
  for (let i = 0; i < b; i += 1) {
    const massiveTwo = getRandomExampleToUser();
    const [zet, det] = massiveTwo;
    console.log(det);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(zet)) {
      console.log(`'${userAnswer}' ${'is wrong answer ;(. Correct answer was'} '${zet}'.`);
      console.log(`${"Let's try again, "}${name}${'!'}`);
      return;
    } console.log('Correct!');
  } console.log(`${'Congratulations'}, ${name}${'!'}`);
};

//END

//THIRD GAME

export const thirdGameRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

export const RandomExampleToUserThree = () => {
  let randomNum1GameThree = Math.floor(Math.random() * 100);
  let randomNum2GameThree = Math.floor(Math.random() * 100);
  function NOD () {
    for (var x = arguments[0], i = 1; i < arguments.length; i++) {
      var y = arguments[i];
      while (x && y) {
        x > y ? x %= y : y %= x;
      }
      x += y;
    }
    return x;
  };

  let correctAnswer = NOD(randomNum1GameThree, randomNum2GameThree);
  const questionGameThree = (`Question: ${randomNum1GameThree} ${randomNum2GameThree}`);
  return [questionGameThree, correctAnswer];
};

export const gameThree = (b = 3) => {
  for (let i = 0; i < b; i += 1) {
    const massiveThree = RandomExampleToUserThree();
    const [threeGameQuestion, correctAnswers] = massiveThree;
    console.log(threeGameQuestion);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(correctAnswers)) {
      console.log(`'${userAnswer}' ${'is wrong answer ;(. Correct answer was'} '${correctAnswers}'.`);
      console.log(`${"Let's try again, "}${name}${'!'}`);
      return;
    } console.log('Correct!');
  } console.log(`${'Congratulations'}, ${name}${'!'}`);
};

//END 

//FOURTH GAME

export const fourGameRules = () => {
  console.log('What number is missing in the progression?');
};

export const getRandomNumfour = (min = 1, max = 100) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const RandomExampleToUserFour = () => {
  let collection = [];
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
  const questionGameFour = (`Question: ${collection.join(' ')}`);
  return [questionGameFour, correctAnswer];
};

export const gameFour = (b = 3) => {
  for (let i = 0; i < b; i += 1) {
    const massiveFour = RandomExampleToUserFour();
    const [fourGameQuestion, correctAnswers] = massiveFour;
    console.log(fourGameQuestion);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(correctAnswers)) {
      console.log(`'${userAnswer}' ${'is wrong answer ;(. Correct answer was'} '${correctAnswers}'.`);
      console.log(`${"Let's try again, "}${name}${'!'}`);
      return;
    } console.log('Correct!');
  } console.log(`${'Congratulations'}, ${name}${'!'}`);
};

//END 

//FIFTH GAME

export const fiveGameRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

export const getRandomNumFive = (min = 0, max = 100) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const RandomExampleToUserFive = () => {
  const randomNumFive = getRandomNumFive();
  let correctAnswerFive = '';
  const isPrime = (num = randomNumFive) => {
    if (num <= 1) {
      return correctAnswerFive = 'no';
    }

    for (let counter = 2; counter < num; counter += 1) {
      if (num % counter === 0) {
        return correctAnswerFive = 'no'
      }
    } return correctAnswerFive = 'yes';
  };
  isPrime();
  const questionGameFour = (`Question: ${randomNumFive}`);
  return [questionGameFour, correctAnswerFive];
};

export const gameFive = (b = 3) => {
  for (let i = 0; i < b; i += 1) {
    const massiveFive = RandomExampleToUserFive();
    const [fiveGameQuestion, correctAnswerFiv] = massiveFive;
    console.log(fiveGameQuestion);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(correctAnswerFiv)) {
      console.log(`'${userAnswer}' ${'is wrong answer ;(. Correct answer was'} '${correctAnswerFiv}'.`);
      console.log(`${"Let's try again, "}${name}${'!'}`);
      return;
    } console.log('Correct!');
  } console.log(`${'Congratulations'}, ${name}${'!'}`);
};

//END