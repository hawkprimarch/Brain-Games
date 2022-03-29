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
    return a[Math.floor(Math.random()*a.length)]
}

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
    };
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

    let correctAnswer = NOD(randomNum1GameThree, randomNum2GameThree)
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