let race;
const heading = document.getElementById('raceHeader');
let sex;
const gender = document.getElementById('gender');

function male(){
sex = "Male";
gender.style.display = "none";
}
function female(){
sex = "Female";
gender.style.display = "none";
}
function dwarf(){
race = "Dwarf";
confirmRaceChoice();
racialModifiers();
}
function elf(){
race = "Elf";
confirmRaceChoice();
racialModifiers();
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
racialModifiers();
}
function gnome(){
race = "Gnome";
confirmRaceChoice();
racialModifiers();
}
function halfling(){
race = "Halfling";
confirmRaceChoice();
racialModifiers();
}


function displayRace(){
heading.textContent = "Chosen Race Is: "+race;
}
function confirmRaceChoice(){
        removeRaces();
        displayRace();
}
function removeRaces() {
    let heading = document.getElementById('heading');
    heading.setAttribute('hidden', true);
    let d = document.getElementById('dwarf');
    let g = document.getElementById('gnome');
    let e = document.getElementById('elf');
    let hlf = document.getElementById('halfling');
    let ho = document.getElementById('halfOrc');
    let he = document.getElementById('halfElf');
    let h = document.getElementById('human');
    let dlabel = document.getElementById('dwarflabel');
    let glabel = document.getElementById('gnomelabel');
    let elabel = document.getElementById('elflabel');
    let hlflabel = document.getElementById('halflinglabel');
    let holabel = document.getElementById('halfOrclabel');
    let helabel = document.getElementById('halfElflabel');
    let hlabel = document.getElementById('humanlabel');
    d.parentNode.removeChild(d);
    g.parentNode.removeChild(g);
    e.parentNode.removeChild(e);
    hlf.parentNode.removeChild(hlf);
    ho.parentNode.removeChild(ho);
    he.parentNode.removeChild(he);
    h.parentNode.removeChild(h);
    dlabel.parentNode.removeChild(dlabel);
    glabel.parentNode.removeChild(glabel);
    elabel.parentNode.removeChild(elabel);
    hlflabel.parentNode.removeChild(hlflabel);
    holabel.parentNode.removeChild(holabel);
    helabel.parentNode.removeChild(helabel);
    hlabel.parentNode.removeChild(hlabel);
    classButtons.removeAttribute("hidden");
    randomName();
    return false;
}

function randomName(){
    let nameChosen;
    if(race == "Dwarf"){
    let dwarfNames = [];
    let nameNumber;
        if(sex == "Female"){
             nameNumber = Math.floor(Math.random() * 9) + 1;
             dwarfNames = ["Artin", "Audhild", "Dagnal", "Diesa", "Gunnloda", "Hlin", "Ilde", "Liftrasa",
              "Sannl", "Torgga"];

         }
         else{
            nameNumber = Math.floor(Math.random() * 10) + 1;
            dwarfNames = ["Barendd", "Brottor", "Eberk", "Einkil", "Oskar", "Rurik",
             "Taklinn", "Torderk", "Traubon", "Ulfgar", "Veit"];
         }
         let surNameNumber = Math.floor(Math.random() * 9) + 1;
         const dwarfSurnames = ["Balderk", "Dankil", "Gorunn", "Holderhek", "Loderr", "Lutgehr", "Rumnaheim",
          "Strakeln", "Torunn", "Ungart"]
        nameChosen = dwarfNames[nameNumber] + " " + dwarfSurnames[surNameNumber];
    }
    else if(race == "Elf" ||  race == "Half-Elf"){
        let nameNumber;
        let elfNames = [];
        if(sex == "Female"){
            nameNumber = Math.floor(Math.random() * 11) +1;
            elfNames = ["Anastrianna", "Antinua", "Drusilia", "Felosial", "Ielenia", "Lia", "Mialee",
             "Qillathe", "Silaqui", "Vadania", "Valanthe", "Xanaphia"];
        }
        else{
            nameNumber = Math.floor(Math.random() * 10) +1;
            elfNames = ["Aramil", "Aust", "Enialis", "Heian", "Himo", "Ivellios", "Laucian", "Quarion",
             "Soverliss", "Thamior", "Tharivol"];
        }
        let surNameNumber = Math.floor(Math.random() * 9) + 1;
        const elfSurnames = ["Amastacia (Starflower)", "Amakiir (Gemflower)", "Galanodel (Moonwhisper)",
         "Holimion (Diamonddew)", "Liadon (Silverfrond)", "Meliamne (Oakenheel)", "Naïlo (Nightbreeze)",
          "Siannodel (Moonbrook)", "Ilphukiir (Gemblossom)", "Xiloscient (Goldpetal)"];
        nameChosen = elfNames[nameNumber] + " " + elfSurnames[surNameNumber];
    }
    else if(race == "Gnome"){
        let nameNumber;
        let gnomeFirstNames = [];
        if(sex == "Female"){
            nameNumber = Math.floor(Math.random() * 9) +1;;
            gnomeFirstNames = ["Bimpnottin", "Caramip", "Duvamil", "Ellywick", "Ellyjobell", "Loopmottin",
            "Mardnab", "Roywyn", "Shamil", "Waywocket"];
        }
        else{
            nameNumber = Math.floor(Math.random() * 10) +1;
            gnomeFirstNames = ["Boddynock", "Dimble", "Fonkin", "Gimble", "Glim", "Gerbo", "Jebeddo", "Namfoodle",
             "Roondar", "Seebo", "Zook"];
         }
        let surnameNumber = Math.floor(Math.random() * 9) +1;
        const gnomeSurNames = ["Beren", "Daergel", "Folkor", "Garrick", "Nackle", "Murnig", "Ningel", "Raulnor",
         "Scheppen", "Turen"];
         let nicknameNumber = Math.floor(Math.random() * 9) + 1;
         const gnomeNicknames = ["Aleslosh", "Ashhearth", "Badger", "Cloak", "Doublelock", "Filchbatter", "Fnipper",
          "Oneshoe", "Sparklegem", "Stumbleduck"];
         nameChosen = gnomeFirstNames[nameNumber] + " " + gnomeSurNames[surnameNumber] + " AKA: "
         + gnomeNicknames[nicknameNumber];
    }
    else if(race == "Half-Orc"){
        let nameNumber;
        let halfOrcNames = [];
        if(sex == "Female"){
            nameNumber = Math.floor(Math.random() * 9) +1;
            halfOrcNames = ["Baggi", "Emen", "Engong", "Myev", "Neega", "Ovak", "Ownka", "Shautha", "Vola", "Volen"];
        }
        else{
            nameNumber = Math.floor(Math.random() * 10) +1;
            halfOrcNames = ["Dench", "Feng", "Gell", "Henk", "Holg", "Imsh", "Keth", "Krusk", "Ront",
             "Shump", "Thokk"];
         }
         nameChosen = halfOrcNames[nameNumber];
    }
    else if(race == "Halfling"){
        let nameNumber;
        let halflingNames = [];
        if(sex == "Female")
        {
            nameNumber = Math.floor(Math.random() * 10) +1;
            halfingNames = ["Amaryllis", "Charmaine", "Cora", "Euphemia", "Jillian", "Lavinia", "Lidda", "Merla",
             "Portia", "Seraphina", "Verna"];
        }
        else {
            nameNumber = Math.floor(Math.random() * 9) +1;
            halflingNames = ["Alton", "Beau", "Cade", "Eldon", "Garret", "Lyle", "Milo", "Osborn", "Roscoe", "Wellby"];
        }
        let surNameNumber = Math.floor(Math.random() * 9) +1;
        halflingSurname = ["Brushgather", "Goodbarrel", "Greenbottle", "Highhill", "Hilltopple", "Leagallow",
         "Tealeaf", "Thorngage", "Tosscobble", "Underbough"];
         nameChosen = halflingNames[nameNumber] + " " + halflingSurname[surNameNumber];
    }
    else if(race == "Human")
        nameChosen = "Really? You're a human, how about Billiam McGillicutty?";
    gender.style.display = "none";
    const randomName = document.getElementById("randomName");
    randomName.removeAttribute("hidden");
    randomName.textContent = "Now known as: "+ nameChosen;
}


