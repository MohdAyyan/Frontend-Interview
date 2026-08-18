
const users = [
    { name: "Ayyan", city:"Aurangabad"},
    { name: "John", city:"Delhi"},
    { name: "Karan", city:"Aurangabad"},
    { name: "Kavya", city:"Mumbai"},
    { name: "Parth", city:"Pune"},
    { name: "Kavya", city:"Pune"}
]

const grouped = users.reduce((acc, user)=>{
   ( acc[user.city] = acc[user.city] || []).push(user)
   return acc
    
},{})

console.log(grouped);
