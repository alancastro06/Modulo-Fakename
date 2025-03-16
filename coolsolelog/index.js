import {femaleDogNames, randomFemaleDogName} from 'dog-names';
import chalk from 'chalk';  

export default function coolsolelog(message) {
    
    const nomeAleatorio = randomFemaleDogName();  
    
    console.log(chalk.green(`💬 Mensagem: ${message}`));  
    const casaCachorro = `
      ${chalk.red('  ____   ')}
     ${chalk.red('  /    \\   ')}
    ${chalk.red('  /      \\  ')}
   ${chalk.red('  /________\\ ')}
   ${chalk.white("  |  " + nomeAleatorio + " |")}
   ${chalk.white('  |  AuAu! |')}
   ${chalk.white('  |________|')}
    `;
    console.log(casaCachorro);
}
