// Data Structure: Stack
// Implementation: Array
// Time Complexity: O(1)

let stack = [];
let top = -1;

function stackPush(x) {
  stack[++top] = x;
}

function stackPop() {
  if (top === -1) {
    console.log('Stack is empty.');
    return;
  }
  top--;
}

function stackTop() {
  if (top === -1) {
    console.log('Stack is empty.');
    return;
  }
  console.log(stack[top]);
}

function stackPrint() {
  if (top === -1) {
    console.log('Stack is empty.');
    return;
  }
  for (let i = 0; i <= top; i++) {
    console.log(stack[i]);
  }
}

stackPush(1);
stackPush(2);
stackPush(3);
stackPush(4);
stackPush(5);
stackPush(6);
stackPush(7);

stackTop();

stackPrint();

stackPop();
stackPop();
stackPop();

stackTop();

stackPrint();
