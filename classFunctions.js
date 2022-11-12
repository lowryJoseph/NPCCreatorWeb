let chosenClass = "";

const classButtons = document.getElementById('class-buttons-id');

function barbarian(){
    chosenClass = "Barbarian";
    if(rolledStats != [0,0,0,0,0,0])
    populateStats();
    confirmClassChoice();
}
function bard(){
    chosenClass = "Bard";
    confirmClassChoice();
}
function cleric(){
    chosenClass = "Cleric";
    confirmClassChoice();
}
function druid(){
    chosenClass = "Druid";
    confirmClassChoice();
}
function fighter(){
    chosenClass = "Fighter";
    confirmClassChoice();
}
function monk(){
    chosenClass = "Monk";
    confirmClassChoice();
}
function paladin(){
    chosenClass = "Paladin";
    confirmClassChoice();
}
function ranger(){
    chosenClass = "Ranger";
    confirmClassChoice();
}
function rogue(){
    chosenClass = "Rogue";
    confirmClassChoice();
}
function sorcerer(){
    chosenClass = "Sorcerer";
    confirmClassChoice();
}
function wizard(){
    chosenClass = "Wizard";
    confirmClassChoice();

}
function displayChosenClass(){
    const classChosenHeader = document.getElementById('classChosenHeader');
    classChosenHeader.textContent = "Chosen Class Is: "+chosenClass;
    const statDiv = document.getElementById('statDiv');
    statDiv.removeAttribute('hidden');
}
function confirmClassChoice(){
        removeClasses();
        displayChosenClass();
}
function removeClasses() {
    let barbarian = document.getElementById('barbarian')
    let bard = document.getElementById('bard')
    let sor = document.getElementById('sorcerer')
    let wiz = document.getElementById('wizard')
    let fight = document.getElementById('fighter')
    let rog = document.getElementById('rogue')
    let cler = document.getElementById('cleric')
    let monk = document.getElementById('monk')
    let pal = document.getElementById('paladin')
    let rang = document.getElementById('ranger')
    let druid = document.getElementById('druid')


    barbarian.parentNode.removeChild(barbarian);
    bard.parentNode.removeChild(bard);
    sor.parentNode.removeChild(sor);
    wiz.parentNode.removeChild(wiz);
    fight.parentNode.removeChild(fight);
    rog.parentNode.removeChild(rog);
    monk.parentNode.removeChild(monk);
    pal.parentNode.removeChild(pal);
    rang.parentNode.removeChild(rang);
    druid.parentNode.removeChild(druid);
    cler.parentNode.removeChild(cler);

    return false;
}