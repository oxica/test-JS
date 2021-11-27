//&&
false && false; //false
true && true; //true
true && false; //false 
false && true; //false

function готовЛиЯКШколе(собралРюкзак, взялОбед, наделБотинки) {
    if (собралРюкзак && взялОбед && наделБотинки) {
      console.log("Теперь можно идти в школу!");
    } else {
      console.log("Ты еще не готов! Поторопись!");
    }
}
готовЛиЯКШколе(false, false, true);
готовЛиЯКШколе(true, false, true);
готовЛиЯКШколе(true, true);
готовЛиЯКШколе(true, true, true);

//___________________________________________________________________

// ||
false || false; //false
true || true; //true
true || false; //true
false || true; //true


function ужеПозавтракал(съелЯичницу, съелХлопья) {
    if (съелЯичницу || съелХлопья) {
      console.log("Ты уже позавтракал! Молодец!");
    } else {
      console.log("Ты еще не завтракал! Давай быстрее, а то опоздаешь!");
    }
}
ужеПозавтракал(false, true);
ужеПозавтракал(false, true);
ужеПозавтракал(true, true);
ужеПозавтракал(false, false);

