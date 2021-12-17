//Собираем все теги из твитов

const tweets = [
  { td: "000", likes: 5, tags: ["js", "nodejs"] },
  { td: "001", likes: 2, tags: ["html", "css"] },
  { td: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { td: "003", likes: 8, tags: ["css", "react"] },
  { td: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((tags, tweet) => {
  tags.push(tweet.tags);

  return tags;
}, []);

console.log(allTags);

//(5) [Array(2), Array(2), Array(3), Array(2), Array(3)]
//0: (2) ['js', 'nodejs']
//1: (2) ['html', 'css']
//2: (3) ['html', 'js', 'nodejs']
//3: (2) ['css', 'react']
//4: (3) ['js', 'nodejs', 'react']
//length: 5

//разгладить
// линтеру не понравится из-за мутации

const tweets = [
  { td: "000", likes: 5, tags: ["js", "nodejs"] },
  { td: "001", likes: 2, tags: ["html", "css"] },
  { td: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { td: "003", likes: 8, tags: ["css", "react"] },
  { td: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((tags, tweet) => {
  tags.push(...tweet.tags);

  return tags;
}, []);

console.log(allTags);

//(12) ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']
//0: "js"
//1: "nodejs"
//2: "html"
//3: "css"
//4: "html"
//5: "js"
//6: "nodejs"
//7: "css"
//8: "react"
//9: "js"
//10: "nodejs"
//11: "react"
//length: 12

//разгладить
//линтер не ругается

const tweets = [
  { td: "000", likes: 5, tags: ["js", "nodejs"] },
  { td: "001", likes: 2, tags: ["html", "css"] },
  { td: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { td: "003", likes: 8, tags: ["css", "react"] },
  { td: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((tags, tweet) => {
  return [...tags, ...tweet.tags];
}, []);

console.log(allTags);

//(12) ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']
//0: "js"
//1: "nodejs"
//2: "html"
//3: "css"
//4: "html"
//5: "js"
//6: "nodejs"
//7: "css"
//8: "react"
//9: "js"
//10: "nodejs"
//11: "react"
//length: 12

//разгладить
//линтер не ругается
//+ короткая запись в одну строку

const tweets = [
  { td: "000", likes: 5, tags: ["js", "nodejs"] },
  { td: "001", likes: 2, tags: ["html", "css"] },
  { td: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { td: "003", likes: 8, tags: ["css", "react"] },
  { td: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

console.log(allTags);

//(12) ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']
//0: "js"
//1: "nodejs"
//2: "html"
//3: "css"
//4: "html"
//5: "js"
//6: "nodejs"
//7: "css"
//8: "react"
//9: "js"
//10: "nodejs"
//11: "react"
//length: 12

//-----------------2-------------------
//ведем статистику тегов
const tweets = [
  { td: "000", likes: 5, tags: ["js", "nodejs"] },
  { td: "001", likes: 2, tags: ["html", "css"] },
  { td: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { td: "003", likes: 8, tags: ["css", "react"] },
  { td: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

const tagStats = allTags.reduce((acc, tag) => {
  console.log(acc);

  if (acc[tag]) {
    acc[tag] += 1;

    return acc;
  }

  acc[tag] = 1;

  return acc;
}, {});

onsole.log(tagStats);

//{}
//{js: 1}
//{js: 1, nodejs: 1}
//{js: 1, nodejs: 1, html: 1}
//{js: 1, nodejs: 1, html: 1, css: 1}
//{js: 1, nodejs: 1, html: 2, css: 1}
//{js: 2, nodejs: 1, html: 2, css: 1}
//{js: 2, nodejs: 2, html: 2, css: 1}
//{js: 2, nodejs: 2, html: 2, css: 2}
//{js: 2, nodejs: 2, html: 2, css: 2, react: 1}
//{js: 3, nodejs: 2, html: 2, css: 2, react: 1}
//{js: 3, nodejs: 3, html: 2, css: 2, react: 1}
//{js: 3, nodejs: 3, html: 2, css: 2, react: 2}

//имутабельно, чтобы не ругался линтер
const tweets = [
  { td: "000", likes: 5, tags: ["js", "nodejs"] },
  { td: "001", likes: 2, tags: ["html", "css"] },
  { td: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { td: "003", likes: 8, tags: ["css", "react"] },
  { td: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

const tagStats = allTags.reduce((acc, tag) => {
  console.log(acc);

  if (acc[tag]) {
    return {
      ...acc,
      [tag]: acc[tag] + 1,
    };
  }
  return {
    ...acc,
    [tag]: 1,
  };
}, {});

console.log(tagStats);

//{}
//{js: 1}
//{js: 1, nodejs: 1}
//{js: 1, nodejs: 1, html: 1}
//{js: 1, nodejs: 1, html: 1, css: 1}
//{js: 1, nodejs: 1, html: 2, css: 1}
//{js: 2, nodejs: 1, html: 2, css: 1}
//{js: 2, nodejs: 2, html: 2, css: 1}
//{js: 2, nodejs: 2, html: 2, css: 2}
//{js: 2, nodejs: 2, html: 2, css: 2, react: 1}
//{js: 3, nodejs: 2, html: 2, css: 2, react: 1}
//{js: 3, nodejs: 3, html: 2, css: 2, react: 1}
//{js: 3, nodejs: 3, html: 2, css: 2, react: 2}

// тернарник
const tweets = [
  { td: "000", likes: 5, tags: ["js", "nodejs"] },
  { td: "001", likes: 2, tags: ["html", "css"] },
  { td: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { td: "003", likes: 8, tags: ["css", "react"] },
  { td: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

const tagStats = allTags.reduce((acc, tag) => {
  console.log(acc);

  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});

console.log(tagStats);

//{}
//{js: 1}
//{js: 1, nodejs: 1}
//{js: 1, nodejs: 1, html: 1}
//{js: 1, nodejs: 1, html: 1, css: 1}
//{js: 1, nodejs: 1, html: 2, css: 1}
//{js: 2, nodejs: 1, html: 2, css: 1}
//{js: 2, nodejs: 2, html: 2, css: 1}
//{js: 2, nodejs: 2, html: 2, css: 2}
//{js: 2, nodejs: 2, html: 2, css: 2, react: 1}
//{js: 3, nodejs: 2, html: 2, css: 2, react: 1}
//{js: 3, nodejs: 3, html: 2, css: 2, react: 1}
//{js: 3, nodejs: 3, html: 2, css: 2, react: 2}

//сокращенная запись

const tweets = [
  { td: "000", likes: 5, tags: ["js", "nodejs"] },
  { td: "001", likes: 2, tags: ["html", "css"] },
  { td: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { td: "003", likes: 8, tags: ["css", "react"] },
  { td: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

const tagStats = allTags.reduce(
  (acc, tag) => ({
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  }),
  {}
);
console.log(tagStats);

//{js: 3, nodejs: 3, html: 2, css: 2, react: 2}



//----------------3---------------

const user = { name: 'Mango', };
const key = 'name';
console.log(user[key]);

//analog

const user = { name: "Mango" };
const key = "name";
console.log(user['name']);


