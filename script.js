"use strict";

let money = +prompt('Введите какой бюджет у вас будет на месяц? ', '');
let time = new Date(prompt('Введите дату в формате YYYY-MM-DD', ''));

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
}

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt('Во сколько обойдется', '');


    if (typeof(a) == 'string' && typeof(a) != null && typeof(b) != null && typeof(a) != '' && typeof(b) != '' && a.length < 50) {
        console.log('Done');
        appData.expenses[a] = b;
    } else {

    }
}

// let i = 0;
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдется', '');

//     if (typeof(a) == 'string' && typeof(a) != null && typeof(b) != null && typeof(a) != '' && typeof(b) != '' && a.length < 50) {
//         console.log('Done');
//         appData.expenses[a] = b;
//     }
//     i++;
// }

// let i = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдется', '');

//     if (typeof(a) == 'string' && typeof(a) != null && typeof(b) != null && typeof(a) != '' && typeof(b) != '' && a.length < 50) {
//         console.log('Done');
//         appData.expenses[a] = b;
//     }
//     i++;
// } while (i < 2);

appData.moneyPerDay = appData.budjet / 30;
console.log('Бюджет на день = ' + appData.moneyPerDay);

if (appData.moneyPerDay < 1000) {
    console.log('Это минимальный уровень достатка')
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 3000) {
    console.log('Это немного выше минимального уровеня достатка')
} else if (appData.moneyPerDay > 3000) {
    console.log('Это нормальный уровень достатка')
}