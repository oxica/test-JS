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

//Добавить, если такого свойства нет. Если такое свойство есть, изменяем его значение. Переопределить.

const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
};

playlist.qwe = 3;

console.log(playlist);

//Ссылочный тип

const a = { x: 1, y: 2 };
const b = a;

a.c = 100;

console.log(a);
console.log(b);
console.log(a === b); //true

//Массивы это объекты

const a = [1, 2, 3];
a.hello = ':)';
console.log(a);

//функции это объекты

const fn = function () {
    console.log('hello');
}

fn.hello = ':)';
console.dir(fn);

//____________________

//Метод объекта

const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
    // getName: function (a) {
    //     console.log("Это getName", a);
    // },
    getName() {
        console.log("Это getName");
    },
};


playlist.getName(5);

// Метод - изменить имя
//this

const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  //trackCount: 3,

  changeName(newName) {
    console.log(this);

    this.name = newName;
  },
  addTrack(track) {
      this.tracks.push(track);
      //this.trackCount = this.tracks.length; //плохо, так как находится в объекте
  },
  updateRating(newRating) {
      this.rating = newRating;
    },
  //вычисляемое свойство подсчета кол-тва треков используя длину массива
  getTrackCount() {
      return this.tracks.length;
      //return {TrackCount: this.tracks.length};
  },
};

console.log(playlist.getTrackCount());

playlist.changeName('Новое имя');
playlist.addTrack('новый трек');
playlist.updateRating(4);

console.log(playlist);
console.log(playlist.getTrackCount());



const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    for (const book of this.books) {
      if (this.books.indexOf(oldName) 
        this.books.splice(this.books.indexOf(oldName)) && oldName=newName)
    };
      return bookShelf;
  },
  // Change code above this line
};
