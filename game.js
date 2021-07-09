// Utils
function consoleLog(info) {
  return console.log(info);
}

function fullName (name, cls) {
  return `${name} ${cls}`
}

function playerFullName() {
  return fullName(playerName, playerClass)
}

function mobFullName() {
  return fullName(mobName, mobClass)
}

// Variables
const playerName = 'Eritar'
const playerClass = 'Warrior'
const playerHealth = 91
const playerDamage = 5

const mobName = 'Ogre'
const mobClass = 'Shaman'
const mobHealth = 88
const mobDamage = 3

// Body
consoleLog('-----------------------------------');
consoleLog(`| You: ${fullName(playerName, playerClass)}`);
consoleLog(`| Health  : ${playerHealth}`);
consoleLog(`| Damage  : ${playerDamage}`);
consoleLog('-----------------------------------');
consoleLog(`| Enemy: ${fullName(mobName, mobClass)}`);
consoleLog(`| Health  : ${mobHealth}`);
consoleLog(`| Damage  : ${mobDamage}`);
consoleLog('-----------------------------------');
consoleLog('-----------------------------------');
consoleLog(`|| Fight`);
consoleLog('-----------------------------------');
consoleLog(`|| ----------------------------`);
consoleLog(`${mobFullName()} hit ${playerFullName()} with ${mobDamage} dmg`);
consoleLog(`${playerFullName()} Health: ${playerHealth - mobDamage}`);
consoleLog(`|| ----------------------------`);
consoleLog(`${playerFullName()} hit ${mobFullName()} with ${playerDamage} dmg`);
consoleLog(`${mobFullName()} Health: ${mobHealth - playerDamage}`);
