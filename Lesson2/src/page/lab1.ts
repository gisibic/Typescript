const BubbleSort = (arr: number[]) : number[] => {
     const num = arr.length;

     for(let i=0; i<num; i++){
        for(let j =0; j< num; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
     }
     return arr;
}
console.log(BubbleSort([7,8,9,2,45,63]));

// const SelectionSort = (selecArr: number[]) : number[] => {
//     // const Selection = selecArr.length;

//     for(let i=0; i< selecArr.length -1;i++ ){
//         let min =i;
//         for(let j = i+1; j < selecArr.length; j++){
//             if(selecArr[j] < selecArr[min]){
//                 min = j
//             }
            
//         }
//         const tmp = selecArr[min];
//            selecArr[min] = selecArr[i];
//            selecArr[i] = tmp;

//     }
//     return selecArr;
// }
// console.log(SelectionSort([45,6,32,5,4,4]));

// function selectionSort(arr: number []):number [] {
//     let min: number;
//     for (let i = 0; i < arr.length; i++) {
//         min = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         if (min !== i) {
//           swapTwo(arr, min, i);
//         }
//     }
//     return arr;
// }