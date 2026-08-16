// Remove Duplicates


function removeDuplicates(str) {
    let result =""
    for (let i = 0; i < str.length; i++) {
        let found = false;
        for (let j = 0; j < result.length; j++) {
            if (str[i] === result[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result += str[i];
        }
    }
    return result;
}

console.log(removeDuplicates("programming")); // "progamin"

const arr = [1,2,3,5,6,7,7]

const n_unique = [...new Set(arr)]
console.log(n_unique); // [1,2,3,5,6,7]

const unique = []

for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
        unique.push(arr[i]);
    }
}

console.log(unique);

