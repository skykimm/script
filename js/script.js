
// 정수로 올림
const plus1 = Math.ceil(1) //1
const plus2 = Math.ceil(1.22) //2
const plus3 = Math.ceil(1.7) //2

document.write('--정수로 올림-- <br>');
document.write('ceil(1) : ' + plus1 + '<br>' );
document.write('ceil(1.22) : ' + plus2 + '<br>' );
document.write('ceil(1.7) : ' + plus3 + '<br> <br>' );


// null 또는 0
const same1 = Math.ceil(null) //0
const same2 = Math.ceil(0) //0

document.write('--null 또는 0-- <br>' );
document.write('ceil(null) :' + same1 + '<br>');
document.write('ceil(0) :' + same2 + '<br> <br>');


// 음수로 내림
const minus1 = Math.ceil(-1) //-1
const minus2 = Math.ceil(-1.1111) //-1
const minus3 = Math.ceil(-1.7) //-1

document.write('--음수로 내림-- <br>' );
document.write('ceil(-1) :' + minus1 + '<br>');
document.write('ceil(-1.1111) :' + minus2 + '<br>');
document.write('ceil(-1.7) :' + minus3 + '<br> <br>');

// 소수점 이하
const ceil1 = Math.ceil(1.222 * 10) / 10 //1.222 = > 1.3

// 10,100단위
const ceil2 = Math.ceil(1222 / 100) * 100; //1222 = > 1.300

document.write('--소수점 이하-- <br>' );
document.write('ceil1 :' + ceil1 + '<br><br>');

document.write('--10,100단위-- <br>' );
document.write('ceil2 :' + ceil2 + '<br> <br>');

// 정수인지 실수인지
document.write('--정수 VS 실수 체크방법 2가지-- <br>' );
document.write(Number.isInteger(10) + '<br>');
document.write(Number.isInteger(27) + '<br>');
document.write(Number.isInteger(27.545) + '<br>');
document.write(Number.isInteger(200) + '<br><br>');


function isInteger(number){
    return number % 1 === 0;
}

document.write('--나머지 연산자 % 활용-- <br>' );
document.write(isInteger(10) + '<br>');
document.write(isInteger(2.15) + '<br><br>');

// 소문자를 대문자로 변환
const sky_uppercase = 'aBC'.toUpperCase();
document.write('--소문자를 대문자로 변환-- <br>' );
document.write(sky_uppercase + '<br><br>');

// 대문자를 소문자로 변환
const sky_rowercase = 'aBC'.toLocaleLowerCase();
document.write('--대문자를 소문자로 변환-- <br>' );
document.write(sky_rowercase + '<br><br>');

// 문자열
const hong = "'홍길동님' 안녕하세요?";
const hong2 = '"홍길동님" 안녕하세요?';

document.write('--문자열-- <br>' );
document.write(hong + '<br>');
document.write(hong2 + '<br><br>');

// 문자열 공백제거
const trim1 = "문 자 열     의 앞 뒤   공백 제거하기";
document.write('--문자열 공백제거-- <br>' );
document.write(trim1.trim() + '<br><br>');


// 2021.11.12 오전
// ceil => 올림
// floor => 내림
// round => 반올림
// isInteger => 정수, 실수 확인 법
// toUpperCase => 대문자로 변환, toLocaleLowerCase => 소문자로 변환
// trim => 문자열 공백제거