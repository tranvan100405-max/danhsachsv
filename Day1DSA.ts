// let z = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > z) {
//     z = numbers[i];
//   }
// }

// console.log(z);

// let min = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < min) min = numbers[i];
// }

// console.log(min);

// function countIndex(number: number[], s: number): number {
//   let cout = 0;

//   for (let i = 0; i < number.length; i++) {
//     if (number[i] == s) {
//       cout++;
//     }
//   }

//   return cout;
// }

// function coutEven(number: number[]) {
//   let cou = 0;
//   const a = [];
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0) {
//       cou++;
//       a.push(number[i]);
//     }
//   }
//   console.log(`Có tất cả ${cou} chẵn !`);
//   console.log(a);
// }
// function sumTwoN(nu: number[], a: number) {
//   for (let i = 0; i < nu.length; i++)
//     for (let j = i + 1; j < nu.length; j++) {
//       const b = nu[i] + nu[j];
//       if (i != j && b === a)
//         return `Tổng 2 số bất kì bằng ${a} là: ${nu[i]} va ${nu[j]}`;
//     }

//   return "khong tim thay";
// }

// function sum(num: number[], n: number) {
//   const map = new Map<number, number>();
//   for (let i = 0; i < num.length; i++) {
//     const need = n - num[i];

//     if (map.has(need)) {
//       const c = map.get(need)!;
//       return [c, i];
//     }
//     map.set(num[i], i);
//   }
//   return [];
// }

// function containsDuplicate(numb: number[]): boolean {
//   const map = new Map<number, number>();
//   for (let i = 0; i < numb.length; i++) {
//     if (map.has(numb[i])) {
//       return true;
//     }
//     map.set(numb[i], i);
//   }
//   return false;
// }

// function frequency(numbers: number[]): Map<number, number> {
//   const map = new Map<number, number>();
//   for (let i = 0; i < numbers.length; i++) {
//     if (map.has(numbers[i])) {
//       map.set(numbers[i], map.get(numbers[i])! + 1);
//     } else {
//       map.set(numbers[i], 1);
//     }
//   }
//   return map;
// }

// const co = frequency(numbers);
// console.log(co);

// function solanmax(num: number[]) {
//   const map = new Map<number, number>();
//   let maxCount = 0;
//   let result = 0;
//   for (let i = 0; i < num.length; i++) {
//     if (map.has(num[i])) {
//       map.set(num[i], map.get(num[i])! + 1);
//     } else {
//       map.set(num[i], 1);
//     }
//   }
//   const numb = Math.max(...map.values());
//   console.log(numb);
//   for (const [key, value] of map) {
//     if (value === numb) {
//       maxCount = value;
//       result = key;
//     }
//   }

//   return `So xuat hien nhieu nhat la: ${result} co ${maxCount} xuat hien.`;
// }

// const t = solanmax(numbers);
// console.log(t);
// const w = sumTwoN(numbers, 11);
// console.log(w);
// // coutEven(numbers);
// // const v = countIndex(numbers, 2);
// // console.log(v);

// function charFrequency(str: string): Map<string, number> {
//   const map = new Map<string, number>();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == ",") {
//       continue;
//     } else if (map.has(str[i])) {
//       map.set(str[i], map.get(str[i])! + 1);
//     } else map.set(str[i], 1);
//   }
//   return map;
// }

// function findItemMax(str: string) {
//   let maxC = 0;
//   let inPu: string[] = [];
//   const a = charFrequency(str);

//   const b = Math.max(...a.values());

//   for (const [key, value] of a) {
//     if (value === b) {
//       inPu.push(key);
//       maxC = value;
//     }
//   }

//   return `Chu cai ${inPu.join(",")} co lan xuat hien nhieu nhat la: ${maxC} lan!`;
// }

// const a = "a,b,c,d,e,f,a,b,a,c,a,c,c";
// console.log(charFrequency(a));
// console.log(findItemMax(a));

// function twoSum(numbers: number[], target: number): number[] {
//   const a: number[] = [];
//   let left = 0;
//   let right = numbers.length - 1;
//   while (left < right) {
//     const sum = numbers[left] + numbers[right];
//     console.log(sum);

//     if (sum == target) {
//       a.push(numbers[left]);
//       a.push(numbers[right]);
//       return a;
//     } else if (sum < target) {
//       left++;
//     } else right--;
//   }
//   return [];
// }

// console.log(twoSum(numbers, 15));

// function validate(str: string): boolean {
//   let left = 0;
//   let right = str.length - 1;
//   while (left < right) {
//     left++;
//     right--;
//     if (str[left] !== str[right]) {
//       return false;
//     }
//   }
//   return true;
// }

// let str = "acabaca";
// console.log(validate(str));

// const numbers = [2, 3, 4, 7, 2, 9, 5, 1, 2, 6];

// function sum3num(num: number[], k: number) {
//   let sumF = num[0] + num[1] + num[2];
//   let max = sumF;

//   for (let i = 0; i < num.length + 2; i++) {
//     sumF = sumF - num[i] + num[i + 3];
//     if (sumF > max) {
//       max = sumF;
//     }
//   }
//   return max;
// }

// const numbers = [4, 2, 7, 1, 8, 3, 5, 2];

// function sum3Min(num: number[], k: number) {
//   let sumF = 0;

//   for (let i = 0; i < k; i++) {
//     sumF += num[i];
//   }

//   let min = sumF;
//   for (let i = 0; i < num.length - k; i++) {
//     sumF = sumF - num[i] + num[i + k];

//     if (sumF < min) {
//       min = sumF;
//     }
//   }
//   return min;
// }

// console.log(sum3Min(numbers, 2));

/// Do do dai
const numbers = [1, 2, 3, 1, 2, 2, 3, 1];

// function sizeOfNum(num: number[], n: number) {
//   let su: number[] = [];
//   let sum_m = 0;
//   let max = 0;
//   for (let i = 0; i < num.length; i++) {
//     if (sum_m < n) {
//       sum_m += num[i];
//       su.push(num[i]);
//       //sum_m += num[i + 1];
//     }
//     while (sum_m > n) {
//       sum_m -= su[0];
//       su.shift();
//     }

//     if (su.length > max) {
//       max = su.length;
//     }
//   }
//   return max;
// }

// console.log(sizeOfNum(numbers, 10));

// function sizeof(num: number[], n: number) {
//   let left = 0,
//     sum = 0,
//     max = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += num[i];
//     while (sum > n) {
//       sum -= num[left];
//       left++;
//     }

//     const leng = i - left + 1;
//     if (leng > max) {
//       max = leng;
//     }
//   }

//   return max;
// }
// console.log(sizeof(numbers, 10));

// function unque(num: number[]) {
//   let left = 0;
//   let max = 0;
//   const set = new Set<number>();
//   let result: number[] = [];

//   for (let i = 0; i < num.length; i++) {
//     while (set.has(num[i])) {
//       set.delete(num[left]);
//       left++;
//     }
//     set.add(num[i]);

//     const lengh = i - left + 1;
//     if (lengh > max) {
//       max = lengh;
//       result = Array.from(set);
//     }
//   }
//   return `Day so co tong lon nhat kh trung nhau la ${result} do dai = ${max}`;
// }

// console.log(unque(numbers));

// function findSizeOfMin(num: number[], k: number) {
//   let left = 0;
//   let min = Infinity;
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += num[i];
//     while (sum >= k) {
//       const lengh = i - left + 1;
//       if (lengh < min) {
//         min = lengh;
//       }

//       sum -= num[left];
//       left++;
//     }
//   }

//   return min;
// }

// console.log(findSizeOfMin(numbers, 7));
let st: string = "abcddsadfhggaahaj";

// function competion(str: string) {
//   let left = 0;
//   let max = 0;
//   const set = new Set<string>();

//   for (let i = 0; i < str.length; i++) {
//     while (set.has(str[i])) {
//       set.delete(str[left]);
//       left++;
//     }

//     set.add(str[i]);

//     const lengh = i - left + 1;
//     if (lengh > max) {
//       max = lengh;
//     }
//   }

//   return max;
// }

//console.log(competion(st));

function fillet(str: string, k: number) {
  const map = new Map<string, number>();
  let max = 0;
  let left = 0;
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], (map.get(str[i]) ?? 0) + 1);
    while (map.size > k) {
      map.set(str[left], map.get(str[left])! - 1);
      if (map.get(str[left]) == 0) {
        map.delete(str[left]);
      }
      left++;
    }
    const lengh = i - left + 1;
    if (lengh > max) {
      max = lengh;
    }
  }
  return max;
}

console.log(fillet(st, 3));

const s = "{([])}";

function check(str: string): boolean {
  const stack: string[] = [];
  let top;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "{" || str[i] == "[" || str[i] == "(") {
      stack.push(str[i]);
    } else {
      top = stack.pop();

      if (
        (str[i] == "]" && top !== "[") ||
        (str[i] == ")" && top !== "(") ||
        (str[i] == "}" && top !== "{")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0 ? true : false;
}

console.log(check("{([])}")); // true
console.log(check("([)]")); // false
console.log(check("()[]{}")); // true
console.log(check("(((")); // false
//console.log(check(s));
