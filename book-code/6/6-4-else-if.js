function времяПодъёма(деньНедели) {
    if (деньНедели === "суббота") {
        return null;
    } else {
        return "6:30";
    }
}

времяПодъёма("вторник");
времяПодъёма("суббота");
________________________________

function времяПодъёма(деньНедели) {
    if (деньНедели === "суббота") {
        return null;
    } else if (деньНедели === "восресенье") {
        return "7:30";
    } else {
    return "6:30";
  }
}

времяПодъёма("вторник");
времяПодъёма("суббота");
времяПодъёма("восресенье");
________________________________

function нуТакМыИдемВШколуИлиНет(
  мояТемпература,
  тошнит,
  съелЯичницу,
  съелХлопья,
  собралРюкзак,
  взялОбед,
  наделБотинки
) {
    let максЗдороваяТемпература = 37.7;
    let сообщение;
    if (мояТемпература > максЗдороваяТемпература) {
        сообщение = "Ты весь горишь!";
    } else if (тошнит) {
        сообщение = "Тебе лучше остаться дома, раз тебя тошнит!";
    } else {
        if (съелЯичницу || съелХлопья) {
            if (!собралРюкзак) {
                сообщение = "Собери нактонец-то рюкзак!";
            } else if (!взялОбед) {
                сообщение = "Ты опять забыл свой обед!";
            } else if (!наделБотинки) {
                сообщение = "Ты не надел ботинки!";
            } else {
                сообщение = "Наконец-то можно идти в школу!";
            }
        }else {
                сообщение = "Завтрак самый важный прием пищи!";
            }
    }
    console.log(сообщение);
}

нуТакМыИдемВШколуИлиНет(36.6, false, false, true, true, true, true);
нуТакМыИдемВШколуИлиНет(38.3, false, true, false, true, true, true);
нуТакМыИдемВШколуИлиНет(36.7, true, true, true, true, true, true);
нуТакМыИдемВШколуИлиНет(36.7, false, true, true, false, true, true);
нуТакМыИдемВШколуИлиНет(37.7, false, false, false, true, true, true);