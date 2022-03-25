import readlineSync from 'readline-sync';

const greetings = () => {
  const name = readlineSync.question('May I have your name? ');
  const hello = (`${'Hello'}, ${name}${'!'}`);
  return hello;
};

export default greetings;
