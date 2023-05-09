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
