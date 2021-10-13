

var record = []; --/* взято с урока */
/*--------- */
function isAnswer(q, event){
    if(isNaN(event) || !isFinite(event)){
        alert("Вы ввели недопустимый символ");
        return false;
    }else if(event < 1 || event > q){
        alert("Ваше число выходит из допустимого диапозона");
        return false;
    }
    return true;
};

function answer(arg1,arg2,arg3){
    ok = false;
    do{
        event = +prompt(arg1,arg2,arg3 + '-1 Выход из игры');
    
        if(event == -1){
            break;
        }else{
            ok = isAnswer(works.a0, event);
        }
    }while(!ok);
    switch(event) { /*----- взято с урока -------*/
        case 1: record.push([arg1, arg2]);
            break;
        case 2: record.push([arg1, arg3]);
            break;
        case -1: record.push([arg1, "Вышли из игры"]);
            break;
    }/*-------------------------- */
    return event;
};


switch (answer(works.a00 + works.a1 + works.a2)){
    case 1:
        switch(answer(works.b00 + works.b1 + works.b2)){
            case 1:
            case 2: 
                answer(works.d00, works.d1, works.d2);
                break;
            case -1: 
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2:
        switch (answer(works.c00, works.c1, works.c2)) {
            case 1:
            case 2:
                answer(works.d00, works.d1, works.d2);
                break;
            case -1:
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: 
        break;

            
};

/* взято с урока */ 

alert('Спасибо за игру');
console.log(record);
var step = +prompt("введите номер хода");
console.log(step);
var stepHistory ="В ходе № " + step + " " + record[step-1][0] + "Ваш выбор " + record[step-1][1];
alert(stepHistory);

/*--------- */