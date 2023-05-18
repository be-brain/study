// 주어진 정수보다 크거나 같은 연속 하위 배열의 최소 길이

// minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0

function minSubArrayLen(arr, num) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return 1;
        total += arr[i];
        if (i === arr.length && total < num) return 0;
    }
    // left, right
    // 2개씩부터 count, arr.length까지
    let sum = 0;
    let counting = 1;
    let left = 0;
    let right = counting;
    // 1. 배열합구하기
    for (let i = left; i < right + 1; i++) {
        sum += arr[i];
    }
    while (right - left < arr.length - 1) {
        // 2. 배열합이 num과 같거나 큰지 비교
        if (sum >= num) {
            return right - left;
        }
        // 3. 아니면 left,right이 증가
        left++;
        right++;
        if (right === arr.length - 1) {
            counting++;
            left = 0;
            right = counting;
        }
        // 4. 배열합에서 arr[left-1]을 빼주고 arr[right] 더하기
        if (right - left > 1) {
            sum -= arr[left - 1] + arr[right];
        }
        // 2~4 반복(언제까지? right-left가 배열길이일때까지)
    }
    return arr.length;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));

// 정답
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then
        // move the window to right
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window
        else if (total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}
