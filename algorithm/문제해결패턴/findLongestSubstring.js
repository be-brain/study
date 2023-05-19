// 고유한 문자만 포함하는 가장 긴 하위 문자열의 길이를 반환

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

function findLongestSubstring(str) {
    if (!str.length) return 0;
    const arr = [];
    let start = 0;
    let end = 0;
    let maxLength = 0;
    while (start < str.length) {
        if (!arr.includes(str[end]) && str[end]) {
            arr.push(str[end]);
            end++;
        } else if (
            (!arr.includes(str[end]) && !str[end]) ||
            arr.includes(str[end])
        ) {
            maxLength = Math.max(maxLength, end - start);
            arr.splice(0, arr.length);
            start++;
            end = start;
        } else {
            break;
        }
    }
    return maxLength;
}

console.log(findLongestSubstring("thisishowwedoit"));

// 정답
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}
