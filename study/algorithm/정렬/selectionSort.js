// 주어진 리스트 중에 최소값을 찾는다.
// 그 값을 맨 앞에 위치한 값과 교체한다(패스(pass)).
// 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 교체한다.
// O(n^2)
// 메모리에 쓰는 것을 고려하거나, 스왑을 쓰는 경우라면 bubbleSolt보다 낫다

[9, 5, 8, 3, 1, 4];
[27, 29, 13, 35, 6];
[0, 8, 2, 4, 1, 9];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // arr[i] 현재요소 이전의 요소들은 이미 배열된 상태이므로 재확인할 필요가 없다
            // → 따라서 j는 0이 아닌 i+1부터 시작
            let minValue = arr[i];
            if (arr[j] < minValue) {
                arr[i] = arr[j];
                arr[j] = minValue;
            }
            console.log(i, j);
        }
    }
    return console.log(arr);
}

function selectionSort2(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
            console.log(i, j);
        }
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return console.log(arr);
}

function selectionSort3(arr) {
    const swap = (arr, index1, index2) =>
        ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
            console.log(i, j);
        }
        if (i !== lowest) swap(arr, i, lowest);
    }
    return console.log(arr);
}

selectionSort3([0, 8, 2, 4, 1, 9]);
