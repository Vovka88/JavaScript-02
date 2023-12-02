// const friends = ['a', 'b', 'c', 'd', true, false, 12];
// const a = 10;
// const b = a;
// console.log(a+1, b);

// let c = [1, 2, 3];
// let d = c;
// c = [1, 2, 3, 4]
// console.log(d === c);
// console.log(c, d);

// const friends = ["Sofia", "Bogdan", "Igor", "Volodimir", "Olexandr"];
// // for (let index = 0; index < friends.length; index++) {
// //     friends[index] += `-${index}`
// // }

// for(let friend of friends){
//     console.log(friend);
// }

// console.log(friends);


// for (const value of card) {
//     result += value;
// }

// console.log(result);

// for (const value of card) {
//     if (value % 2 !== 0) {
//         console.log(`Операцію номер ${value} треба пропустити`);;
//     }
//     else {
//         result += value
//     }
// }

// const card = [54, 33, 71, 21, 66, 89];
// let result = 0;
// let min = card[0];
// for (const iterator of card) {
//     if(min > iterator) min = iterator;
// }

// console.log(min);

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';

for (const iterator of logins) {
    if(iterator === loginToFind) 
    {
        console.log("Логін знайденно");
        break;
    }
}