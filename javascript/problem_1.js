function isValidParentheses(s) {
    // keep opening brackets in a stack, check each closing bracket against the top of the stack, and make sure the stack is empty at the end.

    const stack = [];

    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === ')' || char === '}' || char === ']') {

            if (stack.length === 0 || stack[stack.length - 1] !== bracketMap[char]) {
                return false;
            }

            stack.pop();
        } else {

            stack.push(char);
        }
    }

    return stack.length === 0;
}

console.log("=== Problem 1: Valid Parentheses ===\n");

const test1 = "()";
console.log(`Test 1: "${test1}"`);
console.log(`Result: ${isValidParentheses(test1)}`);
console.log(`Expected: true\n`);

const test2 = "()[]{}" ;
console.log(`Test 2: "${test2}"`);
console.log(`Result: ${isValidParentheses(test2)}`);
console.log(`Expected: true\n`);

const test3 = "(]";
console.log(`Test 3: "${test3}"`);
console.log(`Result: ${isValidParentheses(test3)}`);
console.log(`Expected: false\n`);

const test4 = "([)]";
console.log(`Test 4: "${test4}"`);
console.log(`Result: ${isValidParentheses(test4)}`);
console.log(`Expected: false\n`);

const test5 = "{[]}";
console.log(`Test 5: "${test5}"`);
console.log(`Result: ${isValidParentheses(test5)}`);
console.log(`Expected: true\n`);

const test6 = "";
console.log(`Test 6: "${test6}"`);
console.log(`Result: ${isValidParentheses(test6)}`);
console.log(`Expected: true\n`);

const test7 = "{[";
console.log(`Test 7: "${test7}"`);
console.log(`Result: ${isValidParentheses(test7)}`);
console.log(`Expected: false\n`);

const test8 = "}]";
console.log(`Test 8: "${test8}"`);
console.log(`Result: ${isValidParentheses(test8)}`);
console.log(`Expected: false\n`);

