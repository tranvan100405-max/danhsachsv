// let con : number = 10;
// console.log(con);

// function add(a: number, b: number): number {
//     return a + b;
// }
// console.log(add(5, 3));

// async function getFavoriteNumber(): Promise<number> {
//   return 26;
// }
// getFavoriteNumber().then((favNumber) => console.log(favNumber));

// const array: string[] = ["apple", "banana", "cherry"];
// array.forEach( (a)=> console.log(a.toUpperCase()));

// async function printUppercase(obj: {firstName: string, lastName ?: string}){
//    await console.log(obj.firstName.toUpperCase());

//     const lastName = obj.lastName?.toUpperCase();
//     if(lastName !== undefined){
//         await console.log(lastName);
//     }
// }

//  printUppercase({firstName: "john", lastName: "doe"});

//  function welcomePeople(x: string[] | string) {
//   if (Array.isArray(x)) {
//     // Here: 'x' is 'string[]'
//     console.log("Hello, " + x.join(" and "));
//   } else {
//     // Here: 'x' is 'string'
//     console.log("Welcome lone traveler " + x);
//   }
// }
// welcomePeople(["Alice", "Bob", "Charlie"]);
// welcomePeople("David");

// function getFirstThree(x: number[] | string) {
//   return x.slice(1, 10);
// }
// console.log(getFirstThree([1, 2, 3, 4, 5]));
// console.log(getFirstThree("Hello, world!"));

// type UserInputSanitizedString = string;
 
// function sanitizeInput(str: string): UserInputSanitizedString {
//   return sanitize(str);
// }
 
// // Create a sanitized input
// let userInput = sanitizeInput(getInput());
 
// // Can still be re-assigned with a string though
// function sanitize(str: string): string {
//     return str.trim();
// }

// function getInput(): string {
//     return "   user input   ";
// }

// console.log(userInput); // Output: "user input"

// enum Role {
//     Admin = "ADMIN",
//     User = "USER",
//     Guest = "GUEST"
// }

// type User = {
//     name: string;
//     role: Role;
// };

// const user: User = {
//     name: "Alice",
//     role: Role.Admin
// };

// console.log(`User: ${user.name}, Role: ${user.role}`);
// interface User {
//      id: number;
//     name: string;
//     email: string;
// }

// const user: User = {
//     id: 1,
//     name: "John Doe",
//     email: "ccbajcajnc.com"};

//  const o = user.id = 10; // This would cause a compile error since id is readonly
// console.log(user);
// async function getUser(): Promise<User[]> {
// const a = await fetch(" http://localhost:8000/users/1");
// const data = await a.json();
// //console.log(data);
// const user: User = {
//     id: data.id,
//     name: data.name,
//     email: data.email
// };
// return [user];
// }

// async function main() {
//     const u = await getUser();

//     console.log(u);
// }

// main();