/** 서로 인접한 두 원소를 검사하여 정렬하는 알고리즘
인접한 2개의 레코드를 비교하여 크기가 순서대로 되어 있지 않으면 서로 교환한다.*/
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log("arr : ", arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// ↓
/**
 *
 * @param {*} arr
 * @returns
 */
function bubbleSort2(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log("arr : ", arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        console.log("one path complete");
    }
    return arr;
}
// ↓
function bubbleSort3(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            console.log("arr : ", arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
        console.log("one path complete");
    }
    return arr;
}

console.log(bubbleSort3([8, 1, 2, 3, 4, 5]));
