// Closure Interview Trick

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

const f2 = outer();
f2(); //1
