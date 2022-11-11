let changeSkillPoints;

function plusSkill(id){
     const skill = document.getElementById(id);
     const remainingPoints = document.getElementById("remainingPoints");
     let pointsLeft = parseInt(remainingPoints.textContent);
     let oldScore = parseInt(skill.textContent);
     if(pointsLeft >=1){
        skill.textContent = oldScore+1;
        changeRemainingPointsMinus();
     }
}

function minusSkill(id){
     const skill = document.getElementById(id);
     let oldScore = parseInt(skill.textContent);
     if(oldScore >=1){
        skill.textContent = oldScore-1;
        changeRemainingPointsPlus();
     }
}

function changeRemainingPointsPlus(){
    const remainingPoints = document.getElementById("remainingPoints");
    let oldPoints = parseInt(remainingPoints.textContent);
    remainingPoints.textContent = oldPoints+1;
}
function changeRemainingPointsMinus(){
    const remainingPoints = document.getElementById("remainingPoints");
    let oldPoints = parseInt(remainingPoints.textContent);
    remainingPoints.textContent = oldPoints-1;
}

function resetSkillPoints(){
    let alchemyPoints = document.getElementById("alchemyPoints");
    let animalEmpathyPoints = document.getElementById("animalEmpathyPoints");
    let appraisePoints = document.getElementById("appraisePoints");
    let balancePoints = document.getElementById("balancePoints");
    let bluffPoints = document.getElementById("bluffPoints");
    let climbPoints = document.getElementById("climbPoints");
    let craftPoints = document.getElementById("craftPoints");
    let concentrationPoints = document.getElementById("concentrationPoints");
    let decipherScriptPoints = document.getElementById("decipherScriptPoints");
    let diplomacyPoints = document.getElementById("diplomacyPoints");
    let disableDevicePoints = document.getElementById("disableDevicePoints");
    let disguisePoints = document.getElementById("disguisePoints");
    let escapeArtistPoints = document.getElementById("escapeArtistPoints");
    let forgeryPoints = document.getElementById("forgeryPoints");
    let gatherInformationPoints = document.getElementById("gatherInformationPoints");
    let handleAnimalPoints = document.getElementById("handleAnimalPoints");
    let healPoints = document.getElementById("healPoints");
    let hidePoints = document.getElementById("hidePoints");
    let innuendoPoints = document.getElementById("innuendoPoints");
    let intimidatePoints = document.getElementById("intimidatePoints");
    let intuitDirectionPoints = document.getElementById("intuitDirectionPoints");
    let jumpPoints = document.getElementById("jumpPoints");
    let knowledgeArcanaPoints = document.getElementById("knowledgeArcanaPoints");
    let knowledgeReligionPoints = document.getElementById("knowledgeReligionPoints");
    let knowledgeNaturePoints = document.getElementById("knowledgeNaturePoints");
    let knowledgeAllSkillsPoints = document.getElementById("knowledgeAllSkillsPoints");
    let listenPoints = document.getElementById("listenPoints");
    let moveSilentlyPoints = document.getElementById("moveSilentlyPoints");
    let openLockPoints = document.getElementById("openLockPoints");
    let performPoints = document.getElementById("performPoints");
    let pickPocketPoints = document.getElementById("pickPocketPoints");
    let professionPoints = document.getElementById("professionPoints");
    let readLipsPoints = document.getElementById("readLipsPoints");
    let ridePoints = document.getElementById("ridePoints");
    let scryPoints = document.getElementById("scryPoints");
    let searchPoints = document.getElementById("searchPoints");
    let senseMotivePoints = document.getElementById("senseMotivePoints");
    let speakLanguagePoints = document.getElementById("speakLanguagePoints");
    let spellcraftPoints = document.getElementById("spellcraftPoints");
    let spotPoints = document.getElementById("spotPoints");
    let swimPoints = document.getElementById("swimPoints");
    let tumblePoints = document.getElementById("tumblePoints");
    let useMagicDevicePoints = document.getElementById("useMagicDevicePoints");
    let useRopePoints = document.getElementById("useRopePoints");
    let wildernessLorePoints = document.getElementById("wildernessLorePoints");

    alchemyPoints.textContent = 0;
    animalEmpathyPoints.textContent = 0;
    appraisePoints.textContent = 0;
    balancePoints.textContent = 0;
    bluffPoints.textContent = 0;
    climbPoints.textContent = 0;
    craftPoints.textContent = 0;
    concentrationPoints.textContent = 0;
    decipherScriptPoints.textContent = 0;
    diplomacyPoints.textContent = 0;
    disableDevicePoints.textContent = 0;
    disguisePoints.textContent = 0;
    escapeArtistPoints.textContent = 0;
    forgeryPoints.textContent = 0;
    gatherInformationPoints.textContent = 0;
    handleAnimalPoints.textContent = 0;
    healPoints.textContent = 0;
    hidePoints.textContent = 0;
    innuendoPoints.textContent = 0;
    intimidatePoints.textContent = 0;
    intuitDirectionPoints.textContent = 0;
    jumpPoints.textContent = 0;
    knowledgeArcanaPoints.textContent = 0;
    knowledgeReligionPoints.textContent = 0;
    knowledgeNaturePoints.textContent = 0;
    knowledgeAllSkillsPoints.textContent = 0;
    listenPoints.textContent = 0;
    moveSilentlyPoints.textContent = 0;
    openLockPoints.textContent = 0;
    performPoints.textContent = 0;
    pickPocketPoints.textContent = 0;
    professionPoints.textContent = 0;
    readLipsPoints.textContent = 0;
    ridePoints.textContent = 0;
    scryPoints.textContent = 0;
    searchPoints.textContent = 0;
    senseMotivePoints.textContent = 0;
    speakLanguagePoints.textContent = 0;
    spellcraftPoints.textContent = 0;
    spotPoints.textContent = 0;
    swimPoints.textContent = 0;
    tumblePoints.textContent = 0;
    useMagicDevicePoints.textContent = 0;
    useRopePoints.textContent = 0;
    wildernessLorePoints.textContent = 0;
}