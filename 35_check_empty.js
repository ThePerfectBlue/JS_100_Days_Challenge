// check if given object empty or not

// function isEmpty(obj){
//     for(let key in obj){
//         if( obj.hasOwnProperty(key)){
//             return 'not empty'
//         } 
//     }
//     return 'is empty';
// }

function isEmpty(obj){
    return Object.keys(obj).length === 0 ? 'empty' : 'not empty';
}

console.log(isEmpty({}));
console.log(isEmpty({name: null}));
console.log(isEmpty({name: undefined}));
console.log(isEmpty({name: "vinod"}));