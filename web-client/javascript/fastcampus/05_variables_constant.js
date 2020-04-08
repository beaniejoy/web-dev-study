/*
########### Variables & Constant ############
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

/*
############# Scope of Variables ##############
- const, let의 유효범위: block scope {}
*/

{
    //
    const name = "Beanie";
    console.log(name);
}
// console.log(name); ReferenceError 반환한다. block 내부에서만 유효 블럭 밖에서 선언은 안에서나 밖에서나
// 유효하다.
let age = 37;
{
    age++;
    console.log(age); // 38
}
console.log(age); // 38

// 중첩
{
    {
        let temp = "Good";
        {
            console.log(temp);
        }
    }
    // console.log(temp); 여기서는 에러
}

// 조건문과 반복문에서도 block scope가 적용된다.

/*
- **var의 유효 범위: 함수 scope**
- ES5까지 var를 사용하다가 ES6부터 const, let을 사용
- 함수 스코프보다 블럭 스코프가 더 직관적이고 보기 좋기 때문에
function() {}
*/
var a = 0;
// 함수를 작성하고 바로 실행하는 즉시 실행 함수;
(function(){
    console.log(a);    
})();
console.log(a);

(function(){
    var b = 0;
    console.log(b);
})();
// console.log(b); 여기서 에러

// 블록 스코프에서는 var가 다르게 작동
var c = 0;
{
    c++;
    console.log(c);
}

{
    var d = 0;
    console.log(d);
}
d++;
console.log(d); // const, let은 안됐었지만 var는 가능
// var는 블록 스코프가 아닌 함수 스코프로 작동되기 때문이다.