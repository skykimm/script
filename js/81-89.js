let date = new Date(2022, 0, 31);
document.write('기준일자 : ' + date.toLocaleString() + '<br>');

date.setMonth(date.getMonth() + 1);
document.write('1달 후 : ' + date.toLocaleString() + '<br>');

date = new Date(2022, 0, 31);
date.setMonth(date.getMonth() - 1);
document.write('1달 전 : ' + date.toLocaleString() + '<br><br>');

const str = "2022-01-28";
const strArr = str.split('-');
const day = new Date(strArr[0], strArr[1]-1, strArr[2]);

document.write(day);
document.write('<br>');

const date1 = new Date(2022,1,28);
const date2 = new Date(2022,2,3);
const doyeon = date2.getTime() - date1.getTime();
const doyeonday = doyeon / 1000 / 60 / 60 / 24;

document.write(doyeon + '<br>');
document.write(doyeonday+ '<br><br>');

// function test(){
//     let sum = 0;
//     for(let i = 1; i <= 1000000; i++){
//         sum = sum + i;
//     }
// }

// let start = new Date();
// test();
// let end = new Date();

// document.write(end - start + '<br>');

const today = new Date();
const birthdate = new Date(1994,4,27);

let age = today.getFullYear() - birthdate.getFullYear() + 1;
document.write(age + '<br>');

const m = today.getMonth() - birthdate.getMonth();
if(m < 0 || (m===0 && today.getDate() < birthdate.getDate())){
    age--;
}
document.write(age + '<br><br>');

document.write(Math.abs(-10) + '<br>');
document.write(Math.abs(-10.123) + '<br>'); 
document.write(Math.abs(10) + '<br>'); 
document.write(Math.abs("-2") + '<br>'); 
document.write(Math.abs("")) + '<br>';
document.write(Math.abs(true) + '<br>'); 
document.write(Math.abs(false) + '<br>'); 
document.write(Math.abs(null) + '<br>'); 
document.write(Math.abs(undefined) + '<br>'); 
document.write(Math.abs("apple") + '<br>'); 