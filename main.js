const swap = (arr, index_a, index_b) => {
    let temp = arr[index_a]
    arr[index_a] = arr[index_b]
    arr[index_b] = temp

    return arr
}

const partition = (arr, start, end) => {
    const pivot = arr[end]
    let partitionIndex = start
    for(let i = start; i < end; i++) {
        if(arr[i]<=pivot){
            arr = swap(arr, i, partitionIndex)
            partitionIndex += 1
        }
    }

    return [
        swap(arr, end, partitionIndex),
        partitionIndex
    ]
}

const quicksort = (arr, start, end) => {
    if(start < end) {
        [arr,pivotIndex] = partition(arr, start, end)

        quicksort(arr, start, pivotIndex - 1)
        quicksort(arr, pivotIndex + 1, end)
    }

    document.getElementById("result").innerHTML = arr
}
quicksort([30, 89, 21, 08, 11, 15, 14, 200], 0, 7)
