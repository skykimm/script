const arr = [1,1,'1',1];

function find(e){
    if(e === '1') return true;
}
document.write(arr.findIndex(find)); //2

document.write('<br>');

const arr2 = [1,2,3,4,'5'];

function find2(el){
    if(el % 2 ===0) return true;
}
document.write(arr2.findIndex(find2));

document.write('<br>');

const arr3 = [
    {name : 'banana', price: 1000},
    {name : 'apple', price:1500},
    {name : 'orange', price: 2000}
];

function findApple(element)  {
    if(element.name === 'apple') return true;
}

document.writeln(arr3.findIndex(findApple)); // 1

document.write('<br>');

const text = [1,2];
let ele = true;

if(text.indexOf(3) < 0){
    ele = false;
}
document.write(ele + '<br>');

document.writeln(text.includes(1)); // true
document.writeln(text.includes(3)); // false
document.writeln(text.includes(1, 1)); // false
document.writeln(text.includes(1, 2)); // false
document.writeln(text.includes(2, -1)); // true

document.write('<br>');

const text2 = [1, 2, 3, 2];

function findNumberTwo(element) {
  if(element === 2) {
    return true;
  }
}
document.writeln(text2.findIndex(findNumberTwo)); // 1
document.writeln(text2.findIndex(findNumberTwo) > -1); // true

document.write('<br>');

const fo = ['a','b','c','d'];
let count = 0;

for(let i =0; i < fo.length; i++){
    if(fo[i] === 'a'){
        count++;
    }
}
document.write(count + '<br>'); //1

const fo2 = ['a', 'b', 'c', 'a'];

// 배열에서 'a' 개수 구하기
let count2 
  = fo2.filter(element => 'a' === element).length;

document.write(count2 + '<br>');

let dle = ['a,','b','c'];
dle = [];
document.write(dle.length + '<br>');

let dle2 = ['a,','b','c'];
let dle3 = dle2;
dle2.length = 0;

document.write(dle2.length+ '<br>'); //0
document.write(dle3.length+ '<br><br>'); //0

let spl = ['a','b','b','c'];

for(let i = 0; i <spl.length; i++){
    if(spl[i] === 'b'){
        spl.splice(i, 1);
        i--;
    }
}
document.write(spl + '<br>');

const Arr = [1, 2, 3];

const result = Arr.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);

document.write(result+ '<br>'); // 6

//평균구하기
const reduce = [1, 2, 3];

const result2 = reduce.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);
const average = result2 / reduce.length;

document.write(average+'<br>'); // 2


const reduce2 = ['a', 'b', 'c'];

const result3 = reduce2.reduceRight(function (str, currValue) {
  return str + currValue;
}, '');

document.write(result3+'<br>'); // cba