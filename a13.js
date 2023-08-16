const prompt = require("prompt-sync")({ sigint: true });

// console.log("Bharath")
// arrow fun implict return =>
// const sum = (a, b) => a + b;


// function tip() {
//   total_amt = Number(prompt("enter the total amount"));
//   tip_per = Number(prompt("enter the tip "));
//   tt_amt = sum(total_amt, tip_per);
//   console.log("the total amount is " + tt_amt)
// }
// //tip();
// console.log(sum(10000, 1999))


//exercise function func
// const addfu = (a, b) => console.log(a + b);
// const subfu = (a, b) => console.log(a - b);
// const mulfu = (a, b) => console.log(a * b);
// const divfu = (a, b) => {
//   if (b == 0) {
//     console.log("the value of b is zero so div is not possible")
//     console.log("if you wish you can change the value of b")
//     choice = Number(prompt("enter the new number"));
//     divfu(a, choice);

//   }
//   else {
//     console.log(a / b);
//   }
// }

// const input = () => {
//   a = Number(prompt("enter the  number a:"));
//   b = Number(prompt("enter the number b:"));
//   addfu(a, b);
//   subfu(a, b);
//   mulfu(a, b);
//   divfu(a, b);
//   console.log("hope you get all the answers right 👍👍😍❤️")
// }
// input();

// //arrays
// grocery = ['banana', 'apple', 'ornage', 'goa']
// console.log(grocery);
// console.log(grocery[1])
// grocery.push("Jack Fruit ")
// console.log("After adding" + " ");
// console.log(grocery);
// //actually slice method include the start  of array and exclude the end of an array
// //if there only start value then it prints thw whole array
// console.log(grocery.slice(1))
// grocery.push("Strawberry")
// console.log(grocery)
// console.log("after")
// console.log(grocery.slice(3))
// console.log(grocery.slice(1, 4))
// console.log(grocery.indexOf("ornage"))//index of is a case sensitive
// console.log(grocery)
// console.log(grocery.length);
//object are simalr to array but they have key and the value pairs if the key value is  repeating then it takes the lastly assigned key
// const obj = {
//   key1: "value1",
//   key2: "value2",
//   key3: "value3"
// }
// obj.key7 = "hello"
// console.log(obj)
// const car = {
//   carname: "Bmw",
//   No_oftyre: 4,
//   color: "red"
// }
// console.log(car)
// console.log(car['carname'])
// console.log(car['No_oftyre'])

// //assign no
// car.phno = 6382478722
// console.log(car)


// car.phno = 9952236707
// console.log(car)
// //person2
// const person2 = {
//   name: 'Qazi',
//   shirt: "Black"
// }

// console.log(person2)
// person2.name = 'John'
// person2.shirt = 'Brown '
// console.log(person2)
// const inm = (name, shirt) => {
//   console.log(`the person name is ${name} and he wears the shirt color ${shirt}`)
// }
// const Save = (Salary, Exp) => {
//   return Salary - Exp
// }
// const out = (a, b, c) => {
//   const obj = {
//     name: a,
//     age: b,
//     shirt: c,
//     Salary: Number(prompt("enter your Salary")),
//     exp: Number(prompt("enter your expense ")),
//     Save: function () {
//       return this.Salary - this.exp;
//     }

//   }
//   console.log(`the person name is ${obj.name} and his age is ${obj.age} and he wear a shirt which color is ${obj.shirt} his salary is ${obj.Salary} and his expenses is ${obj.exp} and his Savings is ${obj.Save()} `)
// }

// const inp = () => {
//   let name = prompt("enter the name ")
//   let age = Number(prompt("enter age "))
//   let shirt = prompt("enter the shirt color ")
//   out(name, age, shirt)
// }
// inp()


// //for loops
// const friends = ['bharath', 'vicky', 'pranesh', 'Sabari', 'vicky', 'pranesh', 'Sabari', 'vicky', 'pranesh', 'Sabari', 'vicky', 'pranesh', 'Sabari']
// console.log(friends)
// // for (let i = 0; i < friends.length; i++) {
// //   console.log(i, friends[i])
// // }
// for (let x in friends) {

//   console.log(x, friends[x])
// }
// for (let y of friends) {
//   console.log(y)
// }
// //sum of an arrays
// const arr = [1, 2, 3, 4, 5, 6]
// let sum = 0;
// for (let x1 in arr) {
//   sum += arr[x1];
// }
// console.log(sum)
// let s2 = 0;

// arr.splice(6, 3, 100)
// for (let y1 of arr) {
//   s2 += y1;
//   console.log(y1, s2)
// }
// console.log(s2)

// const arr1 = [1, 2, 3, 4, 5, 6, 7]
// for (let n1 of arr1) {
//   console.log(n1 * 2)
// }

// const initial = [1, 2, 3, 4, 5]

// const sq = () => {
//   let res1 = []
//   for (let c1 of initial) {
//     res1.push(c1 ** 2)
//   }
//   return res1
// }
// console.log(sq())

// const lett = () => {
//   const ph = prompt("enter a string")
//   let c = 0;
//   let res = ph.length
//   for (let v1 of ph) {
//     c++;
//   }
//   console.log(res)
//   return c
// }
// console.log(lett())
// let bharath = {
//   name: "bharath",
//   age: 19
// }
// for (let i in bharath) {
//   console.log(i, bharath[i])
// }

// const sum = () => {
//   size = prompt("enter the no of elements")
//   arr = []
//   for (i = 0; i < size; i++) {
//     arr.push(prompt("enter the value "))
//   }
//   console.log(arr)
//   c = 0;
//   for (let nx of arr) {
//     c += Number(nx)
//   }
//   return { c }
// }

// console.log(sum())

// const max1 = () => {
//   si = prompt("enter the size of an array")
//   h1 = []
//   for (let i1 = 0; i1 < si; i1++) {
//     h1.push(prompt("enter the value "))
//   }
//   console.log(h1)
//   let max = h1[0]
//   for (let xc of h1) {
//     if (xc > max)
//       max = xc
//     console.log("xc " + xc, "max " + max)
//   }
//   return { max }
// }

// console.log(max1())

// const min = () => {
//   bi = prompt("enter the array size")
//   mn = []
//   for (let i2 = 0; i2 < bi; i2++) {
//     mn.push(prompt("enter the vale of array ", i2 + " "))
//   }
//   console.log(mn)
//   let min = mn[0]
//   for (let mz of mn) {
//     if (min > mz)
//       min = mz
//     console.log("min " + min + "  mz" + mz)
//   }
//   return { min }
// }

// console.log(min())

//check wheather the elements present in the arry is greater than 0 or not

// const ch = () => {
//   let ch1 = prompt("enter the array size")
//   cha = []
//   for (let chi = 0; chi < ch1; chi++) {
//     cha.push(prompt("enter the valiue " + chi))
//   }
//   console.log(cha)
//   let chp = 0, chn = 0
//   for (let chc of cha) {
//     if (chc > 0) {
//       console.log("positive " + chc)
//       chp++;
//     }
//     else {
//       console.log("negative " + chc)
//       chn++;
//     }
//   }
//   console.log("the no of positive " + chp)
//   console.log("the no of negative " + chn)
// }
// ch();

// let pr = {
//   name: "bharath",
//   age: 19,
//   native: "tirupur",
//   laptop1: {
//     brand: "Hp",
//     model: "15s fq2071tu",
//     ram: 8,
//     memory: 256
//   }
// }
// console.log(pr.laptop
//   ?.brand);
// delete pr.laptop1;
// console.log(pr)
// pr.laptop = {
//   brand: "hp",
//   price: "89k"
// }
// console.log(pr)
// delete pr.laptop;
// console.log(pr)
// delete pr;
// console.log(pr)


let bharath = new Object();
bharath.age = 18;
bharath.dist = "tirupur";
bharath.friends = new Object();
bharath.friends.name = "Sabari";
bharath.friends.dist = "cbe";
console.log(bharath);


const out = (a, b, c) => {
  const obj = {
    name: a,
    age: b,
    shirt: c,
    Salary: Number(prompt("enter your Salary")),
    exp: Number(prompt("enter your expense ")),
    Save: function () {
      return this.Salary - this.exp;
    }

  }
  console.log(`the person name is ${obj.name} and his age is ${obj.age} and he wear a shirt which color is ${obj.shirt} his salary is ${obj.Salary} and his expenses is ${obj.exp} and his Savings is ${obj.Save()} `)
}
out("bharath", 19, "blaxc");
// console.log(person2)
// person2.name = 'John'
// person2.shirt = 'Brown '
// console.log(person2)
// const inm = (name, shirt) => {
//   console.log(`the person name is ${name} and he wears the shirt color ${shirt}`)
// }
// const Save = (Salary, Exp) => {
//   return Salary - Exp
// }
// const out = (a, b, c) => {
//   const obj = {
//     name: a,
//     age: b,
//     shirt: c,
//     Salary: Number(prompt("enter your Salary")),
//     exp: Number(prompt("enter your expense ")),
//     Save: function () {
//       return this.Salary - this.exp;
//     }

//   }
//   console.log(`the person name is ${obj.name} and his age is ${obj.age} and he wear a shirt which color is ${obj.shirt} his salary is ${obj.Salary} and his expenses is ${obj.exp} and his Savings is ${obj.Save()} `)
// }

// const inp = () => {
//   let name = prompt("enter the name ")
//   let age = Number(prompt("enter age "))
//   let shirt = prompt("enter the shirt color ")
//   out(name, age, shirt)
// }
// inp()


// //for loops
// const friends = ['bharath', 'vicky', 'pranesh', 'Sabari', 'vicky', 'pranesh', 'Sabari', 'vicky', 'pranesh', 'Sabari', 'vicky', 'pranesh', 'Sabari']
// console.log(friends)
// // for (let i = 0; i < friends.length; i++) {
// //   console.log(i, friends[i])
// // }
// for (let x in friends) {

//   console.log(x, friends[x])
// }
// for (let y of friends) {
//   console.log(y)
// }
// //sum of an arrays
// const arr = [1, 2, 3, 4, 5, 6]
// let sum = 0;
// for (let x1 in arr) {
//   sum += arr[x1];
// }
// console.log(sum)
// let s2 = 0;

// arr.splice(6, 3, 100)
// for (let y1 of arr) {
//   s2 += y1;
//   console.log(y1, s2)
// }
// console.log(s2)

// const arr1 = [1, 2, 3, 4, 5, 6, 7]
// for (let n1 of arr1) {
//   console.log(n1 * 2)
// }

// const initial = [1, 2, 3, 4, 5]

// const sq = () => {
//   let res1 = []
//   for (let c1 of initial) {
//     res1.push(c1 ** 2)
//   }
//   return res1
// }
// console.log(sq())

// const lett = () => {
//   const ph = prompt("enter a string")
//   let c = 0;
//   let res = ph.length
//   for (let v1 of ph) {
//     c++;
//   }
//   console.log(res)
//   return c
// }
// console.log(lett())
// let bharath = {
//   name: "bharath",
//   age: 19
// }
// for (let i in bharath) {
//   console.log(i, bharath[i])
// }

// const sum = () => {
//   size = prompt("enter the no of elements")
//   arr = []
//   for (i = 0; i < size; i++) {
//     arr.push(prompt("enter the value "))
//   }
//   console.log(arr)
//   c = 0;
//   for (let nx of arr) {
//     c += Number(nx)
//   }
//   return { c }
// }

// console.log(sum())

// const max1 = () => {
//   si = prompt("enter the size of an array")
//   h1 = []
//   for (let i1 = 0; i1 < si; i1++) {
//     h1.push(prompt("enter the value "))
//   }
//   console.log(h1)
//   let max = h1[0]
//   for (let xc of h1) {
//     if (xc > max)
//       max = xc
//     console.log("xc " + xc, "max " + max)
//   }
//   return { max }
// }

// console.log(max1())

// const min = () => {
//   bi = prompt("enter the array size")
//   mn = []
//   for (let i2 = 0; i2 < bi; i2++) {
//     mn.push(prompt("enter the vale of array ", i2 + " "))
//   }
//   console.log(mn)
//   let min = mn[0]
//   for (let mz of mn) {
//     if (min > mz)
//       min = mz
//     console.log("min " + min + "  mz" + mz)
//   }
//   return { min }
// }

// console.log(min())

//check wheather the elements present in the arry is greater than 0 or not

// const ch = () => {
//   let ch1 = prompt("enter the array size")
//   cha = []
//   for (let chi = 0; chi < ch1; chi++) {
//     cha.push(prompt("enter the valiue " + chi))
//   }
//   console.log(cha)
//   let chp = 0, chn = 0
//   for (let chc of cha) {
//     if (chc > 0) {
//       console.log("positive " + chc)
//       chp++;
//     }
//     else {
//       console.log("negative " + chc)
//       chn++;
//     }
//   }
//   console.log("the no of positive " + chp)
//   console.log("the no of negative " + chn)
// }
// ch();