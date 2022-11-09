let chosenClass;
const classHeader = document.getElementById('classHeader');

function barbarian(){
    chosenClass = "Barbarian";
//    confirmClassChoice();
    if(rolledStats != [0,0,0,0,0,0])
        alert("YES");
    populateStats();
}
function bard(){
    chosenClass = "Bard";
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
function fighter(){
    chosenClass = "Fighter";
    confirmClassChoice();
}
function turd(){
    chosenClass = "Turd";
    confirmClassChoice();
}
function rogue(){
    chosenClass = "Rogue";
    confirmClassChoice();
}
function displayClass(){
    classHeader.textContent = "Chosen Class Is: "+chosenClass;
}
function confirmClassChoice(){
    let confirmation = "You chose: " + chosenClass;
    if(confirm(confirmation) == true){
        removeClasses();
        displayClass();
        }
}
function removeClasses() {
    let barbarian = document.getElementById('barbarian')
    let bard = document.getElementById('bard')
    let sor = document.getElementById('sorcerer')
    let wiz = document.getElementById('wizard')
    let fight = document.getElementById('fighter')
    let rog = document.getElementById('rogue')
    let turd = document.getElementById('turd')

    barbarian.parentNode.removeChild(barbarian);
    bard.parentNode.removeChild(bard);
    sor.parentNode.removeChild(sor);
    wiz.parentNode.removeChild(wiz);
    fight.parentNode.removeChild(fight);
    rog.parentNode.removeChild(rog);
    turd.parentNode.removeChild(turd);

    return false;
}