const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = []; 

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth){
    let logEntry = {
        event : ev,
        value: val,
        finalMonsterHealth : monsterHealth,
        finaPlayerHealth : playerHealth
    };
    
    switch(ev){
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'Monster';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
           logEntry ={
               event : ev,
               value: val,
               target:'Monster',
               finalMonsterHealth : monsterHealth,
               finaPlayerHealth : playerHealth
            };
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry ={
                event : ev,
                value: val,
                target:'Player',
                finalMonsterHealth : monsterHealth,
                finaPlayerHealth : playerHealth
            };
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry ={
                event : ev,
                value: val,
                target: 'Player',
                finalMonsterHealth : monsterHealth,
                finaPlayerHealth : playerHealth
            };
        case LOG_EVENT_GAME_OVER:
            logEntry ={
                event : ev,
                value: val,
                finalMonsterHealth : monsterHealth,
                finaPlayerHealth : playerHealth
            };
            break;
        default:
            logEntry = {};
    }
    
    // if (ev === LOG_EVENT_PLAYER_ATTACK) {
    //     logEntry.target = 'Monster';
    // } else if(ev === LOG_EVENT_PLAYER_STRONG_ATTACK){
    //     logEntry ={
    //         event : ev,
    //         value: val,
    //         target:'Monster',
    //         finalMonsterHealth : monsterHealth,
    //         finaPlayerHealth : playerHealth
    //     };
    // }
    // else if(ev === LOG_EVENT_MONSTER_ATTACK){
    //     logEntry ={
    //         event : ev,
    //         value: val,
    //         target:'Player',
    //         finalMonsterHealth : monsterHealth,
    //         finaPlayerHealth : playerHealth
    //     };
    // }
    // else if (ev === LOG_EVENT_PLAYER_HEAL){
    //     logEntry ={
    //         event : ev,
    //         value: val,
    //         target: 'Player',
    //         finalMonsterHealth : monsterHealth,
    //         finaPlayerHealth : playerHealth
    //     };
    // }
    // else if (ev === LOG_EVENT_GAME_OVER){
    //     logEntry ={
    //         event : ev,
    //         value: val,
    //         finalMonsterHealth : monsterHealth,
    //         finaPlayerHealth : playerHealth
    //     };
    // }
    battleLog.push(logEntry);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(LOG_EVENT_MONSTER_ATTACK,playerDamage,currentMonsterHealth,currentPlayerHealth);


  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    playerHealthBar.value = currentPlayerHealth;
    alert('You would be dead, but the bonus life saved you!');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Won!');
    writeToLog(LOG_EVENT_GAME_OVER,'Player Won',currentMonsterHealth,currentPlayerHealth);
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You Lost!');
    writeToLog(LOG_EVENT_GAME_OVER,'Monster Won',currentMonsterHealth,currentPlayerHealth);
    reset();
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('Draw!');
    writeToLog(LOG_EVENT_GAME_OVER,'A Drow',currentMonsterHealth,currentPlayerHealth);
    reset();
  }
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  hasBonusLife = true;

  resetGame(chosenMaxLife);
}

function attackMonster(mode) {

    let maxDamage = mode === 'ATTACK' ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  let logEvent = mode === 'ATTACK' ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;

//   if (mode === 'ATTACK') {
//     maxDamage = ATTACK_VALUE;
//     logEvent = LOG_EVENT_PLAYER_ATTACK;
//   } else {
//     maxDamage = STRONG_ATTACK_VALUE;
//     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK
//   }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent,damage,currentMonsterHealth,currentPlayerHealth);
  endRound();
}

function attackHandler() {
  attackMonster('ATTACK');
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
  let healValue;

  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal more than your initial health.");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }

  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(LOG_EVENT_PLAYER_HEAL,healValue,currentMonsterHealth,currentPlayerHealth);
  endRound();
}

function printLogHandler(){
    // for(let i=0 ; i<battleLog.length ; i++) console.log(battleLog[i]);
    
    // i = 0;
    // while(i < battleLog.length){
    //     console.log(battleLog[i])
    //     i++;        
    // }

    i = 0;
    do{
        console.log(battleLog[i])
        i++;
    }
    while(i < battleLog.length)
    
    // for(const logEntry of battleLog) console.log(logEntry);
    for(const logEntry in battleLog) console.log(logEntry.event);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click',printLogHandler)