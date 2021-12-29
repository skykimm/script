const ar = [1, 2, 3];

for (const element of ar){
    if(element === 1) continue;

    document.write(element);
}

document.write('<br>');

const arr1 = [2, 1 , 3];
const text = ['apple','banana','orange'];

arr1.sort();
document.write(arr1 + '<br>'); 

text.sort();
document.write(text + '<br>'); 


const arr2 = [2, 1, 3, 10];

arr2.sort();
document.writeln(arr2 + '<br>'); 

// const plus = [2,1,3,10];
// plus.sort(function(a, b) {
//     return a - b;
// });
// document.write(plus+'<br>');

const plus = [2,1,3,10];
plus.sort(function(a, b) {
    return b - a;
});
document.write(plus+'<br>');

const i = ['a','b','c','b'];
let dub = false;

for(let i = 0; i < i.length; i++){
    const curr = i[i];

    for(let j = i+1; j < i.length; j++){
        if(curr === i[j]){
            dub = true;
            break;
        }
    }
    if(dub){
        break;
    }
}
document.write('dup : ' + dub + '<br>');

// const und = [1, under, null, false, '', '   '];
// const newArr = und.filter(
//     (element, i) => element !== undefined);

//     newArr.forEach((e,i) => {
//         document.write(i + ' : ' + e + '<br>')
//     })

const und = [1, undefined, null, false];
und.filter((element, i) => {
    document.write(i + '<br>')
});

const fru = ['apple', 'banana', 'orange'];
const str1 = fru.join();
const str2 = fru.join('-');
const str3 = fru.join(' ');

document.write('str1 : ' + str1 + '<br>');
document.write('str2 : ' + str2 + '<br>');
document.write('str3 : ' + str3 + '<br>');

document.write('fru.toString() : ' + fru.toString() + '<br>');