// 두 개의 양의 정수가 주어지면 빈도수가 같은지 확인

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(a, b) {
    if (a.length !== b.length) return false;
    const A = a.toString();
    const B = b.toString();
    const obj = {};
    for (let i = 0; i < A.length; i++) {
        let num = A[i];
        obj[num] ? (obj[num] += 1) : (obj[num] = 1);
    }
    for (let i = 0; i < B.length; i++) {
        let num = B[i];
        if (!obj[num]) {
            return false;
        } else {
            obj[num] -= 1;
        }
    }
    return true;
}
console.log(sameFrequency(22, 222));
