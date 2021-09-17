export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let highest = 0;
    for(let i = 0; i < inputArray.length; i++){
        let subArrayTotal = inputArray.slice(i,  i + k);
        if(subArrayTotal.reduce((a, b) => a + b) > highest){
            highest = subArrayTotal.reduce((a, b) => a + b);
        }
    }
    return highest;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([1, 1, 1, 1, 100], 3));