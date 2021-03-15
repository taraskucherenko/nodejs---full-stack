/*
* TODO: Add critical strike and chance of critical strike
* TODO: Add DOTs for mob
* */

// Utils

const minDamagePoint = 12;
const maxDamagePoint = 24;

function Creature (name, creatureClass, health, location) {
  this.name = name;
  this.creatureClass = creatureClass;
  this.health = health;
  this.location = location;
  this.damage = setDamage();
}

function randomIntNumbers(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function setDamage(min= minDamagePoint, max = maxDamagePoint) {
  return randomIntNumbers(min, max)
}

function randomCreature(max) {
  return randomIntNumbers(0, max)
}

const alliance = [
  new Creature('Eritar', 'Warrior', 168, 'Elven Forest'),
  new Creature('Kapral', 'Hunter', 148, 'Elven Forest'),
  new Creature('Kerber', 'Paladin', 158, 'Elven Forest'),
];

const enemies = [
  new Creature('Ogre', 'Mage', 124, 'Elven Forest'),
  new Creature('Ogre', 'Warrior', 164, 'Elven Forest'),
  new Creature('Ogre', 'Shaman', 144, 'Elven Forest'),
];

const allianceLength = alliance.length;
const enemiesLength = enemies.length;

function consoleLog(info) {
  return console.log(info);
}

function displayNamePlusClass(obj) {
  return obj.name + ' ' + obj.creatureClass
}

function showInfoAboutCreature(obj) {
  const health = obj.health;
  const damage = obj.damage;

  consoleLog(`| ${displayNamePlusClass(obj)}`);
  consoleLog(`| Health  : ${health}`);
  consoleLog(`| Damage  : ${damage}`);
  consoleLog('-----------------------------------');
}

function init() {
  if (alliance.length) {
    consoleLog('-----------------------------------');
    consoleLog(`| Location: ${alliance[0].location}`);
    consoleLog('-----------------------------------');
  }

  consoleLog(`| 'Alliance'`);
  consoleLog('-----------------------------------');
  for (let i = 0; i < allianceLength; i++) {
    showInfoAboutCreature(alliance[i]);
  }

  consoleLog(`| 'Enemies'`);
  consoleLog('-----------------------------------');

  for (let i = 0; i < enemiesLength; i++) {
    showInfoAboutCreature(enemies[i]);
  }

  fight();
}

function setHealthAfterHit(attacking, defending) {
  defending.health -= attacking.damage

  if (defending.health < 0) {
    defending.health = 0
  }
}

function hitInfo(attacking, defending) {
  consoleLog(`${displayNamePlusClass(attacking)} hit ${displayNamePlusClass(defending)} with ${attacking.damage} dmg`);
}

function healthInfo(obj) {
  consoleLog(`In ${displayNamePlusClass(obj)} lefts ${obj.health} hp`);
}

function roundInfo(attacking, defending) {
  hitInfo(attacking, defending);
  healthInfo(defending);
  consoleLog('| -----------------------------------');
  hitInfo(defending, attacking);
  healthInfo(attacking);
  consoleLog('');
}

function isDead(obj) {
  return obj.health === 0;
}

const SKULLS = '☠ ☠ ☠';

function deadText(obj) {
  consoleLog(`| ---  ${SKULLS}  ${displayNamePlusClass(obj)} is dead  ${SKULLS}  --- |`)
}

function round(iteration) {
  consoleLog(`---- Round ${iteration} ----------------------`);

  let player = alliance[randomCreature(allianceLength)];
  let mob = enemies[randomCreature(enemiesLength)];

  if (isDead(player)) {
    player = alliance[randomCreature(allianceLength)];
  }

  if (isDead(mob)) {
    mob = enemies[randomCreature(enemiesLength)];
  }

  for (let i = 0; i < enemiesLength; i++) {
    setHealthAfterHit(enemies[i], player);
    roundInfo(enemies[i], player);

    if (isDead(player)) {
      break;
    }

    if (!isDead(player)) {
      player.damage = setDamage();
    }
  }

  for (let i = 0; i < allianceLength; i++) {
    setHealthAfterHit(alliance[i], mob);
    roundInfo(alliance[i], mob);

    if (isDead(mob)) {
      break;
    }

    if (!isDead(mob)) {
      mob.damage = setDamage();
    }
  }

  consoleLog('-----------------------------------');
  consoleLog(`---- End Round ${iteration} ------------------`);
  consoleLog('-----------------------------------');
}

function fight() {
  consoleLog('-----------------------------------');
  consoleLog(`|| Fight`);
  consoleLog('-----------------------------------');

  let iteration = 1;
  let fight = setInterval(() => {
    round(iteration);
    iteration++;

    // for (let i = 0; i < enemiesLength; i++) {
    //
    // }
    //
    // for (let i = 0; i < allianceLength; i++) {
    //
    // }

    // if (isDead(player)) {
    //   hitInfo(mob, player);
    //   deadText(player);
    // }
    //
    // if (isDead(mob)) {
    //   hitInfo(mob, player);
    //   healthInfo(player);
    //   consoleLog('| -----------------------------------');
    //   hitInfo(player, mob);
    //   deadText(mob);
    // }
    //
    // if (isDead(player) || isDead(mob)) {
    //   clearInterval(fight);
    // }
  }, 2500)
}

// Body

init();