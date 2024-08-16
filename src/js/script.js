"use strict";


const birthYear = prompt('Введіть ваш рік народження:');
const city = prompt('В якому місті ви живете?');
const sport = prompt('Який ваш улюблений вид спорту?');


function calculateAge(year) {
    return new Date().getFullYear() - parseInt(year);
}


if (birthYear === null || city === null || sport === null) {
    let missingField = '';
    if (birthYear === null) missingField = 'дату народження';
    if (city === null) missingField = 'місто';
    if (sport === null) missingField = 'вид спорту';
    alert(`Шкода, що Ви не захотіли ввести свій(є) ${missingField}.`);
} else {

    const age = calculateAge(birthYear);



    const capitals = {
        'київ': 'Ти живеш у столиці України',
        'kyiv': 'Ти живеш у столиці України',
        'вашингтон': 'Ти живеш у столиці США',
        'washington': 'Ти живеш у столиці США',
        'лондон': 'Ти живеш у столиці Великої Британії',
        'london': 'Ти живеш у столиці Великої Британії'
    };

    const cityLower = city.toLowerCase().trim();
    let cityMessage = capitals[cityLower] || `Ти живеш у місті ${city}`;




    const champions = {
        'футбол': 'Ліонель Мессі',
        'бокс': 'Олександр Усик',
        'баскетбол': 'Леброн Джеймс'
    };


    const sportLower = sport.toLowerCase();
    let sportMessage = `Твій улюблений спорт ${sport.toLowerCase()}` ;
    if (champions[sportLower]) {
        sportMessage = `Круто! Хочеш стати ${champions[sportLower]}?`;
    }


    let message = `Ваш вік: ${age} років. ${cityMessage}. ${sportMessage}`;
    alert(message);
}


