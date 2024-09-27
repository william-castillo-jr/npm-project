import lodash from 'lodash';
import chalk from 'chalk';

const array = [1, 2, 3, 4, 4, 6, 6, 9];
const uniqueNums = lodash.uniq(array);
console.log(chalk.yellow(uniqueNums));

console.log(chalk.blueBright("Hello, with chalk!"));