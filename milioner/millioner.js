var userAnswer, goals = 0; money = 0; 
for (var index = 0; index < mas.length; index++) {
    userAnswer = +prompt("Вопрос №"+(index+1)+"  "+mas[index].a00+"\nВарианты ответов:\n"+mas[index].a1+"\n"+mas[index].a2+"\n"+mas[index].a3+"\n"+mas[index].a4+"\nВведите номер правильного ответа.\n\nДля выхода из игры введите -1");
    if (userAnswer == -1) {
        alert("Возвращайтесь, будем Вас ждать.")
        break;
    }
    if (userAnswer == mas[index].a0) {
        money += (index+1)*1000;
        alert("Поздравляем вы ответили правильно и получаете  за ответ "+((index+1)*1000)+" рублей");
        goals++;
        }
    else {
        
        alert("К сожалению вы ответили неверно\n");
        break;
    }
}
alert("Вы  ответиили правильно на "+goals+" вопросов из "+mas.length+" и заработали за игру "+money+" рублей"); 