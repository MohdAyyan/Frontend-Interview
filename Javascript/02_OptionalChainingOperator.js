// Optional Chaining Operator

const user ={
    profile:{
        name: "Ayyan"
    }
}

// console.log(user.profile.city); // error
console.log(user?.profile?.city); // undefined

