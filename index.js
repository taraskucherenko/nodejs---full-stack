const characterName = 'Eritarhero';
const characterClass = 'Warrior';
const warrior = `${characterClass} ${characterName}`
let characterLocation = 'Elven Forest';
let characterHealth = 168;
let characterDamage = getRandomDamage(12, 42);

let isCharacterDead = false;
let isAlliancePlayerNear  = false;

const mobName = 'Ogre';
const mobClass = 'Mage';
const mob = `${mobName} ${mobClass}`
let mobHealth = 124;
let mobDamage = getRandomDamage(12, 42);
let isMobDead = false;

const deadText = 'dead  ☠ ☠';

function getRandomDamage(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function Init() {
  console.log(`
-----------------------------------
| Location: ${characterLocation}
-----------------------------------
| You     : ${warrior}
| Health  : ${characterHealth} hp
| Damage  : ${characterDamage} dmg
-----------------------------------
| Enemy   : ${mob}
| Health  : ${mobHealth} hp
| Damage  : ${mobDamage} dmg
-----------------------------------`)
}

function Round(iteration) {
  characterHealth -= mobDamage;
  mobHealth -= characterDamage;

  console.log(`
---- Round ${iteration} -------------------------------------------`)

  if (characterHealth > 0 && mobHealth > 0) {
    console.log(
`${mob} hit ${warrior} with ${mobDamage} dmg
In ${warrior} lefts ${characterHealth} hp
| -----------------------------------------------------------------
${warrior} hit ${mob} with ${characterDamage} dmg
In ${mob} lefts ${mobHealth} hp`
    );

    characterDamage = getRandomDamage(12, 42);
    mobDamage = getRandomDamage(12, 42);
  }

  if (characterHealth < 0) {
    characterHealth = 0;
  }

  if (mobHealth < 0) {
    mobHealth = 0;
  }

  isCharacterDead = characterHealth === 0
  isMobDead = mobHealth === 0
}

function Fight() {
  console.log(`
|| --------------------------------
|| Fight
|| --------------------------------`)
  let iteration = 1;
  let fight = setInterval(() => {
    Round(iteration);
    iteration++;

    if (isCharacterDead) {
      console.log(`
${mob} hit ${warrior} with ${mobDamage} dmg
☠ ☠  ${warrior} is ${deadText}
    `)
    }

    if (isMobDead) {
      console.log(`
${mob} hit ${warrior} with ${mobDamage} dmg
In ${warrior} lefts ${characterHealth} hp
| -----------------------------------------------------------------
${warrior} hit ${mob} with ${characterDamage} dmg
☠ ☠  ${mob} is ${deadText}
    `)
    }

    if (isCharacterDead && isMobDead) {
      console.log(`
${mob} hit ${warrior} with ${mobDamage} dmg
${warrior} hit ${mob} with ${characterDamage} dmg
☠ ☠  ${warrior} and ${mob} are ${deadText}
    `)
    }

    if (!(characterHealth > 0 && mobHealth > 0)) {
      clearInterval(fight);
    }
  }, 1500)
}

Init();

Fight();