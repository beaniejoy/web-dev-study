// Variables & Constant
/*
Constant
- const 상수를_지칭하는_이름 : 상수 선언 
- const 상수를_지칭하는_이름 = value : 상수를 선언하면서 바로 값을 할당한다.
 */

const sum = 5 + 10;

if (sum % 3 === 0) {
    console.log('야호3');
}

if (sum % 5 === 0) {
    console.log('야호5');
}

/*
let 변수를_지칭하는_이름 : 변수 선언
let variable = value : 변수 할당
- 선언이 안되어있는 변수에 할당하는 것은 에러 (java랑 비슷)
*/

let result = false;
if (sum % 3 === 0) {
    console.log('야호3');
    result = true;
}

if (sum % 5 === 0) {
    console.log('야호5');
    result = true;
}

console.log(result);