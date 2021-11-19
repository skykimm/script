//***********************************************************
//# Date : 2021.11.17
//***********************************************************

// 문자열의 첫글자만 대문자로 변환하기
const text = "sky";
// 첫번째 글자찾기
const firsttext = text[0];
// 첫번째 글자 대문자로 변환
const firstUpper = firsttext.toUpperCase();
// 첫번째 글자 제외한 나머지 글자
const lefttext = text.slice(1, text.length);
const result = firstUpper + lefttext;

document.write('--문자열의 첫글자만 대문자로 변환하기-- <br>' );
document.write(result + '<br><br>');

// 간결하게 찾기
const text2 = "sky";
const result2 = text2[0].toUpperCase() + text2.slice(1, text2.length);

document.write('--문자열의 첫글자만 대문자로 간결하게 변환하기-- <br>' );
document.write(result2 + '<br><br>');

// 문자열의 첫글자 삭제하기
const del = "abcd";
const newdel1 = del.substr(1);
const newdel2 = del.substring(1);
const newdel3 = del.slice(1);

document.write('--문자열의 첫글자 삭제하기-- <br>' );
document.write(newdel1 + '<br>');
document.write(newdel2 + '<br>');
document.write(newdel3 + '<br><br>');

// 문자열 뒤에서 자르기
const textnext = "abcde";
const nexttext1 = textnext.slice(-2, textnext.length);
const nexttext2 = textnext.slice(-2);

document.write('--문자열 뒤에서 자르기-- <br>' );
document.write(nexttext1 + '<br>');
document.write(nexttext2 + '<br><br>');

//문자열이 숫자인지 체크하는 방법
document.write('--문자열이 숫자인지 체크하는 방법-- <br>' );
document.write(isNaN("123") + '<br>');
document.write(isNaN("123.33") + '<br>');
document.write(isNaN(123) + '<br>');
document.write(isNaN("Abc") + '<br><br>');

// '123', '123.21', 123 숫자가 입력 되면 => false
// 123+123 숫자가 아닌 기호가 있기에 => true
// undefined => true
// " ", ' ', null, true, false, [] => false
// new Date(), toString() 문자열 => true

// 문자열 숫자로 변환하기
document.write('--문자열 숫자로 변환하기-- <br>' );
document.write(parseInt("10") + '<br>');
document.write(parseInt("-10") + '<br>');
document.write(parseInt(10) + '<br>');
document.write(parseInt("1000000nnnnn2") + '<br>');
document.write(parseInt("k10") + '<br>');
document.write(parseInt("10k") + '<br><br>');

document.write(parseFloat("10") + '<br>'); 
document.write(parseFloat("-10") + '<br>'); 
document.write(parseFloat("10.9") + '<br>'); 
document.write(parseFloat(10.9) + '<br>'); 
document.write(parseFloat("zz10") + '<br><br>'); 

document.write((+"10") + '<br>'); 
document.write((+"1.1") + '<br>');
document.write((+"abc") + '<br>');
document.write((+false) + '<br>');
document.write((+true) + '<br><br>');

document.write("10" * 1 + '<br>'); 
document.write("10.1" * 1 + '<br>'); 
document.write("-10" * 1 + '<br>'); 
document.write("1231abc" * 1 + '<br>'); 
document.write("abc" * 1 + '<br><br>'); 

// 문자열 거꾸로 뒤집기
const curr = new Date();

document.write('--문자열 거꾸로 뒤집기-- <br>' );
document.write(curr + '<br><br>');

const curr2 = ['sky', 'skykim', 'kim'];
const reverse = curr2.reverse();
// const newCurr = curr2.split().reverse().join();

// document.write(newCurr + '<br><br>');
document.write(reverse + '<br><br>');


// 대문자로 변환 => toUpperCase();
// 문자열 삭제 => substr(), substring(), slice();
// 문자열 / 숫자 인지 확인 하는 방법 => isNaN();
// 문자열 숫자로 변환 => parseInt(), parseFloat();
// 문자열 거꾸로 뒤집기 => split(), reverse(), join();