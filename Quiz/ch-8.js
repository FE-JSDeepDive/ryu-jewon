// 원본 객체
const original = {
    name: 'Alice',
    age: 25,
    hobbies: ['reading', 'gaming']
};

// 얇은 복사 - Object.assign() 얇은 복사는 객체의 최상위 속성만 복사하므로, 깊은 복사에 비해 성능이 더 빠름
const shallowCopy1 = Object.assign({}, original);

// 얇은 복사 - 스프레드 연산자
const shallowCopy2 = { ...original };

// 깊은 복사 - 깊은 복사는 모든 레벨의 속성을 재귀적으로 복사, 느림, but 독립성,안전성 보장.
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 재귀 호출로 깊은 복사
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
}

/* immer와 deepCopy의 차이 **/
// 변경된 부분만 추적하고 새로운 객체를 생성하기 때문에, 성능 면에서 더 효율적임. (재귀적 호출X)

/* ?? 연산자 활용사례 */
// 내부적으로 정의하지 않은 상태일 경우 defaultValue 출력
//const defaultMessage = "기본 오류 메시지입니다.";
// const finalMessage = response.status === 404 ? (response.message ?? defaultMessage) : response.message; 

const response = {
    status: 404,
    message: null 
};