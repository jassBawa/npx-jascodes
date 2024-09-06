#!/usr/bin/env node

const figlet = require('figlet');
const gradient = require('gradient-string');
const readline = require('readline');

console.clear();

// Create a colorful gradient for the main title
const titleGradient = gradient('cyan', 'magenta', 'yellow');

// Generate the main title using figlet with a bolder font
figlet.text(
  'JasCodes',
  {
    font: 'Big', // Bolder and cooler font
    horizontalLayout: 'default',
    verticalLayout: 'default',
  },
  function (err, data) {
    if (err) {
      console.error('Something went wrong with figlet:');
      console.error(err);
      return;
    }
    console.log(titleGradient(data));
    printInfo();
  }
);

async function printInfo() {
  // Dynamically import chalk and boxen modules
  const chalk = (await import('chalk')).default;
  const boxen = (await import('boxen')).default;

  const separator = chalk.hex('#F67280')('\n' + '─'.repeat(60) + '\n');

  const info = `
${chalk.bold.hex('#2C3E50').bgCyanBright('  Name:     ')} ${chalk.cyanBright(
    'Jaspreet Bawa'
  )}
${chalk.bold.hex('#34495E').bgGreenBright('  Status:   ')} ${chalk.red(
    '🧃'
  )} ${chalk.greenBright('Developer from heart')}
${chalk.bold.hex('#2980B9').bgBlueBright('  GitHub:   ')} ${chalk.blueBright(
    'https://github.com/jassBawa'
  )}
${chalk.bold
  .hex('#8E44AD')
  .bgMagentaBright('  Website:  ')} ${chalk.magentaBright(
    'https://jassbawa-portfolio.vercel.app/'
  )}
${chalk.bold.hex('#F1C40F').bgYellowBright('  Resume:  ')} ${chalk.yellowBright(
    'https://drive.google.com/file/d/1uLiYQ_zr_4iqx68MK6tYUmgPRBp_XfiM/'
  )}

${chalk.bgWhiteBright.black.bold(' Skills: ')}

${chalk.hex('#F39C12')('▸')} ${chalk.cyan(
    'Languages:'
  )}    JavaScript, TypeScript, Python
${chalk.hex('#F39C12')('▸')} ${chalk.cyan('Frameworks:')}   React.js, Next.js
${chalk.hex('#F39C12')('▸')} ${chalk.cyan(
    'Technologies:'
  )} Node.js, Express.js, Prisma, Kafka
${chalk.hex('#F39C12')('▸')} ${chalk.cyan(
    'Databases:'
  )}    MongoDB, PostgreSQL, SQL, Pinecone
${chalk.hex('#F39C12')('▸')} ${chalk.cyan('DevOps:')}       Docker, Postman
${chalk.hex('#F39C12')('▸')} ${chalk.cyan(
    'Tools:'
  )}        Git, GitHub, Firebase

${separator}
${chalk.bold("💼  Yes, I'm actively looking for new opportunities!")}
${separator}

${chalk.bgBlack.white.dim(
  "Thanks for checking out my CLI! Press 'Enter' to exit. 🥰🚀"
)}
`;

  console.log(
    boxen(info, {
      padding: 1,
      margin: 1,
      borderStyle: 'double',
      borderColor: 'cyanBright',
      backgroundColor: 'black',
    })
  );

  // Wait for the user to press Enter before exiting
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`${chalk.green('Press Enter to exit...')}`, () => {
    rl.close();
    console.log(chalk.yellowBright('Goodbye! 🚀'));
  });
}
