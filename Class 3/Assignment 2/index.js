/*Assignment 2: Operator Precedence*
Objective: Understand how operator precedence affects the order of evaluation.

*Instructions:* Write a JavaScript program that includes a complex mathematical expression with multiple arithmetic operators.
Use parentheses to group certain operations and demonstrate how operator precedence influences the result.
Make sure to explain in comments how operator precedence affects the order of evaluation in your expression.

For example, consider an expression like `2 + 3 * 4 / 2 - 1`.
Use comments to describe which part of the expression is evaluated first,
the intermediate results, and the final result.*/
var x = 2 + 3 * 4 / 2 - 1;
/* 1st operation= 2 + 12/2 -1
   2nd operation = 2 + 6 -1
   3rd operation = 8 - 1
   4th operation = 7
*/
/* in this equation, this is a badmass rule which is help to multiply first then divide and
 then addition and lastly substriction */
console.log(x);
