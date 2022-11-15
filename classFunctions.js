let chosenClass = "";
const classButtons = document.getElementById('class-buttons-id');

function barbarian(){
    chosenClass = "Barbarian";
    confirmClassChoice();
    d12HitPoints();
}
function bard(){
    chosenClass = "Bard";
    confirmClassChoice();
    d6HitPoints();
}
function cleric(){
    chosenClass = "Cleric";
    confirmClassChoice();
    d8HitPoints();
}
function druid(){
    chosenClass = "Druid";
    confirmClassChoice();
    d8HitPoints();
}
function fighter(){
    chosenClass = "Fighter";
    confirmClassChoice();
    d10HitPoints();
}
function monk(){
    chosenClass = "Monk";
    confirmClassChoice();
    d8HitPoints();
}
function paladin(){
    chosenClass = "Paladin";
    confirmClassChoice();
    d10HitPoints();
}
function ranger(){
    chosenClass = "Ranger";
    confirmClassChoice();
    d10HitPoints();
}
function rogue(){
    chosenClass = "Rogue";
    confirmClassChoice();
    d6HitPoints();
}
function sorcerer(){
    chosenClass = "Sorcerer";
    confirmClassChoice();
    d4HitPoints();
}
function wizard(){
    chosenClass = "Wizard";
    confirmClassChoice();
    d4HitPoints();
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
    let barbarianlabel = document.getElementById('barbarianlabel')
    let bardlabel = document.getElementById('bardlabel')
    let sorlabel = document.getElementById('sorcererlabel')
    let wizlabel = document.getElementById('wizardlabel')
    let fightlabel = document.getElementById('fighterlabel')
    let roglabel = document.getElementById('roguelabel')
    let clerlabel = document.getElementById('clericlabel')
    let monklabel = document.getElementById('monklabel')
    let pallabel = document.getElementById('paladinlabel')
    let ranglabel = document.getElementById('rangerlabel')
    let druidlabel = document.getElementById('druidlabel')

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
    barbarianlabel.parentNode.removeChild(barbarianlabel);
    bardlabel.parentNode.removeChild(bardlabel);
    sorlabel.parentNode.removeChild(sorlabel);
    wizlabel.parentNode.removeChild(wizlabel);
    fightlabel.parentNode.removeChild(fightlabel);
    roglabel.parentNode.removeChild(roglabel);
    monklabel.parentNode.removeChild(monklabel);
    pallabel.parentNode.removeChild(pallabel);
    ranglabel.parentNode.removeChild(ranglabel);
    druidlabel.parentNode.removeChild(druidlabel);
    clerlabel.parentNode.removeChild(clerlabel);

    return false;
}