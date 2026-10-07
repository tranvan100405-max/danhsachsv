// class minStack {
//   private stack: number[] = [];
//   private minStack: number[] = [];

//   /**
//    * push
//    */
//   public push(x: number) {
//     this.stack.push(x);

//     if (this.minStack.length === 0) {
//       this.minStack.push(x);
//     } else {
//       const min = this.minStack[this.minStack.length - 1];
//       if (x < min) {
//         this.minStack.push(x);
//       } else this.minStack.push(min);
//     }
//   }
//   /**
//    * pop
//    */
//   public pop() {
//     this.stack.pop();
//     this.minStack.pop();
//   }

//   /**
//    * top
//    */
//   public top(): number {
//     const a = this.stack[this.stack.length - 1];

//     return a;
//   }

//   public getMin(): number {
//     return this.minStack[this.minStack.length - 1];
//   }
// }

// const s = new minStack();

// s.push(5);
// s.push(3);
// s.push(7);
// s.push(2);

// console.log(s.getMin()); // 2

// s.pop();

// console.log(s.top()); // 7
// console.log(s.getMin()); // 3

function nextGreater(num: number[]) {
  const stack: number[] = [];
  const result: number[] = [];

  for (let i = num.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= num[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      result.push(-1);
    } else result.push(stack[stack.length - 1]);
    stack.push(num[i]);
  }
  return result.reverse();
}

const num = [2, 3, 5, 3, 6, 7, 8, 9];
console.log(nextGreater(num));

// const tw = [24, 43, 33, 44, 23, 34, 32, 22, 23, 31, 45];
// function checkTem(tem: number[]) {
//   const stack: number[] = [];
//   const result: number[] = []; //new Array(tem.length).fill(0);

//   for (let i = tem.length - 1; i >= 0; i--) {
//     while (stack.length > 0 && tem[stack[stack.length - 1]] <= tem[i]) {
//       stack.pop();
//     }

//     if (stack.length > 0) {
//       result[i] = stack[stack.length - 1] - i;
//     } else {
//       result[i] = 0;
//     }
//     stack.push(i);
//   }

//   return result;
// }

// console.log(checkTem(tw));

// const height = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function trap(height: number[]) {
//   const stack: number[] = [];

//   let max = 0;
//   height.push(0);

//   for (let i = 0; i < height.length; i++) {
//     let width = 0;
//     while (stack.length > 0 && height[stack[stack.length - 1]] > height[i]) {
//       const top = stack.pop()!;
//       const h = height[top];

//       if (stack.length > 0) {
//         width = i - stack[stack.length - 1] - 1;
//       } else {
//         width = i;
//       }

//       const st = h * width;
//       console.log(`h: ${h}, width: ${width}, st: ${st}`);
//       if (st > max) {
//         max = st;
//       }
//     }
//     stack.push(i);
//   }
//   return max;
// }

// console.log(trap(height));
// const height = [1, 2, -3, 10, -4, -5, 6, -7, 8, 9];
// function asteroidCollision(asteroids: number[]) {
//   const stack: number[] = [];

//   for (let i = 0; i < asteroids.length; i++) {
//     const a = asteroids[i];

//     let alive = true;
//     while (stack.length > 0 && a < 0 && stack[stack.length - 1] > 0) {
//       let top = 0;
//       top = stack[stack.length - 1];
//       if (Math.abs(top) < Math.abs(a)) {
//         stack.pop();
//         alive = true;
//       } else if (Math.abs(top) === Math.abs(a)) {
//         stack.pop();
//         alive = false;
//         break;
//       } else {
//         alive = false;
//         break;
//       }
//     }

//     if (alive === true) {
//       stack.push(a);
//     }
//   }
//   return stack;
// }

// console.log(asteroidCollision(height));
// console.log(asteroidCollision([10, 2, -5]));
// console.log(asteroidCollision([8, -8]));

class MyStack {
  private tem: number[];

  constructor(tem: number[]) {
    this.tem = tem;
  }

  analy(): number[] {
    const stack: number[] = [];
    let result: number[] = [];
    for (let i = this.tem.length - 1; i >= 0; i--) {
      while (stack.length > 0 && stack[stack.length - 1] <= this.tem[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        result.push(-1);
      } else {
        result.push(stack[stack.length - 1]);
      }

      stack.push(this.tem[i]);
    }

    return result.reverse();
  }
}

const analyzer = new MyStack([2, 3, 5, 3, 6, 7, 8, 9]);

console.log(analyzer.analy());
