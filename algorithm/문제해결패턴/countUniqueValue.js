const arr = [1, 1, 1, 1, 1, 2];

// 내가 쓴 풀이
function countUniqueValues(arr) {
    let left = 0;
    let right = left + 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            right = right + 1;
        } else {
            left = left + 1;
        }
    }
    return left;
}

console.log(countUniqueValues(arr));

// 정답
function countUniqueValues2(arr) {
    let i = 0;
    if (arr.length === 0) return 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
