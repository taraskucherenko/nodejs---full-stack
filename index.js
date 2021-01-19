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

    if (characterHealth === 0 && mobHealth > 0) {
      isCharacterDead = true
    }

    if (characterHealth > 0 && mobHealth === 0) {
      isMobDead = true
    }

    if (characterHealth === 0 && mobHealth === 0) {
      isCharacterDead = true
      isMobDead = true
    }

    console.log(`
=== Round ${i} ============================================
`)

    if (characterHealth > 0 && mobHealth > 0) {
      console.log(`${mobName} ${mobClass} hit ${characterName} with ${mobDamage} dmg
${characterName} Health: ${characterHealth}

|| ----------------------------

${characterName} hit ${mobName} ${mobClass} with ${characterDamage} dmg
${mobName} ${mobClass} Health: ${mobHealth}`)
    }


  }

  if (isCharacterDead) {
    console.log(`
☠ ☠  ${characterClass} ${characterName} is ${deadText}
    `)
  }

  if (isMobDead) {
    console.log(`
☠ ☠  ${mobName} ${mobClass} is ${deadText}
    `)
  }

  if (isCharacterDead && isMobDead) {
    console.log(`
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