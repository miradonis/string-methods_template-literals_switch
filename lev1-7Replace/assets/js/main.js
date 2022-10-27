const text = "Sam is good at codingschool";

const school = text.slice(21, 31);
console.log(school);

const first_sentence = text.replace("good", "bad");
console.log(first_sentence);

const second_sentence = text.replace("codingschool", "school");
console.log(second_sentence);

const third_sentence = text.replace("codingschool", "tennis");
console.log(third_sentence);

document.write(
  first_sentence + "<br>" + second_sentence + "<br>" + third_sentence
);
