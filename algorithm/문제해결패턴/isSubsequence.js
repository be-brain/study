// 첫 번째 문자열의 문자가 순서를 변경하지 않고 두 번째 문자열의 어딘가에 나타나는지 여부를 확인

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// isSubsequence("singgg", "sting"); // false

function isSubsequence(a, b) {
    if (!a.length) return true;
    if (!b.length) return false;

    let i = 0;
    let j = 0;
    while (j < b.length) {
        if (b[j] === a[i]) i++;
        // i(index)가 a의 길이와 같아지면 = index의 최대크기는 length - 1이므로 a길이보다 커졌다는 뜻
        if (i === a.length) return true;
        j++;
    }
    return false;
}

console.log(isSubsequence("sind", "sting"));

// 정답
// function isSubsequence(str1, str2) {
//     let i = 0;
//     let j = 0;
//     if (!str1) return true;
//     while (j < str2.length) {
//         if (str2[j] === str1[i]) i++;
//         if (i === str1.length) return true;
//         j++;
//     }
//     return false;
// }
// function isSubsequence(str1, str2) {
//     if (str1.length === 0) return true;
//     if (str2.length === 0) return false;
//     if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
//     return isSubsequence(str1, str2.slice(1));
// }
