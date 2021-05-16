// const val4 = {
//   name: "武藤",
//   age: 34
// };

// console.log(val4.age);

// val4.name = "伊藤";

// console.log(val4);

// val4.adress = "名古屋";

// console.log(val4);

// const val5 = ["dog", "cat"];
// console.log(val5);
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5[2]);

// const name = "muto";
// const age = 34;

// const message1 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message1);

// function func1(str) {
//   return str + "です";
// }

// console.log(func1("むとう"));

// const func2 = (str) => str;
// console.log(func2("武藤2"));

// const func3 = (x, y) => {
//   return x + y;
// };

// console.log(func3(2, 8));

// const myprofile = {
//   name: "武藤",
//   age: 34
// };

// // const message1 = `名前は${myprofile.name}です。年齢は${myprofile.age}歳です`;
// // console.log(message1);

// const { name, age } = myprofile;
// const message2 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

// const myprofile = ["武藤", 34];
// const message3 = `名前は${myprofile[0]}です。年齢は${myprofile[1]}です。`;
// console.log(message3);

// const sayhello = (name = "ゲスト") => {
//   console.log(`こんにちは、${name}さん`);
// };
// sayhello();

// 配列の展開
// const arr1 = [1, 2, 3];
// console.log(arr1);
// console.log(...arr1);

// const sumfunc = (x, y, z) => console.log(x + y + z);
// sumfunc(arr1[0], arr1[1]);
// sumfunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, ...arry3] = arr2;
// console.log(arry3);

// // 配列のコピー
// const array4 = [10, 20];
// const array5 = [30, 40];
// const array6 = [...array4, ...array5];
// console.log(array6);

// const array7 = [...array4];
// console.log(array7);
// array7[0] = 100;
// array4[0];

// const name_array = ["tanaka", "yamada", "muto"];
// for (let i = 0; i < name_array.length; i++) {
//   console.log(name_array[i]);
// }

// const name_array2 = name_array.map((name) => {
//   return name;
// });
// console.log(name_array2);

// name_array.map((str) => {
//   console.log(str + "です");
// });

// const num_array = [1, 2, 3, 4, 5];
// const new_num_array = num_array.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(new_num_array);

// const name_array = ["tanaka", "yamada", "muto"];
// const new_name_array = name_array.map((name) => {
//   if (name === "muto") {
//     return name;
//   } else {
//     return `${name}さんこんにちは`;
//   }
// });
// console.log(new_name_array);

// const num = "1300";
// console.log(num.toLocaleString());

// const format_num =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(format_num);

// const checksum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };

const checksum = (num1, num2) => {
  if (num1 + num2 > 100) {
    return `${num1 + num2}だと許容範囲を超えています`;
  } else {
    return "許容範囲内です";
  }
};

console.log(checksum(50, 100));
