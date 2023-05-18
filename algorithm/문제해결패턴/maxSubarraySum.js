// 함수에 전달된 숫자의 길이로 연속된 배열의 최대 합계 찾기
// maxSubarraySum([100, 200, 300, 400], 2); // 700
// maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
// maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
// maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
// maxSubarraySum([2, 3], 3); // null

function maxSubarraySum(arr, arrLength) {
    let sum = 0;
    let left = 0;
    if (arr.length < arrLength) return null;
    for (let right = arrLength - 1; right < arr.length; right++) {
        let arrSum = arr
            .slice(left, right + 1)
            .reduce((acc, cur) => acc + cur, 0);
        if (arrSum > sum) {
            sum = arrSum;
        }
        left++;
    }
    return sum;
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));

// 정답
// function maxSubarraySum(arr, num) {
//     if (arr.length < num) return null;

//     let total = 0;
//     for (let i = 0; i < num; i++) {
//         total += arr[i];
//     }
//     let currentTotal = total;
//     for (let i = num; i < arr.length; i++) {
//         currentTotal += arr[i] - arr[i - num];
//         total = Math.max(total, currentTotal);
//     }
//     return total;
// }
