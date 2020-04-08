// ######## identifier #########
var name = 'Mark'; // name
function hello() {} // hello
var person = {name:'Mark', age:37} // person, name, age 각각 식별자

// 대소문자를 구분한다.
var myName = 'Mark';
var myname = 'Joy';

/*
- '유니코드 문자', '$','_','숫자(0-9)'를 사용할 수는 있지만, 숫자로 시작할 순 없다.
- '예약어'는 사용할 수 없고, '공백 문자'도 사용할 수 없다.
*/

// in Browser
//올바른 식별자
var name1;
var $name;
var _name;
// var 1name; 올바르지 않음
var 이름; // 가능은 하지만 영문을 사용한다.

// mothereff.in/js-variables : 올바른 식별자 구분해줌


