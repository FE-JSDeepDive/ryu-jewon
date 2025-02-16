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

// var ch4Quiz = createClosures();

// console.log(ch4Quiz[0]()); 3
// console.log(ch4Quiz[1]()); 3
// console.log(ch4Quiz[2]()); 3

/** ---------------------------------------------------------------- */ 
// var의 스코프 범위 때문애 closure를 형성하지 않아 let/ const 로 수정함, 혹은 IIFE 사용