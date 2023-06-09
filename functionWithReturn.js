/*        -----> Function With Return <-----

We can pass values into a function with arguments. You can use a return statement 
to send a value back out of a function.

Example

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
answer has the value 8.

plusThree takes an argument for num and returns a value equal to num + 3.

Create a function timesFive that accepts one argument, multiplies it by 5, and 
returns the new value.
*/

// Passed:timesFive should be a function
// Passed:timesFive(5) should return 25
// Passed:timesFive(2) should return 10
// Passed:timesFive(0) should return 0

function timesFive(num) {
    return num * 5
  }
  const answer = timesFive(5)