function fantasyname() {

    // arrays for random names
    var firstName = [
                    'Akra', 'Aasathra', 'Antrara', 'Arava', 'Biri', 'Blendaeth', 'Burana', 'Chassath', 'Daar', 'Dentratha', 'Doudra', 'Driindar', 
                    'Eggren', 'Farideh', 'Findex', 'Furrele', 'Gesrethe', 'Gilkass', 'Harann', 'Havilar', 'Hethress', 'Hillanot', 'Jaxi', 'Jezean',
                    'Jheri','Kadana', 'Kava', 'Korinn', 'Megren', 'Mijira', 'Mishann', 'Nala', 'Nuthra', 'Perra', 'Pogranix', 'Pyxrin', 'Quespa',
                    'Raiann', 'Rezena', 'Ruloth', 'Saphara', 'Savaran', 'Sora', 'Surina', 'Synthrin', 'Tatyan', 'Thava', 'Uadjit', 'Vezera', 'Zykroff'];
    var secondName = [
                    'Akambherylliax', 'Argenthrixus', 'Baharoosh', 'Beryntolthropal', 'Bhenkumbyrznaax', 'Caavylteradyn', 'Chumbyxirinnish', 'Clethtinthiallor', 
                    'Daardendrian', 'Delmirev', 'Dhyrktelonis', 'Ebynichtomonis', 'Esstyrlynn', 'Fharngnarthnost', 'Ghaallixirn', 'Grrrmmballhyst', 'Gygaszzlyshrift', 
                    'Hashphronyxadyn', 'Hshhsstoroth', 'Imbixtellrhyst', 'Jerynomonis', 'Jharthraxyn', 'Kerrhylon', 'Kimbatuul', 'Lhamboldennish', 'Linxakasendalor', 
                    'Mohradyllion', 'Mystan', 'Nemmonis', 'Norixius', 'Ophinshtalajiir', 'Orexijandilin', 'Pfaphnyrennish', 'Phrahdrandon', 'Pyraxtallinost', 
                    'Qyxpahrgh', 'Raghthroknaar', 'Shestendeliath', 'Skaarzborroosh', 'Sumnarghthrysh', 'Tiammanthryllish', 'Turnuroth', 'Umbyrphrael', 'Vandondalor', 
                    'Verthisathurgiesh', 'Wivvyrholdalphiax', 'Qystongjiir', 'Xephyrbahnor', 'Yarjerit', 'Zzzxaaxthroth'];
   
    // combining names to get a randomized sailor guardian title
    var fullname = firstName[Math.floor(Math.random() * firstName.length)] + ' ' + secondName[Math.floor(Math.random() * secondName.length)];

    genname.textContent = fullname;    
}


fantasyname();
