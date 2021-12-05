//Объект
const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
};
console.log(playlist);

//Доступ к свойству
const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
};
console.log(playlist.name);
console.log(playlist.rating);
console.log(playlist.tracks);
console.log(playlist.trackCount);

//2 способ достучать к свойству, если имя свойства хранится в переменной

const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
};

console.log(playlist);
const propertyName = "tracks";

console.log(playlist.rating);//идентичная запись
console.log(playlist['rating']);//идентичная запись
console.log(playlist[propertyName]);//идентичная запись

//Объект, в котором ключ динамический (как в инпуте)
const userName = 'Mango';
const email = 'mango@gmail.com';

const signupData = {
userName: userName,
email: email,
}

console.log(signupData);

//короткая запись кода, что выше
//Можно сокращать, когда имя свойства называется так же, как имя переменной, в которой лежит это значение

const userName = "Mango";
const email = "mango@gmail.com";

const signupData = {
  userName,
  email,
};

console.log(signupData);

//Вычисляемые свойства - редкий юзкейс
//<input name="color" value="tomato">

const inputName = 'color';
const inpurValue = 'tomato';

const colorPickerData = {
  [inputName]: inpurValue,
};
console.log(colorPickerData);