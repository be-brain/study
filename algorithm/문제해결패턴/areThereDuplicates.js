// 숫자, 문자 혼합자료형 가변인수 중복여부 T/F 구하기(빈도수)

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

function areThereDuplicates(...args) {
    const arr = [...args];

    const result = arr.reduce((acc, cur) => {
        acc[cur] = acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
        return acc;
    }, {});
    const answer = Object.values(result).filter((item) => item > 1);
    if (answer.length) {
        return true;
    }
    return false;
}

console.log(areThereDuplicates("a", "b", "c", "a"));

// 정답
// function areThereDuplicates() {
//     let collection = {};
//     for (let val in arguments) {
//         collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
//     }
//     for (let key in collection) {
//         if (collection[key] > 1) return true;
//     }
//     return false;
// }
// function areThereDuplicates(...args) {
//     // Two pointers
//     args.sort((a, b) => a > b);
//     let start = 0;
//     let next = 1;
//     while (next < args.length) {
//         if (args[start] === args[next]) {
//             return true;
//         }
//         start++;
//         next++;
//     }
//     return false;
// }
// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
// }
