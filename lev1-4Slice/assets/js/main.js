const A = "Susi is going to codingschool";

// const name = A.indexOf("Susi");
const name = A.slice(0, 5);
console.log(name);

// const is = A.indexOf("is");
const is = A.slice(5, 7);
console.log(is);

// const more_words = A.indexOf("is going to");
const more_words = A.slice(8, 17);
console.log(more_words);

// const school = A.indexOf("school");
const school = A.slice(23, 30);
console.log(school);

document.write(
  name +
    "<br>" +
    is +
    "<br>" +
    is +
    " " +
    more_words +
    " " +
    school +
    "<br>" +
    school +
    "<br>" +
    name +
    " " +
    is +
    " " +
    school
);
