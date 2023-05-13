const { exec } = require('child_process');
const { stdin, stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
  terminal: false, // stop line-by-line mode but user can't enter text manually and no need fro rl.prompt()
});

// rl.prompt();

let input = '';

rl.on('line', (line) => {
  input = input += line.trim();

  if (line.trim() == '') {
    rl.close();
  }
});

rl.on('close', () => {
  console.log(process.argv);

  let packages = input.split(',').map((line) => {
    const packageName = line.split(':')[0].trim().replace(/^"|"$/g, '');
    return packageName;
  });

  const package_manager = process.argv[2] === '--npm' ? 'npm uninstall' : 'yarn remove';

  const command = `${package_manager} ${packages.join(' ')}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Command stderr: ${stderr}`);
      return;
    }
    console.log(`Command stdout: ${stdout}`);
  });
});
