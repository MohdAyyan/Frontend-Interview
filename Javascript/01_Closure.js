// Closure Interview :- Function that remembers the variables from its outer scope even after the outer function has finished executing.

function outer() {
    let count = 0;
    function inner() {
     count++;
     console.log(count);
        
    }
}

const f1 = outer()
f1(); //1
f1(); //2

// const f2 = outer();
// f2(); //1
