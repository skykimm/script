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