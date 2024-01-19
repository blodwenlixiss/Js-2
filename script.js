"use strict";
//      1.შექმენით 5 ელემენტიანი მასივი,
// რომლის თითოეული ელემენტი არის რიცხვი,
// console.log გამოიტანეთ ამ მასივის ყველა ელემენტის ჯამი

const numbers = [1, 2, 3, 4, 5];
let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
console.log(sum);

//     2.შექმენით 3 ელემენტიანი მასივი,
// რომლის თითოეული ელემენტი არის ობიექტი რომელსაც აქვს შემდეგი ველები
// (properties): name, age, address.

let humans = [
  {
    firstName: "luka",
    age: 22,
    address: "Tbilisi",
  },
  {
    firstName: "giorgi",
    age: 23,
    address: "Batumi",
  },
  {
    firstName: "Irakli",
    age: 21,
    address: "Kutaisi",
  },
];
const nameDefinition = "My name is ";
const ageDefinition = "My age is ";
const addressDefinition = "My address is ";
// 3. console.log ში გამოიტანეთ 3 სტრინგი
//  "My name is (#2 დავალების 0 ინდექსზე მყოფი ობიექტის ველი name ის მნიშვნელობა)",
//  My age is (#2 დავალების 0 ინდექსზე მყოფი   ობიექტის ველი age ის მნიშვნელობა)",
// "My address is (#2 დავალების 0 ინდექსზე მყოფი  ობიექტის ველი address ის მნიშვნელობა)"

console.log(nameDefinition + humans[0].firstName);
console.log(ageDefinition + humans[0].age);
console.log(addressDefinition + humans[0].address);

// 4. დაწერეთ if / else statement სადაც შეამოწმებთ #2 დავალებაში  1
//  ინდექსზე მყოფი ობიექტში არსებულ age ველის მნიშვნელობას თუ ნაკლებია 19 ზე
//  console.log ში დაბეჭდეთ "I am a teenager" დანარჩენ შემთხვევაში დაბეჭდეთ "I am an adult"

if (humans[1].age < 19) {
  console.log("I am a teenager");
} else {
  console.log("I am an adult");
}

// 5.  შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი,
// და შეეცადეთ console.log-ში გამოიტანოთ ამ მასივის ყველა ელემენტი .

const arr = [43, 224, 41, 162, 622];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 6. const currentDay = new Date().getDay(); currentDay ცვლადი გვაძლევს კვირის დღეს რიცხვითი სახით
// 0 არის კვირა
// 1 არის ორშაბათი და ასე შემდეგ.
// 0-6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი .
// დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას კვირას 1 ის შემთხვევაში ორშაბათს და ასე შემდეგ 6მდე.
//  (სურვილის შემთხვევაში შეგიძლიათ დაამატოთ სხვა პირობებიც სადაც და, ან  || && ლოგიკურ ოპერატორებს გამოიყენებთ)

const currentDay = new Date().getDay();
switch (currentDay) {
  case 0:
    console.log("კვირა");
    break;
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  case 3:
    console.log("ოთხშაბათი");
    break;
  case 4:
    console.log("ხუთშაბათი");
    break;
  case 5:
    console.log("პარასკევი");
    break;
  case 6:
    console.log("შაბათი");
    break;
  default:
    console.log("არასწორი დღე");
}
