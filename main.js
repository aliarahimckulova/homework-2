var age = 19;
if (age >= 1 && age <= 17) {
    message = 'Учеба';
} else if (age >= 18 && age <= 64 ) {
    message = 'Работа';
} else if  (age >= 65 && age <= 100) {
    message = 'Пенсия';
}

var arr = [1,2,3,4,5,6,7,8,9];
for (var d in arr) {
    switch (arr[d]) {
        case 1:
            alert('1 разработчик');
            break;
        case 2:
            alert('2 разработчика');
            break;
        case 3:
            alert('3 разработчика');
            break;
        case 4:
            alert('4 разработчика');
            break;
        case 5:
            alert('5 разработчиков');
            break;
        case 6:
            alert('6 разработчиков');
            break;
        case 7:
            alert('7 разработчиков');
            break;
        case 8:
            alert('8 разработчиков');
            break;
        case 9:
            alert('9 разработчиков');
            break;


    }
}