/*  배열과 값을 받아들이고 그 값이 배열 안에 존재하는 경우 그 인덱스(0, 1, 2, ... 중 몇 번째에 위치하는지)를 반환하는 linearSearch라는 함수를성합니다. 값이 배열 안에 존재하지 않으면 -1을 반환합니다.
 linearSearch([10, 15, 20, 25, 30], 15) // 1
 linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
 linearSearch([100], 100) // 0
 linearSearch([1,2,3,4,5], 6) // -1
 linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
 linearSearch([100], 200) // -1
 이 함수를 구현할 때 indexOf를 사용하지 마세요! */

function linearSearch(arr, n) {
    return arr.findIndex((item) => item === n);
}

function linearSearch2(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) return i;
    }
    return -1;
}

// → O(n)
