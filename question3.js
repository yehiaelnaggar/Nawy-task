const readlineSync = require('readline-sync');

function isValid(s) {
    const stack = [];
    let top = -1; 
    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')', '}', ']'];


    function getMatchingOpenBracket(closeBracket) {
        switch (closeBracket) {
            case ')':
                return '(';
            case '}':
                return '{';
            case ']':
                return '[';
            default:
                return ''; 
        }
    }

    for (let i = 0; i < s.length; i++) {
        const ch = s.charAt(i);

        if (openBrackets.includes(ch)) {
            stack[++top] = ch; 
        } else if (closeBrackets.includes(ch)) {
            if (top === -1 || stack[top] !== getMatchingOpenBracket(ch)) {
                return false;
            }
            top--; 
        }
    }

    return top === -1; 
}
const input = readlineSync.question("Enter a string containing parentheses, brackets, and curly braces:");
console.log(isValid(input));
