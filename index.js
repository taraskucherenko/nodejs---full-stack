// Utils

function createPlayerOrMob (
  name = '',
  type = '',
  damage = null,
  health = null,
  location = '',
  isPlayer = null,
  isDead = false,
) {
  return {
    name,
    type,
    damage,
    health,
    location,
    isPlayer,
    isDead,
  }
}

function getRandomDamage(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function initDamage() {
  return getRandomDamage(12, 24);
}

function reInitDamage(obj) {
  return obj.damage = initDamage();
}

function consoleLog(info) {
  return console.log(info);
}

function fullName(obj) {
  return obj.name + ' ' + obj.type
}

function initInfoAboutPlayerOrMob(obj) {
  const health = obj.health;
  const damage = obj.damage;
  const isPlayer = obj.isPlayer;

  consoleLog(`| ${isPlayer ? 'You     :' : 'Enemy   :'} ${fullName(obj)}`);
  consoleLog(`| Health  : ${health}`);
  consoleLog(`| Damage  : ${damage}`);
  consoleLog('-----------------------------------');
}

function init() {
  consoleLog('-----------------------------------');
  consoleLog(`| Location: ${player.location}`);
  consoleLog('-----------------------------------');
  initInfoAboutPlayerOrMob(player);
  initInfoAboutPlayerOrMob(mob);
}

function setHealthAfterHit(attacking, defending) {
  return defending.health -= attacking.damage
}

function hitInfo(attacking, defending) {
  consoleLog(`${fullName(attacking)} hit ${fullName(defending)} with ${attacking.damage}`);
}

function healthInfo(obj) {
  consoleLog(`In ${fullName(obj)} lefts ${obj.health}`);
}

function roundInfo(attacking, defending) {
  hitInfo(attacking, defending);
  healthInfo(defending);
  consoleLog('| -----------------------------------');
  hitInfo(defending, attacking);
  healthInfo(attacking);
  consoleLog('');
}

function setHealthZero(obj) {
  if (obj.health < 0) {
    return obj.health = 0
  }

  return obj.health
}

function isDead(obj) {
  return obj.isDead = obj.health === 0;
}

function round(iteration) {
  setHealthAfterHit(mob, player);
  setHealthAfterHit(player, mob);

  consoleLog(`---- Round ${iteration} ----------------------`);

  if (player.health > 0 && mob.health > 0) {
    roundInfo(mob, player);

    reInitDamage(player);
    reInitDamage(mob);
  }

  setHealthZero(player);
  setHealthZero(mob);

  isDead(player);
  isDead(mob);
}

const skulls = '☠ ☠ ☠';

function deadText(obj) {
  consoleLog(`${skulls} ${fullName(obj)} is dead${skulls}`)
}

function fight() {
  consoleLog('-----------------------------------');
  consoleLog(`|| Fight`);
  consoleLog('-----------------------------------');

  let iteration = 1;
  let fight = setInterval(() => {
    round(iteration);
    iteration++;

    if (player.isDead) {
      hitInfo(mob, player);
      deadText(player);
    }

    if (mob.isDead) {
      hitInfo(mob, player);
      healthInfo(player);
      consoleLog('| -----------------------------------');
      hitInfo(player, mob);
      deadText(mob);
    }

    if (player.isDead && mob.isDead) {
      hitInfo(mob, player);
      hitInfo(player, mob);
      deadText(player);
      deadText(mob);
    }

    if (!(player.health > 0 && mob.health > 0)) {
      clearInterval(fight);
    }
  }, 1500)
}

// Body


const player = createPlayerOrMob(
  'Eritarhero',
  'Warrior',
  initDamage(),
  168,
  'Elven Forest',
  true,
);

const mob = createPlayerOrMob(
  'Ogre',
  'Mage',
  initDamage(),
  124,
  'Elven Forest',
  false,
);

init();

fight();