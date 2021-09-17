export function arrayChange(inputArray: number[]): number {
    let total = 0;
    for(let i = 0; i <= inputArray.length - 1; i++){
        if(!inputArray[i + 1]){
            total += inputArray[inputArray.length - 1] - inputArray[i] + 1;
        }
        if(inputArray[i] <= inputArray[i + 1]){
            total += inputArray[i + 1] - inputArray[i] + 1
        }
    }
    return total
}


console.log(arrayChange([1, 1, 1]));