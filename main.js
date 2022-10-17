//자바 스크립트 문법정리 !

//1. short  하기

let name = "jun";
let age = 17;

let person = {
  name,
  age,
};

console.log(person);
// key 값과 value가 같다면 줄여서 쓸 수 있다는 점.

//2. Destructure

let person1 = {
  junhaName: "junha",
  junhaAge: 20,
};

/*
let junhaname = person1.name;
let junhaAge = person1.age;
*/

let { junhaName, junhaAge } = person1; // person1에서 key값을 분리해서 사용가능하다는 문법.
console.log(junhaName, junhaAge);

//3. spread

let people = {
  name1: "junsu",
  age1: 20,
};

let people2 = { ...people };
let people3 = people;
// 둘의 차이점은 people2는 새로 생긴거지만, people3같은 경우 people과 같은 주소를 바라보고 있다고 생각해야한다.
console.log(people2);
console.log(people3);
console.log(people == people2); //False 아이에 새로운 객체가 형성되었기 때문에
console.log(people == people3);

// 객체에만 해당되지 않고 배열에도 똑같이 적용되는 부분!!

//4. 삼항연산자.

let neq = null;
if (neq) {
  console.log(neq.n);
} else {
  console.log("There is no neq");
}

console.log(neq ? neq.n : "there is no neq");

//5. 배열함수

let peoples = [
  "jnnn",
  "sssss",
  "dddddd",
  "ssssaaasd",
  "sdaskdjlsa",
  "sjsnut",
  "siemksjtny",
  "siuejqnslgjt",
];

function printName(item) {
  console.log(item);
}

peoples.forEach(printName);
