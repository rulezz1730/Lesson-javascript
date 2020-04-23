"use strict";
let money, time;

function start() {
    money = +prompt('Введите какой бюджет у вас будет на месяц? ', '');
    time = new Date(prompt('Введите дату в формате YYYY-MM-DD', ''));

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Введите какой бюджет у вас будет на месяц? ', '');
    }
}

start();


let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,

    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = +prompt('Во сколько обойдется', '');


            if (typeof(a) == 'string' && typeof(a) != null && typeof(b) != null && typeof(a) != '' && typeof(b) != '' && a.length < 50) {
                console.log('Done');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },

    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budjet / 30).toFixed();
        return console.log('Бюджет на день = ' + appData.moneyPerDay);
    },

    detectLevel: function() {
        if (appData.moneyPerDay < 1000) {
            return console.log('Это минимальный уровень достатка')
        } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 3000) {
            return console.log('Это немного выше минимального уровеня достатка')
        } else if (appData.moneyPerDay > 3000) {
            return console.log('Это нормальный уровень достатка')
        }
    },

    chooseOptExpenses: function() {
        for (let j = 1; j <= 3; j++) {
            let a = +prompt(`Во сколько обойдется статья необязательный расходов номер ${j} `, '');
            appData.optionalExpenses[j] = a;
        }
    },

    checkSavings: function() {
        if (appData.saving = true) {
            let save = +prompt('Какая сумма накоплений', ''),
                percent = +prompt('Под какой процент', '');

            appData.monthIncome = save / 100 / 12 * 5.5;
            console.log(`Сумма ежемесячных наклплений будет равна ${appData.monthIncome}`);
        }
    },

    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход (перечислите через запятую)', ''); 
        while (typeof items !== 'string' || items == '' || items == null) {
            items = prompt('Что принесет дополнительный доход (перечислите через запятую)', ''); 
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что то еще есть на подработке', ''));
        appData.income.sort();

        for (let method of this.income) {
            console.log(method);
        }
    },

    includeObj() {
        for (let prop in appData) {
            console.log(prop);
        }
    },
}

//  
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