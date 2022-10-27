const text = "Susi is back from codingschool";

const name = text.substring(0, 4);
console.log(name);

const is = text.substring(5, 7);
console.log(is);

const school = text.substring(24, 31);
console.log(school);

document.write(
  name + "<br>" + is + "<br>" + school + "<br>" + name + " " + is + " " + school
);
