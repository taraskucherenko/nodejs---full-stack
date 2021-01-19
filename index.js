const characterName = 'Eritarhero';
const characterClass = 'Warrior';
let characterLocation = 'Elven Forest';
let characterHealth = 168;
let characterDamage = 26;

let isCharacterDead = false;
let isAlliancePlayerNear  = false;

const mobName = 'Ogre';
const mobClass = 'Mage';
let mobHealth = 124;
const mobDamage = 19;
let isMobDead = false;

const deadText = 'dead  ☠ ☠';

function fight() {
  console.log(`
|| ============================
|| Fight
|| ============================`)
  for (let i = 1; characterHealth > 0 && mobHealth > 0; i++) {
    characterHealth -= mobDamage;
    mobHealth -= characterDamage;

    if (characterHealth < 0) {
      characterHealth = 0;
    }

    if (mobHealth < 0) {
      mobHealth = 0;
    }

    isCharacterDead = characterHealth === 0
    isMobDead = mobHealth === 0

    console.log(`
=== Round ${i} ============================================
`)

    if (characterHealth > 0 && mobHealth > 0) {
      console.log(`${mobName} ${mobClass} hit ${characterName} with ${mobDamage} dmg
${characterClass} ${characterName} Health: ${characterHealth}

|| ----------------------------

${characterClass} ${characterName} hit ${mobName} ${mobClass} with ${characterDamage} dmg
${mobName} ${mobClass} Health: ${mobHealth}`)
    }


  }

  if (isCharacterDead) {
    console.log(`
${mobName} ${mobClass} hit ${characterName} with ${mobDamage} dmg
☠ ☠  ${characterClass} ${characterName} is ${deadText}
    `)
  }

  if (isMobDead) {
    console.log(`
${characterClass} ${characterName} hit ${mobName} ${mobClass} with ${characterDamage} dmg
☠ ☠  ${mobName} ${mobClass} is ${deadText}
    `)
  }

  if (isCharacterDead && isMobDead) {
    console.log(`
${mobName} ${mobClass} hit ${characterName} with ${mobDamage} dmg
${characterClass} ${characterName} hit ${mobName} ${mobClass} with ${characterDamage} dmg
☠ ☠  ${characterClass} ${characterName} and ${mobName} ${mobClass} are ${deadText}
    `)
  }
}


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
Damage: ${mobDamage} dmg`)

fight()