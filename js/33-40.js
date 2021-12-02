//***********************************************************
//# Date : 2021.11.30
//***********************************************************

// 문자열 비교하기
const str1 = 'apple';
const str2 = 'apple';
const str3 = 'banana';

document.write('-- ==와 ===의 비교-- <br>');
document.write(str1 === str2);
document.write('<br>');
document.write(str1 == str2);
document.write('<br>');
document.write(str2 == str3);
document.write('<br>');
document.write(str2 === str3);
document.write('<br><br>');

// 비교 연산자 < > 비교하기
document.write('-- < 와 >의 비교-- <br>');
document.write('apple' > 'banana');
document.write('<br>');
document.write('apple' < 'banana');
document.write('<br>');
document.write('apple' > 'abcd');
document.write('<br>');
document.write('apple' > 'a');
document.write('<br>');
document.write('apple' > 'Banana');
document.write('<br>');
document.write('apple' > '1');
document.write('<br><br>');

// for 반복문
// for(초기화; 조건식; 증감문){
    // 반복 할 코드
// };

for(let i = 0; i < 5; i++){
    const text = i + "번째 반복문<br>";
    document.write(text);
}
document.write('<br>');

// 배열 읽어오기
const colors = ['red', 'yellow', 'black'];
for(let i = 0; i < colors.length; i++){
    const text = 'This is ' + colors[i] + '<br>';
    document.write(text)
}

document.write('<br><br>');

// for문을 이용해 별찍기

// 정사각형 별찍기
for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        document.write('*');
    }
    document.write('<br>');
}
document.write('<br>');

// 삼각형 별찍기
for(let i = 0; i < 5; i++){
    for(let j = 0; j <= i; j++){
        document.write('*');
    }
    document.write('<br>');
}
document.write('<br><br>');

for(let i = 0; i < 5; i++){
    for(let j = 4; j > i; j--){
        document.write('&nbsp');
    }
    for(let j = 0; j <= i; j++){
        document.write('*');
    }
    document.write('<br>');
}
document.write('<br><br>');

//거꾸로 삼각형 별찍기
for(let i = 0; i < 5; i++){
    for(let j = 5; j > i; j--){
        document.write('*');
    }
    document.write('<br>');
}
document.write('<br><br>');

for(let i = 0; i < 5; i++){
    for(let j = 0; j <= i; j++){
        document.write('&nbsp');
    }
    for(let j = 5; j > i; j--){
        document.write('*');
    }
    document.write('<br>');
}
document.write('<br><br>');

// 정삼각형 별찍기
for(let i =0; i<5; i++){
    for(let j = 4; j>i; j--){
        document.write('&nbsp');
    }
    for(let j = 0; j <=i; j++){
        document.write('*');
    }
    for(let j = 1; j <= i; j++){
        document.write('*');
    }
    document.write('<br>');
}
document.write('<br><br>');

// 거꾸로 정삼각형 별찍기
for(let i = 0; i < 5; i++){
    for(let j = 0; j < i; j++){
        document.write('&nbsp');
    }
    for(let j = 5; j > i; j--){
        document.write('*');
    }
    for(let j = 4; j > i; j--){
        document.write('*');
    }
    document.write('<br>');
}
document.write('<br><br>');

// 다이아몬드 별찍기
for(let i =0; i<5; i++){
    for(let j = 4; j>i; j--){
        document.write('&nbsp');
    }
    for(let j = 0; j <=i; j++){
        document.write('*');
    }
    for(let j = 1; j <= i; j++){
        document.write('*');
    }
    document.write('<br>');
}
for(let i = 0; i < 5; i++){
    for(let j = 0; j < i; j++){
        document.write('&nbsp');
    }
    for(let j = 5; j > i; j--){
        document.write('*');
    }
    for(let j = 4; j > i; j--){
        document.write('*');
    }
    document.write('<br>');
}
document.write('<br><br>');


// 구구단찍기
for(let i = 2; i <= 9; i++){
    document.write(i + '단');
    document.write('<br>');
    for(let j = 1; j <= 10; j++){
        document.write(i + '*' + j + '=' + (i*j));
        document.write('<br>');
    }
}
document.write('<br><br>');

// do while 반목문
// do {
// }
// while (조건문);
let i = 1;
do{
    const text = i + '번 째 반복문 <br>';
    document.write(text);
    i++;
}
while(i <=5);
document.write('<br><br>');

let s = 1;
do{
    const sky = '스카이' + s + '<br>';
    document.write(sky);
    s++;
}
while(s <=3);
document.write('<br><br>');

// 객체의 모든 key, value 값 가져오기
// for( variable in object){
// 코드블럭
//}

const skykim = {
    name : 'sky',
    age : 28,
    id : 'skykim'
};

for(prop in skykim)  {
    document.write(prop + " : "  + skykim[prop] + '<br>');
}
document.write('<br><br>');

const Colors = {
    color1 : 'red',
    color2 : 'black',
    color3 : 'yellow',
    color4 : 'gold'
};

for(prop in Colors){
    document.write(prop + " : " + Colors[prop] + '<br>');
}
document.write('<br><br>');

// for of문
// for(variable of object){
//  statement
//}

document.write('--for of문-- <br>');
const arr = [1,2,3];

for(Element of arr){
    document.write(Element);
    document.write('<br>');
}
document.write('<br>');

const arr2 = 'skykim';

for(Element of arr2){
    document.write(Element);
    document.write('<br>');
}
document.write('<br><br>');

const map = new Map();
map.set('key1','value1');
map.set('key2','value2');

for(element of map){
    document.write(`${element[0]}, ${element[1]}`);
    document.write('<br>');
}
document.write('<br><br>');

const set = new Set();
set.add('value1');
set.add('value2');

for(element of set){
    document.write(element);
    document.write('<br>');
}

