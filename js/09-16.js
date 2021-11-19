//***********************************************************
//# Date : 2021.11.12
//***********************************************************

// 문자열에서 첫번째 글자 / 마지막 글자 가져오기
const skykim = "스카이킴";
const first = skykim.charAt(0);
const second = skykim.charAt(1);
const last = skykim.charAt(skykim.length-1);

document.write("첫번째 문자 : ", first, '<br>');
document.write("두번째 문자 : ", second, '<br>');
document.write("마지막 문자 : ", last, '<br><br>');

// substr, substring, slice 비교
const sub = "스카이킴입니다";
const firstsub = sub.substr(0,1);
const secondsub = sub.substr(1,1);
const lastsub = sub.substr(sub.length-1, 1);

document.write("첫번째 문자 :" , firstsub, '<br>');
document.write("두번째 문자 :" , secondsub, '<br>');
document.write("마지막 문자 :" , lastsub, '<br><br>');

// 문자열에서 특정문자열 치환
const frute = 'apple, banana, orange';
const replace = frute.replace('banana', 'tomato');

document.write('--문자열에서 특정문자열 치환-- <br>' );
document.write('변경 전 :' , frute , '<br>');
document.write('변경 후 :' , replace , '<br><br>');

// 대소문자 구분없이 문자열을 치환하는 방법
const frute2 = 'apple, BANANA, orange';
const replace2 = frute2.replace(/banana/i, 'tomato');

document.write('--대소문자 구분없이 문자열을 치환-- <br>' );
document.write('변경 전 :' , frute2 , '<br>');
document.write('변경 후 :' , replace2 , '<br><br>');

// 모든 문자열 치환하기
const frute3 = 'apple, banana, orange, banana';
const replace3 = frute3.replace(/banana/g, 'tomato');

document.write('--모든 문자열 치환-- <br>' );
document.write('변경 전 :' , frute3 , '<br>');
document.write('변경 후 :' , replace3 , '<br><br>');

// 문자열을 일정한 구분자로 잘라서 배열로 저장
const one = "apple banana orange";
const arr = one.split();

document.write('--문자열을 일정한 구분자로 잘라서 배열로 저장-- <br>' );
document.write(one + '<br>');
document.write(one.length + '<br><br>');


// chartAt 함수 활용
const char = "abcde";

document.write('--chartAt 함수 활용-- <br>' );
document.write(char.charAt() + '<br>');
document.write(char.charAt(0) + '<br>');
document.write(char.charAt(3) + '<br>');
document.write(char.charAt(char.length-1) + '<br>');
document.write(char.charAt(9999) + '<br><br>');

// 대괄호 인덱스 활용하기
document.write('--대괄호 인덱스 활용-- <br>' );
document.write(char[0] + '<br>');
document.write(char[char.length-1] + '<br>');
document.write(char[9999] + '<br><br>');

// indexOf 특정 문자의 위치 찾음
const indexof = "abcd";

document.write('--indexOf 특정 문자의 위치-- <br>' );
document.write(indexof.indexOf('ab') + '<br>'); //0
document.write(indexof.indexOf('bc') + '<br>'); //1
document.write(indexof.indexOf('cs') + '<br>'); //-1
document.write(indexof.indexOf('cd') + '<br><br>'); //2

// 문자열에 있는 모든 searchvalue 위치 찾기 
document.write('--문자열에 있는 모든 searchvalue 위치 찾기-- <br>' );
let str = 'abcabcabc'; //9 0,3,6
let searchvalue = 'ab';  //2

let pos = 0;
while (true) {
    let foundPos = str.indexOf(searchvalue, pos);
    // foundPos - 9 (2,0)
    if (foundPos == -1) break;

    document.write( foundPos + '<br><br>' );
    pos = foundPos + 1; 
}

// 문자열 합치기
const result = 'hello'.concat(' ','world','!');

document.write('--문자열 합치기-- <br>' );
document.write(result + '<br><br>');

const love = ['hello', 'world'].join();
const love2 = ['hello', 'world'].join(' lovelove ');

document.write(love+ '<br>');
document.write(love2+ '<br><br>');

// charAt, substr, substring, slice => 문자열 순서 가져는 법
// replace => 특정문자열로 치환
// split => 문자열을 일정한 구분자로 잘라서 저장
//chartAt => 문자열 찾아오기
// indexof => 특정 문자열 위치 찾기
// concat, join => 문자열 합치기