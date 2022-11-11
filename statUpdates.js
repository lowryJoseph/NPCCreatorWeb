const racialStats =[0,0,0,0,0,0]
const rolledStats = [0,0,0,0,0,0]


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
  for(let i = 0; i < rolledStats.length; i++){
    rolledStats[i] = Math.floor(Math.random() * 20)+1;
  }
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
    for(let i = 0; i < rolledStats.length; i++){
        rolledStats[i] = rollStatD6();
    }
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
    str.textContent = rolledStats[0];
    dex.textContent = rolledStats[1];
    con.textContent = rolledStats[2];
    int.textContent = rolledStats[3];
    wis.textContent = rolledStats[4];
    cha.textContent = rolledStats[5];
    startingPoints();
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
    if(chosenClass == "Barbarian"){
        const remainingPoints = document.getElementById("remainingPoints");
        const int = document.getElementById('intMod');
        let intPoints = parseInt(int.textContent);
        remainingPoints.textContent = ((intPoints+4)*4) ;
    }
}