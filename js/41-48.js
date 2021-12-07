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