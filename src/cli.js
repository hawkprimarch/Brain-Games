import readlineSync from '/home/hawk/projects/frontend-project-lvl1/readline-sync/lib/readline-sync.js';

export const greetings = () => {
    const name = readlineSync.question('May I have your name? ');
    const hello = ('Hello ' + name + '!');
    return hello;
};