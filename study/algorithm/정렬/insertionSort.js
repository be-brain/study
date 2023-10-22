// 삽입정렬
// O(n^2)
// 선택 정렬, 버블 정렬에 비해 상대적으로 빠름

function insertionSort(arr) {
    // i는 0이 아니라 1부터 시작
    for (let i = 1; i < arr.length; i++) {
        let curValue = arr[i];
        let j;
        for (j = i - 1; j > -1 && arr[j] > curValue; j--) {
            // arr[j] > curValue : 순회하는 배열요소 arr[j]가 만약 현재 비교할 요소 curValue보다 작으면 그 즉시 반복문을 종료하고 해당 위치에 curValue를 집어넣는다
            arr[j + 1] = arr[j]; // arr[j]가 curValue보다 크다면 arr[j]를 현재 인덱스(j)에서 한칸 뒤로(j+1) 보내준다(복붙)
        }
        // arr[j]는 curValue보다 작은 요소이므로 j+1 자리에 넣어주어야 한다
        // = (arr[j] < curValue이면 반복문 종료하고 arr[j]의 뒤에 curValue를 넣어줌)
        arr[j + 1] = curValue;
        console.log(arr);
    }
    return arr;
}

console.log(insertionSort([2, 13, 9, 26, 4]));
