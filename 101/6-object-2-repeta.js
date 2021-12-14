const a = [1, 2, 3];
const b = [...a, 4];
console.log(a);
console.log(b);
// [1, 2, 3];
// [1, 2, 3, 4];

//_______________________________

const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = [...a];
console.log(a);
console.log(b);

console.log(a[0] === b[0]);
console.log(a === b);

//[{…}, {…}, {…}]0: {x: 1}1: {y: 2}2: {z: 3}length: 3[[Prototype]]: Array(0)
//[{…}, {…}, {…}]0: {x: 1}1: {y: 2}2: {z: 3}length: 3[[Prototype]]: Array(0)
//true
//false

//______________________________
//Проблема распыления  объекта с одинаковыми ключами:

const b = { x: 1, y: 2, x: 5 };
console.log(b);
// {x: 5, y: 2}

//_______________________________
//Раньше делали так:

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

const c = Object.assign({}, a, b);
console.log(c);

//{x: 0, y: 2, z: 3}

//______________________________
//Деструктуризация данных

const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
};
const { rating, tracks, name, trackCount } = playlist;
console.log(name, rating, tracks, trackCount);

// Мой супер плейлист 5 (3) ['трек-1', 'трек-2', 'трек-3'] 3

//________________________
//Если нет значения в массиве, которые исчем через деструктуризацию.
//С возможностью добавить ключ и дефолтнон значение, если его все же нет, а оно нужно. И не запишет, если есть такое значение

const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
};
const { rating, tracks, name, trackCount, author = 555 } = playlist;
console.log(author);

//_______________________________
//Переназвать переменную с возможностью присвоить дефолтное значение

const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
};
const {
  rating,
  tracks,
  name,
  trackCount: NumbersOfTracks = 0,
  author = 555,
} = playlist;

console.log(NumbersOfTracks);
//3

//________________________________
//Деструктуризация объекта в объекте

const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
  stats: {
    followers: 1025,
    likes: 256,
  },
};
//const { rating, tracks, name, trackCount, stats } = playlist;
//const { followers, likes, } = stats;

const {
  rating,
  tracks,
  name,
  trackCount,
  stats: { followers, likes },
} = playlist;


console.log(rating, tracks, name, trackCount, followers, likes);
//['трек-1', 'трек-2', 'трек-3'] 'Мой супер плейлист' 3 1025 256

//_____________________________

//Деструктуризация массива

const rgb = [255, 100, 80];

const [red, green, blue] = rgb;

console.log(red, green, blue);

//255 100 80

//_______________________________
//Пропустить свойство во время деструктуризации массива - проигнорировать
const rgb = [255, 100, 80];

const [red, , blue] = rgb;

console.log(red, blue);
//255 80

//________________________________

//Задача. Найти самый большой рейтинг авторов - через распыление и Math.max

const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
};

const ratings = Object.values(authors);
console.log(Math.max(...ratings));
//9

//_________________________________

//Задача. Найти самый большой рейтинг авторов с названием автора - ключом
const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

const entries = Object.entries(authors);

for (const entry of entries) {
    const [name, rating] = entry;
    
    console.log(name, rating);
}

// kiwi 4
// poly 7
// ajax 9
// mango 6

//_______________________________
// 2 вариант
const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

const entries = Object.entries(authors);

for (const [name, rating] of entries) {
    console.log(name, rating);
}

// kiwi 4
// poly 7
// ajax 9
// mango 6

//______________________________

// Оператор REST сбор

const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
  stats: {
    followers: 1025,
    likes: 256,
  },
};

const { name, tracks, ...restProps } = playlist;;

console.log(name, tracks);
console.log(restProps);

//Мой супер плейлист (3) ['трек-1', 'трек-2', 'трек-3']
//{rating: 5, trackCount: 3, stats: {…}}

//______________________________

const showProffileInfo = function (userProfile) {

    console.log(userProfile);

};

const profile = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
  stats: {
    followers: 1025,
    likes: 256,
  },
};
showProffileInfo(profile);

//{name: 'Мой супер плейлист', rating: 5, tracks: Array(3), trackCount: 3, stats: {…}}

//______________________________________________

const showProffileInfo = function (userProfile) {
  const {
    rating,
    tracks,
    name,
    trackCount,
    stats: { followers, likes },
    } = userProfile;
    console.log(rating, tracks, name, trackCount, followers, likes);
};

const profile = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
  stats: {
    followers: 1025,
    likes: 256,
  },
};
showProffileInfo(profile);

//['трек-1', 'трек-2', 'трек-3'] 'Мой супер плейлист' 3 1025 256

//__________________________________

//Деструктуризация, которая проведена в подписи функции - 2 вариант

const showProffileInfo = function ({
  rating,
  tracks,
  name,
  trackCount,
  stats: { followers, likes },
}) {
    console.log(rating, tracks, name, trackCount, followers, likes);
};

const profile = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
  stats: {
    followers: 1025,
    likes: 256,
  },
};
showProffileInfo(profile);

//['трек-1', 'трек-2', 'трек-3'] 'Мой супер плейлист' 3 1025 256

//________________________________



