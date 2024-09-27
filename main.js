import lodash from 'lodash';
import chalk from 'chalk';
import { faker } from '@faker-js/faker'

const array = [1, 2, 3, 4, 4, 6, 6, ];
const uniqueNums = lodash.uniq(array);
console.log(chalk.red(uniqueNums));
console.log(chalk.yellow(uniqueNums));

console.log(chalk.blueBright("Hello, with chalk!"));

const paragraph = faker.lorem.paragraph();
console.log(paragraph);

const location = faker.location.streetAddress();
console.log(`I am located at ${location}`);