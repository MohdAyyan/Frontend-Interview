// Oure Function vS Impure Function

// Pure Function doesn't depend on outer variable
function pureAdd(a,b) {
    return a + b;
}

// Impure Function depend on outer variable
let n = 10

// Impure Function depend on outer variable
function impureAdd(a){
    return a + n;
}

pureAdd(10,20) // 30
pureAdd(10,20) // 30

impureAdd(10) // 20
impureAdd(10) // 20