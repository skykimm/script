// 배열을 선언하는 2가지!

// 대괄호[] 를 이용한 배열선언
document.write('--대괄호[] 를 이용한 배열 선언-- <br>');
const arr1 = [];
const arr2 = ['white', 'red','yellow'];

document.write('arr1 :' + arr1 + '<br>');
document.write('arr1의길이 : ' + arr1.length + '<br><br>');

document.write('arr2 :' + arr2 + '<br>');
document.write('arr2의길이 : ' + arr2.length + '<br><br>');

const arr3 = ['apple','banana',1,['a','b']];

document.write('arr3 : ' + arr3 + '<br>');
document.write('arr3의길이 : ' + arr3.length + '<br><br>');

const text1 = new Array();
const text2 = new Array(3);
const text3 = new Array('red','black','green');

document.write('arr1 : ' + text1 + '<br>');
document.write('arr1의길이 : ' + text1.length + '<br><br>');

document.write('arr2 : ' + text2 + '<br>');
document.write('arr2[1] : ' + text2[1] + '<br>');
document.write('arr2의길이 : ' + text2.length + '<br><br>');

document.write('arr3 : ' + text3 + '<br>');
document.write('arr3[1] : ' + text3[1] + '<br>');
document.write('arr3의길이 : ' + text3.length + '<br><br>');

const color = ['red','yellow','black','green'];

document.write(color.length); //4
document.write('<br>');

color.length = 2;
document.write(color.length); //2
document.write('<br>');
document.write(color);
document.write('<br><br>');


document.write('--배열 값 추가, 삭제하기-- <br>');
// 배열값 추가 삭제하기
// 배열 맨 앞 추가 : unshift();
// 배열 맨 앞 제거 : shift();
// 배열 맨 뒤에 값 추가 : push();
// 배열 맨 뒤에 값 제거 : pop();
// 배열 중간에 값 추가, 삭제 : splice();


// 배열 맨 앞 추가
document.write('--배열 맨 앞 추가-- <br>');
const ele = ['apple', 'banana', 'orange'];
const legnth = ele.unshift('one');

document.write(legnth +'<br>');
document.write(ele + '<br><br>');

document.write('--배열 맨 앞 제거-- <br>');
const del = ['apple', 'banana'];
// 1. apple 삭제
let removed = del.shift();
document.write('1 . remove : ' + removed + '<br>');
document.write('1 . arr : ' + del + '<br><br>');

// 2. banana 삭제
removed = del.shift();
document.write('2. remove : ' + removed + '<br>');
document.write('2 . arr : ' + del + '<br><br>');

// 더이상 삭제없음
removed = del.shift();
document.write('3 . remove : ' + removed +'<br>');
document.write('3 . arr : ' + del + '<br><br>');

// document.write('--배열 맨 뒤에 값 추가-- <br>');
// const last = ['apple', 'banana'];
// const add = last.push('orange');

// document.write(add +'<br>');
// document.write(last+'<br>');

document.write('--배열 맨 뒤에 값 추가-- <br>');
const last = ['apple', 'banana', 'tomato'];
const add = last.push('orange');

document.write(add+'<br>');
document.write(last+'<br><br>');

document.write('--배열 맨 뒤에 값 제거-- <br>');
const last2 = ['apple', 'banana'];
let remove = last2.pop();

document.write('1. remove : ' + remove + '<br>');
document.write('1. arr : ' +  last2 + '<br><br>');

// 배열의 중간에 값 추가, 삭제하기
// splice();
document.write('--앞에 추가하기-- <br>');
// 앞에 추가
const array = [1, 2, 3];
array.splice(0,0,'a','b','c'); // a b 1 2 3
document.write(array + '<br><br>');

document.write('--뒤에 추가하기-- <br>');
// 뒤에 추가
const array2 = [1, 2, 3];
const array4 = ['a','b','c'];
const index = [1,2,3,'a','b','c'];

index.splice(array2.length,1,'4','5');
document.write(index + '<br><br>');

document.write('--중간에 추가하기-- <br>');
// 중간에 추가
const array3 = [1, 2, 3];
array3.splice(1,0,'a','b'); // 1 a b 2 3
document.write(array3 + '<br><br>');

// (시작점, 끝점 , '넣어야 할 것' , '넣어야 할 것');

// 배열 합치기 3가지 방법
document.write('--배열 합치기 3가지 방법-- <br>');
// concat();

const num = [1,2,3];
const newNum = num.concat('a',['b','c'],'abc');

document.write(num + '<br>');
document.write(newNum.length + '<br>');
document.write(newNum + '<br><br>');

const num1 = [1,2,3];
const num2 = [4,5,6];
const num3 = [7,8,9,];

const newNum2 = [
    num1,
    num2,
    num3
];

document.write(newNum2.length  + '<br>');
document.write(newNum2 + '<br><br>');
console.log(newNum2);

// *** newNum2.length = 9가 나오는데 왜일까?

const pu = [1,2,3];
const pu2 = [4,5,6];

pu.push(pu2);

document.write(pu.length +'<br>'); // 4
document.write(pu[0] + '<br>'); // 1
document.write(pu[1] + '<br>'); // 2
document.write(pu[2] + '<br>'); // 3
document.write(pu[3] + '<br><br>'); // 4,5,6

document.write('--배열 자르기-- <br>');
// slice();

const sl = ['a','b','c','d'];
const sl1 = sl.slice(1,3); // b,c
const sl2 = sl.slice(1); // b,c,d
const sl3 = sl.slice(-3,-1); // b,c

document.write(sl1 + '<br>');
document.write(sl2 + '<br>');
document.write(sl3 + '<br><br>');

document.write('--배열 같은 값으로 채우기-- <br>');
const fi = ['a','b','c','d'];
fi.fill('A');

document.write(fi + '<br>'); // AAAA

const fi2 = ['a','b','c','d'];
fi2.fill('A',1); // a A A A A
document.write(fi2 + '<br>'); // a A A A A

const fi3 = ['a','b','c','d'];
fi3.fill('A',1 ,3); // a A A d
document.write(fi3 + '<br>'); // a A A d

const fi4 = ['a','b','c','d'];
fi4.fill('A' , -3, -1); // a A A d;
document.write(fi4 + '<br><br>'); // a A A d

const fi5 = new Array(4).fill('A');
document.write(fi5 + '<br><br>');

document.write('--indexOf, lastindexOf-- <br>');

const ind = [1,1,'1',1];

document.write(ind.indexOf(1) + '<br>'); 
document.write(ind.indexOf('1') + '<br>'); 
document.write(ind.indexOf(1,1) + '<br><br>'); 

document.write(ind.lastIndexOf(1) + '<br>'); 
document.write(ind.lastIndexOf('1') + '<br>'); 
document.write(ind.lastIndexOf(1,1) + '<br><br>');

const ex = ['a',1,'b',2];

document.write(ex.indexOf(1) + '<br>');
document.write(ex.indexOf('a') + '<br>');
document.write(ex.indexOf('b') + '<br>');
document.write(ex.indexOf(1,1) + '<br><br>');

const elem = [1,1,'1',1];
let form = elem.indexOf(1) // 0
document.write(form + '<br>');

while(form != -1){
    // 0 != -1
    document.write(form+'form' +'<br>'); // 0
    //              0 + form
    form = elem.indexOf(1, form+1);
    // 1을 찾는 0,1,3의 값
    console.log(form + 'form');
}