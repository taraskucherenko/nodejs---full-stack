/*
* TODO: Add critical strike and chance of critical strike
* TODO: Add DOTs for mob
* */

// Utils

const minDamagePoint = 12;
const maxDamagePoint = 24;

function createCreature (
  name = '',
  creatureClass = '',
  health = null,
  location = '',
  isPlayer = null,
) {
  return {
    name,
    creatureClass,
    health,
    location,
    isPlayer,
  }
}

function setCreatureDamage(min, max, obj) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return obj['damage'] = Math.floor(Math.random() * (max - min) + min);
}

function consoleLog(info) {
  return console.log(info);
}

function displayNamePlusClass(obj) {
  return obj.name + ' ' + obj.creatureClass
}

function showInfoAboutCreature(obj) {
  const health = obj.health;
  const damage = obj.damage;
  const isPlayer = obj.isPlayer;

  consoleLog(`| ${isPlayer ? 'You     :' : 'Enemy   :'} ${displayNamePlusClass(obj)}`);
  consoleLog(`| Health  : ${health}`);
  consoleLog(`| Damage  : ${damage}`);
  consoleLog('-----------------------------------');
}

function init() {
  setCreatureDamage(minDamagePoint, maxDamagePoint, player);
  setCreatureDamage(minDamagePoint, maxDamagePoint, mob);

  consoleLog('-----------------------------------');
  consoleLog(`| Location: ${player.location}`);
  consoleLog('-----------------------------------');
  showInfoAboutCreature(player);
  showInfoAboutCreature(mob);

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

function round(iteration) {
  setHealthAfterHit(mob, player);
  setHealthAfterHit(player, mob);

  consoleLog(`---- Round ${iteration} ----------------------`);

  if (player.health > 0 && mob.health > 0) {
    roundInfo(mob, player);

    setCreatureDamage(minDamagePoint, maxDamagePoint, player);
    setCreatureDamage(minDamagePoint, maxDamagePoint, mob);
  }
}

const SKULLS = '☠ ☠ ☠';

function deadText(obj) {
  consoleLog(`| ---  ${SKULLS}  ${displayNamePlusClass(obj)} is dead  ${SKULLS}  --- |`)
}

function fight() {
  consoleLog('-----------------------------------');
  consoleLog(`|| Fight`);
  consoleLog('-----------------------------------');

  let iteration = 1;
  let fight = setInterval(() => {
    round(iteration);
    iteration++;

    if (isDead(player)) {
      hitInfo(mob, player);
      deadText(player);
    }

    if (isDead(mob)) {
      hitInfo(mob, player);
      healthInfo(player);
      consoleLog('| -----------------------------------');
      hitInfo(player, mob);
      deadText(mob);
    }

    if (isDead(player) || isDead(mob)) {
      clearInterval(fight);
    }
  }, 1500)
}

// Body

const player = createCreature(
  'Eritrean',
  'Warrior',
  168,
  'Elven Forest',
  true,
);

const mob = createCreature(
  'Ogre',
  'Mage',
  124,
  'Elven Forest',
  false,
);

init();