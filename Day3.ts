// interface User{
//     id: number;
//     name: string;
//     email: string;

// }

// async function getUser(id: number): Promise<User> {
//     const res =  await  fetch(` http://localhost:8000/users/${id}`);
//     const data = await res.json();
  
//     return data;
// } 

// async function main() {
//     const user = await getUser(2);
//     console.log(user);

// }

// main(); 

// type ID = number | string;
// const userId: ID = "tranvan";
// console.log("userId: ", userId);

// type User = {
//     id: number;
//     name: string;
//     email: string;
// }

// type Accout = {
//     id: number;
//     username: string;
//     password: string;
// }

// type UserAccount = User & Accout;

// const userAccount: UserAccount = {
//     id: 1,
//     name: "Tran Van",
//     email: "tranvan@example.com",
//     username: "tranvan",
//     password: "password123"
// };
// console.log("User Account: ", userAccount);

// interface User {
//     id: number;
//     name: string;
//     email: string;
// }

// type createUser = {
//     name: string;
//     email: string;
// }

// function createUser(user: createUser): User {
//     const newUser: User = {
//         id: Math.ceil(Math.random() * 100),// random ra 1 số thực ngẫu nhiên từ 0 - 1 sau đó làm tròn xuống(floor) còn làm tròn lên (ceil)

//         name: user.name,
//         email: user.email
//     };

//     return newUser;
    
// }

// const acreateUser = createUser({ name: "Tran Van", email: "tranvan@example.com" });
// console.log("Created User: ", acreateUser); 


// function errorr(): never {
//     throw new Error("An error occurred");
// }

// //errorr();

// type ID = number | string;
// function printId(id: ID): void {
//     if (typeof id === "string") {
//         console.log("ID is a string: ", id.toUpperCase());
//     } else {
//         console.log("ID is a number: ", id);
//     }   }  

//     printId("tranvan");
//     printId(123);

// type Admin = {
   
//     name: string;
//     role:  "admin";
// }

// type Customer = {
    
//     name: string;
//    role:"customer";
// }

// type User = Admin | Customer;
// const user1: User ={
//     name: "John Doe",
//     role: "admin"
// }

// const user2: User = {
//     name: "Jane Smith",
//     role: "customer"
// }   

// function getUser(user: User): void {
//     if (user.role === "admin") {
//         console.log("Admin User: ", user.name);
//     } else {
//         console.log("Customer User: ", user.name);
//     }      }
// getUser(user1);
// getUser(user2);

// function getallUsers(users: User[]): void {
//     users.forEach((user) => {
//         if (user.role === "admin") {
//             console.log("Admin User: ", user.name);
//         } else {
//             console.log("Customer User: ", user.name);
//         }
//     });}
//     getallUsers([user1, user2]);
    

interface User{
    id: number;
    name: string;
    email: string;
}

type createUser = {
    name: string;
    email: string;
}

async function getUser(id: ID): Promise<User>{
    const res =  await fetch(`http://localhost:8000/users/${id}`);
    const data = await res.json();
    return data;
    
}

type ID = number | string;
function printId( id: ID): void{
    if(typeof id === "number"){
        console.log("ID is a number: ", id);
    }
    else{
        console.log("ID is a string: ", id.toUpperCase());
    }
}

function prinUser(id: ID): Promise<User>{
    return getUser(id);}

getUser(1).then((user) => {
    console.log("Users: ", user);
}).catch((error) => {
    console.error("Error: ", error);
});

prinUser("id02").then((user) =>{
    console.log("User: ", user);
}).catch((error) => {
    console.error("Error: ", error);
});

// printId(1);
// printId("id02");