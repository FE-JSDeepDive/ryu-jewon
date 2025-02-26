암시적 타입 변환 : 엔진에 의해 자동으로 이루어지는 변환
명시적 타입 변환:   특정 함수를 사용하여 개발자가 변환
단축 평가 :  특정 조건이 만족되면 나머지 조건을 평가하지 않음 (&&, ||);
옵셔널 체이닝: null 또는 undefined일 경우 undefined를 반환
널 병합 연산자: null 또는 undefined일 경우에만 오른쪽 피연산자를 반환 (기본값 설정) *자바스크립트의 특징때문.
const user = null;
const city = user?.address?.city ?? "Unknown City"; 예시