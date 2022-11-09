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
}