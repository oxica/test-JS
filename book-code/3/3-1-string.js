//экранирование
let строкаСобратнымСлэшем = ' "Лицемер!" - воскликнул д\'Артаньян';
let другойВариантСобратнымСлэшем =
    'Мой доктор настоятельно советует принимать "Миланту!"';
  
let строкаИзЧетырехСимволов = 'Нет.';

let строка = 'Мы уже приехали? ' + 'Мы уже приехали? ' + 'Мы ' + 'уже ' + 'приехали?';
//'Мы уже приехали? Мы уже приехали? Мы уже приехали?'

"1"; //'1'
'1' + '2'; //'12'
"12" + "3"; //'123'
'1' + ("2" + "3") + 4; //'1234'
1 + ("234" + "5"); //'12345'
12 + '345' + 6; //'123456'

var последниеДвеЦифры = 67;
"12345" + последниеДвеЦифры;
//'1234567'

let началоСтроки = '1234';
началоСтроки += 56 + ("78" + (3 * 3));
началоСтроки;
//'123456789'