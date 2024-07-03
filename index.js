// Code your solutions in this file
// function writeCards(namesArray, eventName) {
//     for (let i = 0; i < namesArray.length; i++) {
//         let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
//         console.log(message);
//     }
//     names = ['thanks', 'grateful']
// }
 
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ["teddy bear", "drone" ,"doll"];
function wrapGifts(gifts){
for (let i=0; i<gifts.length; i++){
    debugger;
}
return gifts;
}
wrapGifts(gifts);

names =["Jane", "John", "Kevin", "Rose"];
function writeCards(names, birthday){
     let messages = [];
     for (let i=0; i<names.length; i++){
         messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
         }
     return messages;
}



function countDown(){
let countdown = 10;
while (countdown >= 0){
    console.log(countdown)
    countdown--;
}
}