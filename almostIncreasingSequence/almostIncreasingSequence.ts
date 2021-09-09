export function almostIncreasingSequence(sequence: number[]): boolean {
    let result = 0;
    let counter = 0;
    while(result <=1 && counter < sequence.length){
        if(sequence[counter] > sequence[counter + 1]){
            result++;
        }
        counter++;
    }
    return result <= 1;
}

// console.log(almostIncreasingSequence([1, 3, 2, 1])) 
// console.log(almostIncreasingSequence([1, 3, 2])) 