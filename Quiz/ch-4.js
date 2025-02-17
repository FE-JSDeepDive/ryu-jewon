/** 아래 결과를 차례로 0,1,2로 나올 수 있게 하는 방법과 그 이유 */
/** ---------------------------------------------------------------- */ 
// function ch4Quiz() {
//     var functions = [];
//     for (var i = 0; i < 3; i++) {
//         functions[i] = function() {
//             return i;
//         };
//     }
//     return functions;
// }

// var answer = ch4Quiz();

// console.log(answer[0]()); 3
// console.log(answer[1]()); 3
// console.log(answer[2]()); 3

/** ---------------------------------------------------------------- */ 
// var의 스코프가 함수단위 이기 때문에 항상 같은 i를 참조하게 됨. let/ const 로 수정함, 혹은 IIFE 사용
// 추가설명.
// function ch4Quiz() {
//  var functions = [];
//  var i = 0;
//
//  function loopIteration() {
//      if (i >= 3) return;
//
//      functions[i] = function() {
//          return i;
//      };
//
//      i++;
//      loopIteration(); 
//  }
//
//  loopIteration();
//
// return functions;
// }

