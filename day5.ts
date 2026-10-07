// type User = {
//     id: number;
//     name: string;
//     email: string;
// };

// function getProperty<T, K extends keyof T>(
//     obj: T,
//     key: K
// ) {
//     return obj[key];
// }

// const user: User[] = [
//     {
//         id: 1,
//         name: "John Doe",
//         email: "john.doe@example.com"
//     }
// ,
//     {
//         id: 2,
//         name: "Jane Smith",
//         email: "jane.smith@example.com"
//     }

//     ,
//     {
//         id: 3,
//         name: "Alice Johnson",
//         email: "alice.johnson@example.com"  }

// ];

// const a = user[0].id = 2;

// const userId = getProperty(user[0], "id");
// console.log("User ID:", userId); // Output: User ID: 1
// const userName = getProperty(user[2], "name");
// console.log("User Name:", userName); // Output: User Name: Alice Johnson
// const userEmail = getProperty(user[0], "email");
// console.log("User Email:", userEmail); // Output: User Email: john.doe@example.com
