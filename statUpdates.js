const racialStats =[0,0,0,0,0,0]
let rolledStats = [0,0,0,0,0,0]
let tempStats = [0,0,0,0,0,0];
let tempHolder = 0;

function racialModifiers(){
    if(race == "Dwarf"){
        racialStats[2] =2;
        racialStats[5] =-2;
        }
    else if(race == "Elf"){
        racialStats[1]=2;
        racialStats[2]=-2;
    }
    else if(race == "Gnome"){
        racialStats[0]=-2;
        racialStats[2]=2;
    }
    else if(race == "Half-Orc"){
        racialStats[0]=2;
        racialStats[3]=-2;
        racialStats[5]=-2;
    }
    else if(race == "Halfling"){
        racialStats[0]=-2;
        racialStats[1]=2;
    }
}

function rollStatD20() {
    rolledStats = [0,0,0,0,0,0];
  for(let i = 0; i < rolledStats.length; i++){
    rolledStats[i] = Math.floor(Math.random() * 20)+4;
    if(rolledStats[i] > 20)
        rolledStats[i] = 20;
  }
      const skillsId = document.getElementById('skillsId');
      const skillsRemainingPoints = document.getElementById('skillsRemainingPoints');
      skillsRemainingPoints.removeAttribute('hidden');
      skillsId.removeAttribute('hidden');
      populateStats();
      statModifiers();
      startingPoints();
}
function rollStatD6(){
  const statArrayD6 = [0,0,0,0];
  for(let i=0; i < statArrayD6.length; i++){
  	statArrayD6[i] = Math.floor(Math.random() * 6) +1;
  }
    statArrayD6.sort();
  	return statArrayD6[1]+statArrayD6[2]+statArrayD6[3];
}
function setStatsD6(){
    rolledStats = [0,0,0,0,0,0];
    for(let i = 0; i < rolledStats.length; i++){
        rolledStats[i] = rollStatD6();
    }
    const skillsId = document.getElementById('skillsId');
    skillsId.removeAttribute('hidden');
    populateStats();
    statModifiers();
    startingPoints();
}

function populateStats(){
    const str = document.getElementById('strtext');
    const dex = document.getElementById('dextext');
    const con = document.getElementById('context');
    const int = document.getElementById('inttext');
    const wis = document.getElementById('wistext');
    const cha = document.getElementById('chatext');
    rolledStats = rolledStats.sort(function(a, b){return a - b});
    if(chosenClass == "Barbarian")
        barbarianStats();
    else if(chosenClass == "Bard")
        bardStats();
    else if(chosenClass == "Cleric")
        clericStats();
    else if(chosenClass == "Druid")
        druidStats();
    else if(chosenClass == "Fighter")
        fighterStats();
    else if(chosenClass == "Monk")
        monkStats();
    else if(chosenClass == "Paladin")
        paladinStats();
    else if(chosenClass == "Ranger")
        rangerStats();
    else if(chosenClass == "Rogue")
        rogueStats();
    else if(chosenClass == "Sorcerer")
        sorcererStats();
    else if(chosenClass == "Wizard")
        wizardStats();

    str.textContent = rolledStats[0];
    dex.textContent = rolledStats[1];
    con.textContent = rolledStats[2];
    int.textContent = rolledStats[3];
    wis.textContent = rolledStats[4];
    cha.textContent = rolledStats[5];

    startingPoints();
    changeSkillsForClass();
    let explainSkillsId = document.getElementById('explainSkillsId');
    explainSkillsId.removeAttribute('hidden');
}
function barbarianStats(){
    tempStats[2] = rolledStats[5];
    tempStats[0] = rolledStats[4];
    tempStats[1] = rolledStats[3];
    tempStats[4] = rolledStats[2];
    tempStats[3] = rolledStats[1];
    tempStats[5] = rolledStats[0];
    rolledStats = tempStats;
}
function bardStats(){
    tempStats[5] = rolledStats[5];
    tempStats[3] = rolledStats[4];
    tempStats[4] = rolledStats[3];
    tempStats[2] = rolledStats[2];
    tempStats[0] = rolledStats[1];
    tempStats[1] = rolledStats[0];
    rolledStats = tempStats;
}
function clericStats(){
    tempStats[4] = rolledStats[5];
    tempStats[5] = rolledStats[4];
    tempStats[2] = rolledStats[3];
    tempStats[3] = rolledStats[2];
    tempStats[1] = rolledStats[1];
    tempStats[0] = rolledStats[0];
    rolledStats = tempStats;
}
function druidStats(){
    tempStats[4] = rolledStats[5];
    tempStats[1] = rolledStats[4];
    tempStats[2] = rolledStats[3];
    tempStats[5] = rolledStats[2];
    tempStats[3] = rolledStats[1];
    tempStats[0] = rolledStats[0];
    rolledStats = tempStats;
}
function fighterStats(){
    tempStats[0] = rolledStats[5];
    tempStats[2] = rolledStats[4];
    tempStats[1] = rolledStats[3];
    tempStats[4] = rolledStats[2];
    tempStats[3] = rolledStats[1];
    tempStats[5] = rolledStats[0];
    rolledStats = tempStats;
}
function monkStats(){
    tempStats[1] = rolledStats[5];
    tempStats[4] = rolledStats[4];
    tempStats[2] = rolledStats[3];
    tempStats[0] = rolledStats[2];
    tempStats[3] = rolledStats[1];
    tempStats[5] = rolledStats[0];
    rolledStats = tempStats;
}
function paladinStats(){
    tempStats[0] = rolledStats[5];
    tempStats[5] = rolledStats[4];
    tempStats[2] = rolledStats[3];
    tempStats[1] = rolledStats[2];
    tempStats[4] = rolledStats[1];
    tempStats[3] = rolledStats[0];
    rolledStats = tempStats;
}
function rangerStats(){
    tempStats[0] = rolledStats[5];
    tempStats[1] = rolledStats[4];
    tempStats[2] = rolledStats[3];
    tempStats[4] = rolledStats[2];
    tempStats[5] = rolledStats[1];
    tempStats[3] = rolledStats[0];
    rolledStats = tempStats;
}
function rogueStats(){
    tempStats[1] = rolledStats[5];
    tempStats[5] = rolledStats[4];
    tempStats[2] = rolledStats[3];
    tempStats[3] = rolledStats[2];
    tempStats[4] = rolledStats[1];
    tempStats[0] = rolledStats[0];
    rolledStats = tempStats;
}
function sorcererStats(){
    tempStats[2] = rolledStats[5];
    tempStats[3] = rolledStats[4];
    tempStats[4] = rolledStats[3];
    tempStats[1] = rolledStats[2];
    tempStats[5] = rolledStats[1];
    tempStats[0] = rolledStats[0];
    rolledStats = tempStats;
}
function wizardStats(){
    tempStats[3] = rolledStats[5];
    tempStats[2] = rolledStats[4];
    tempStats[1] = rolledStats[3];
    tempStats[4] = rolledStats[2];
    tempStats[0] = rolledStats[1];
    tempStats[5] = rolledStats[0];
    rolledStats = tempStats;
}

function statModifiers(){
    const strMod = document.getElementById("strMod");
    const dex = document.getElementById('dexMod');
    const con = document.getElementById('conMod');
    const int = document.getElementById('intMod');
    const wis = document.getElementById('wisMod');
    const cha = document.getElementById('chaMod');
    if(rolledStats[0] >= 10)
        strMod.textContent = "+" + parseInt((rolledStats[0] - 10) / 2 );
    else
        strMod.textContent = 0;
    if(rolledStats[1] >= 10)
        dexMod.textContent = "+" + parseInt((rolledStats[1] - 10) / 2 );
    else
        dexMod.textContent = 0;
    if(rolledStats[2] >= 10)
        conMod.textContent = "+" + parseInt((rolledStats[2] - 10) / 2 );
    else
        conMod.textContent = 0;
    if(rolledStats[3] >= 10)
        intMod.textContent = "+" + parseInt((rolledStats[3] - 10) / 2 );
    else
        intMod.textContent = 0;
    if(rolledStats[4] >= 10)
        wisMod.textContent = "+" + parseInt((rolledStats[4] - 10) / 2 );
    else
        wisMod.textContent = 0;
    if(rolledStats[5] >= 10)
        chaMod.textContent = "+" + parseInt((rolledStats[5] - 10) / 2 );
    else
        chaMod.textContent = 0;
}

function startingPoints(){

    resetSkillPoints();
    if(chosenClass == "Barbarian" || chosenClass == "Bard"|| chosenClass == "Druid" || chosenClass == "Monk"
    || chosenClass == "Ranger"){
        const remainingPoints = document.getElementById("remainingPoints");
        const int = document.getElementById('intMod');
        let intPoints = parseInt(int.textContent);
        if(race == "Human")
            remainingPoints.textContent = ((intPoints+4)*4)+4;
        else
            remainingPoints.textContent = ((intPoints+4)*4);
    }
    else if(chosenClass == "Cleric" || chosenClass == "Fighter" || chosenClass == "Paladin"||chosenClass == "Sorcerer"
    ||chosenClass == "Wizard"){
        const remainingPoints = document.getElementById("remainingPoints");
        const int = document.getElementById('intMod');
        let intPoints = parseInt(int.textContent);
        if(race == "Human")
            remainingPoints.textContent = ((intPoints+2)*4)+4;
        else
             remainingPoints.textContent = ((intPoints+2)*4);
    }
    else if(chosenClass == "Rogue"){
        const remainingPoints = document.getElementById("remainingPoints");
        const int = document.getElementById('intMod');
        let intPoints = parseInt(int.textContent);
        if(race == "Human")
            remainingPoints.textContent = ((intPoints+8)*4)+4;
        else
            remainingPoints.textContent = ((intPoints+8)*4);
    }
}