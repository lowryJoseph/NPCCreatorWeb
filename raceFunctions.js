let race;
const heading = document.getElementById('raceHeader');

function dwarf(){
race = "Dwarf";
confirmRaceChoice();
}
function elf(){
race = "Elf";
confirmRaceChoice();
}
function human(){
race = "Human";
confirmRaceChoice();
}
function halfElf(){
race = "Half-Elf";
confirmRaceChoice();
}
function halfOrc(){
race = "Half-Orc";
confirmRaceChoice();
}
function gnome(){
race = "Gnome";
confirmRaceChoice();
}
function halfling(){
race = "Halfling";
confirmRaceChoice();
}


function displayRace(){
heading.textContent = "Chosen Race Is: "+race;
}
function confirmRaceChoice(){
    let confirmation = "You chose: " + race;
    if(confirm(confirmation) == true){
        removeRaces();
        displayRace();
        }
}
function removeRaces() {
    let d = document.getElementById('dwarf')
    let g = document.getElementById('gnome')
    let e = document.getElementById('elf')
    let hlf = document.getElementById('halfling')
    let ho = document.getElementById('halfOrc')
    let he = document.getElementById('halfElf')
    let h = document.getElementById('human')

    d.parentNode.removeChild(d);
    g.parentNode.removeChild(g);
    e.parentNode.removeChild(e);
    hlf.parentNode.removeChild(hlf);
    ho.parentNode.removeChild(ho);
    he.parentNode.removeChild(he);
    h.parentNode.removeChild(h);

    return false;
}