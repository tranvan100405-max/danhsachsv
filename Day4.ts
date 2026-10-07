// function getData<T>(da: T) : T {
//     console.log("Data: ", typeof da);
//     return da;
// };

// getData("Hello World");
// getData(123);


// function getData3<T>(da: T[]): T {
//     console.log("Data: ", typeof da);
//     return da[0];
// };

// const a = getData3([1,2,4,6]);
// console.log(typeof a);
// const b = getData3(["Van","Dwight","Tran"]);
// console.log(typeof b);


type Users = {
    id: number;
    name: string;
    email: string;
}

async function gettUser<T>(url: string):Promise<T> {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const usser = async (X: number) : Promise<Users> => {
   const a = await gettUser<Users>(`http://localhost:8000/users/${X}`);
   return a;
}

usser(1).then((data) => {
    console.log("User data:", data);
});

async function main() {
    const a = await gettUser<Users>(`http://localhost:8000/users/1`);

    const b = await gettUser<Users[]>(`http://localhost:8000/users`);
    console.log(a);
    console.log(b);
}

main();