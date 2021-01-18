const characterName = 'Eritarhero';
const characterClass = 'Warrior';
let characterLocation = 'Elven Forest';
let characterHealth = 168;
let characterDamage = 4;

const mobName = 'Ogre';
const mobClass = 'Mage';
const mobHealth = 124;
const mobDamage = 2;

let isCharacterDead = false;
let isAlliancePlayerNear  = false;

console.log(`
  You: ${characterName}
  Class: ${characterClass}
  Health: ${characterHealth} hp
  Damage: ${characterDamage} dmg
  Location: ${characterLocation}
  || ============================
  Enemy: ${mobName}
  Class: ${mobClass}
  Health: ${mobHealth} hp
  Damage: ${mobDamage} dmg
  || ============================
  || Fight
  || ============================
  || ----------------------------
  ${mobName} ${mobClass} hit ${characterName} with ${mobDamage} dmg
  ${characterName} Health: ${characterHealth - mobDamage}
  || ----------------------------
  ${characterName} hit ${mobName} ${mobClass} with ${mobDamage} dmg
  ${mobName} ${mobClass} Health: ${mobHealth - characterDamage}
`)