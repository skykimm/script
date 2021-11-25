//***********************************************************
//# Date : 2021.11.24
//***********************************************************

// 문자열 줄바꿈하는 2가지 방법
// const br = 's\nk\ny\nkim';

// document.write('--문자열 줄바꿈하는 2가지 방법-- <br>' );
// document.getElementById("skykim").innerHTML=br;

// const str =`a
// b
// c`;

// document.getElementById("skykim2").innerHTML=str;

// 숫자 콤마 제거하는 2가지 방법
const br = "123,12,34,56";
const brdel = br.replace(",","");

document.write('--숫자 콤마 제거하는 2가지 방법-- <br>' );
document.write(brdel + '<br>');

const br2 = "123,12,34,56";
const brdel2 = br2.replace(/,/g,"");

document.write(brdel + '<br>');


const br3 = "12,3,3,4,555";
const brdel3 = br3.split(',').join("");

document.write(brdel3 + '<br><br>');

// 문자열에서 마지막 콤마 제거하기
const str1 = "apple, banana";
const str2 = "apple, banana,";
const str3 = "apple, banana,  ";

const rstr1 = str1.replace(/,\s*$/,"");
const rstr2 = str2.replace(/,\s*$/,"");
const rstr3 = str3.replace(/,\s*$/,"");

document.write('--문자열에서 마지막 콤마 제거-- <br>');
document.write(rstr1 + '<br>');
document.write(rstr2 + '<br>');
document.write(rstr3 + '<br><br>');

// 데이터 타입 확인하기
document.write('--데이터 타입 확인하기-- <br>');
document.write(typeof "ABC" + '<br>');
document.write(typeof 1 + '<br>');
document.write(typeof {name : "sky"} + '<br><br>');

// 배열인지 확인하기
document.write('--배열인지 확인하기-- <br>');
document.write(Array.isArray([1,2]) + '<br>');
document.write(Array.isArray(new Array) + '<br>');
document.write(Array.isArray({}) + '<br><br>');


//node type 체크하기 
// document.write('--node type 체크하기-- <br>');

// let elem = document.getElementById("skykim");

// const docType = document.nodeType;
// const divType = elem.nodeType;
// const textType = elem.firstChild.nodeType;

// document.getElementById('skykim2').innerText += docType;
// document.getElementById('skykim2').innerText += divType;

// '=='와 '==='의 차이
document.write('-- ==와 ===의 차이-- <br>');
document.write(undefined == null);
document.write(undefined === null);

document.write('<br><br>');

// == 연산자를 이용한 null, undefined 비교
let a;
let b  = null;

document.write('--연산자를 이용한 null, undefined 비교-- <br>');
document.write(a == null);
document.write('<br>');
document.write(a == undefined);
document.write('<br>');
document.write(b == null);
document.write('<br>');
document.write(b === undefined);
document.write('<br>');


// \, ` => 줄바꿈
// 숫자 콤마 제거 => replace();
// 문자열 콤마 제거 정규식 => /,\s*$/,""
// "1", 1 => == true
// "1", 1 => === falue