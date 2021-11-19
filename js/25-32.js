//***********************************************************
//# Date : 2021.11.18
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

// \, ` => 줄바꿈
// 숫자 콤마 제거 => replace();